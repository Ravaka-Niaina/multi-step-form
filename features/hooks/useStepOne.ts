import {zodResolver} from "@hookform/resolvers/zod";
import {useForm, SubmitHandler} from "react-hook-form";
import {StepOneSchema} from "@/features/schema/step-one-schema";
import {useStepOneStore} from "./useStepOneStore";
import {useEffect} from "react";

export interface IFormInput {
  name: string;
  emailAddress: string;
  phoneNumber: string;
}

interface UseStepOne {
  setCurrentStep: (step: number) => void;
}

export function useStepOne({setCurrentStep}: UseStepOne) {
  const {name, emailAddress, phoneNumber, errorsFromBackend, setName, setEmailAddress, setPhoneNumber} = useStepOneStore();
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

  console.log(errorsFromBackend);

  const mappedErrorsFromBackend: {[key: string]: {message: string}} = {};
  Object.keys(errorsFromBackend).forEach(errKey => {
    mappedErrorsFromBackend[errKey] = {message: errorsFromBackend[errKey]};
  });

  const mappedErrorsFromZod: {[key: string]: {message: string;}} = {};
  Object.keys(errors).forEach(errKey => {
    mappedErrorsFromZod[errKey] = {message: errors[errKey as keyof IFormInput]?.message || ""};
  });

  return {
    register,
    handleSubmit,
    errors: {...mappedErrorsFromBackend, ...mappedErrorsFromZod},
    onSubmit,
    defaults,
  };
}