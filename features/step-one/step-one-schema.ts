import {useMemo} from "react"
import {z} from "zod";

interface IData {
  name?: string;
  emailAddress?: string;
  phoneNumber?: string;
};

export const StepOneSchema = ({data = {}}: {data?: IData} = {}) => {
  return useMemo(() => {
    const schema = z.object({
      name: z.string().min(1, {message: "Name is required"}),
      emailAddress: z.email({error: "Invalid email address"}),
      phoneNumber: z.string().regex(/^\+?[0-9\s\-()]+$/, {error: "Invalid phone number"}),
    });

    const defaults = {
      name: data.name || "",
      emailAddress: data.emailAddress || "",
      phoneNumber: data.phoneNumber || "",
    };

    return {schema, defaults};
  }, [data]);
}