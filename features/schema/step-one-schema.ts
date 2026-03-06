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
      name: z.string()
        .min(5, {message: "Name must be at least 5 characters"})
        .max(10, {message: "Name must be at most 10 characters"}),
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