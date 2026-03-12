import {useState} from "react";
import useStepThree, {addOns, IAddOn} from "./useStepThree";
import {useStepThreeStore} from "./useStepThreeStore";

interface IAddOnDetail {
  name: string;
  price: string;
}

import {plans, IPlan} from "./useStepTwo";
import {useStepTwoStore} from "./useStepTwoStore";

function extractNumber(stringNumber: string): number {
  const match = stringNumber.match(/\d+(\.\d+)?/);
  const price = parseFloat(match ? match[0] : "0");
  return price;
}

const getPlanPrice = (plans: IPlan[], chosenPlan: string, isMonthly: boolean): string => {
  let plan = plans.find(({name}) => name === chosenPlan);

  if (!plan) plan = {name: "Unknown", monthlyPrice: "$999/mo", yearlyPrice: "$999/yr", monthsFree: "0 month free", icon: ""};

  return isMonthly ? plan!.monthlyPrice : plan!.yearlyPrice;
};

const getAddOnsDetails = (addOns: IAddOn[], chosenAddOns: string[], isMonthly: boolean): IAddOnDetail[] => {
  const addOnsDetails: IAddOnDetail[] = [];

  chosenAddOns.forEach(addOnName => {
    const addOn = addOns.find(({name}) => name === addOnName);

    if (!addOn) return;

    addOnsDetails.push({
      name: addOn.name,
      price: isMonthly ? addOn.monthlyPrice : addOn.yearlyPrice,
    });
  });

  return addOnsDetails;
};

const getTotalPrice = (isMonthly: boolean, planPrice: string, addOnDetails: IAddOnDetail[]): string => {
  const numberPlanPrice = extractNumber(planPrice);
  const totalAddOns = addOnDetails.reduce((total, addOnDetail) => {
    return total + extractNumber(addOnDetail.price);
  }, 0);

  const totalPrice = numberPlanPrice + totalAddOns;

  return `$${totalPrice}/${isMonthly ? "mo" : "yr"}`;
}

interface UseStepFour {
  setCurrentStep: (step: number) => void;
}

export default function useStepFour({setCurrentStep}: UseStepFour) {
  const chosenPlan = useStepTwoStore((state) => state.chosenPlan);
  const isMonthly = useStepTwoStore((state) => state.isMonthly);
  const chosenAddOns = useStepThreeStore(state => state.chosenAddOns);
  const [isThanksShowed, setIsThanksShowed] = useState<boolean>(false);

  const planPrice = getPlanPrice(plans, chosenPlan, isMonthly);
  const addOnsDetails = getAddOnsDetails(addOns, chosenAddOns, isMonthly);
  const totalPrice = getTotalPrice(isMonthly, planPrice, addOnsDetails);

  const showThanks = (): void => {
    setIsThanksShowed(true);
  };

  const handleClickChange = () => {
    setCurrentStep(1);
  };

  return {chosenPlan, isMonthly, planPrice, addOnsDetails, totalPrice, isThanksShowed, showThanks, handleClickChange, };
}