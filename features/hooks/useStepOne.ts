import {zodResolver} from "@hookform/resolvers/zod";
import {useForm, SubmitHandler} from "react-hook-form";
import {StepOneSchema} from "@/features/schema/step-one-schema";
import {useStepOneStore} from "./useStepOneStore";
import {useEffect} from "react";

interface IFormInput {
  name: string;
  emailAddress: string;
  phoneNumber: string;
}

interface UseStepOne {
  setCurrentStep: (step: number) => void;
}

export function useStepOne({setCurrentStep}: UseStepOne) {
  const {name, emailAddress, phoneNumber, setName, setEmailAddress, setPhoneNumber} = useStepOneStore();
  const {schema, defaults} = StepOneSchema({
    data: {
      name,
      emailAddress,
      phoneNumber,
    },
  });

  const {
    register,
    formState: {errors},
    handleSubmit,
    reset,
  } = useForm<IFormInput>({
    resolver: zodResolver(schema),
    defaultValues: defaults,
  });

  useEffect(() => {
    reset({
      name,
      emailAddress,
      phoneNumber,
    });
  }, [name, emailAddress, phoneNumber, reset]);

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log(data);
    setName(data.name);
    setEmailAddress(data.emailAddress);
    setPhoneNumber(data.phoneNumber);
    setCurrentStep(2);
  };

  return {
    register,
    handleSubmit,
    errors,
    onSubmit,
    defaults,
  };
}