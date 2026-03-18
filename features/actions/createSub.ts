"use server";

import {db} from "../db";
import {chosenAddOnsTable, chosenPlanTable, isPlanMonthlyTable, usersTable} from "../db/schemas/userSchema";

interface ISub {
  user: {
    name: string;
    emailAddress: string;
    phoneNumber: string;
  };
  chosenPlan: string;
  isMonthly: boolean;
  chosenAddOns: string[];

}

async function useTransactionToCreateSub(props: ISub) {
  const {
    user: {
      name,
      emailAddress,
      phoneNumber
    },
    chosenPlan,
    isMonthly,
    chosenAddOns,
  } = props;

  const user: typeof usersTable.$inferInsert = {
    name, emailAddress, phoneNumber,
  };

  try {
    await db.transaction(async (tx) => {
      const [returnedUser] = await tx
        .insert(usersTable)
        .values(user)
        .returning({id: usersTable.id});

      const [returnedIsPlanMonthly] = await tx
        .insert(isPlanMonthlyTable)
        .values({
          userId: returnedUser.id,
          isPlanMonthly: isMonthly ? 1 : 0
        })
        .returning({id: isPlanMonthlyTable.id})


      await tx
        .insert(chosenPlanTable)
        .values({
          isMonthlyId: returnedIsPlanMonthly.id,
          planId: chosenPlan,
        });

      const chosenAddOnsDetails = chosenAddOns.map(chosenAddOn => ({
        isMonthlyId: returnedIsPlanMonthly.id,
        addOnsId: chosenAddOn,
      }));

      await tx
        .insert(chosenAddOnsTable)
        .values(chosenAddOnsDetails);
    });
  } catch (error) {
    console.error("something is wrong =>", error);
    throw (error);
  }
}

export async function createSub({
  user,
  chosenPlan,
  isMonthly,
  chosenAddOns,
}: {
  user: ISub["user"],
  chosenPlan: string,
  isMonthly: boolean,
  chosenAddOns: string[]
}) {
  try {
    await useTransactionToCreateSub({user, chosenPlan, isMonthly, chosenAddOns});
  } catch (error: any) {

    console.log("error =>", JSON.stringify(error));
    const errors: {field: string, message: string}[] = [];

    const detail = error?.cause?.detail ?? "";

    if (detail.includes("emailAddress") && detail.includes("already exists")) {
      errors.push({field: "emailAddress", message: "Email address already exists."});
    }

    if (detail.includes("phoneNumber") && detail.includes("already exists")) {
      errors.push({field: "phoneNumber", message: "Phone number already exists."});
    }

    console.error(errors);
    return errors;
  }
}