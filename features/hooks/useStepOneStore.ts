import {create} from "zustand";
import {persist} from "zustand/middleware";

interface StepOneStore {
  name: string;
  emailAddress: string;
  phoneNumber: string;
  errorsFromBackend: Record<string, string>;
  setName: (name: string) => void;
  setEmailAddress: (emailAddress: string) => void;
  setPhoneNumber: (phoneNumber: string) => void;
  setErrorFromBackend: (field: string, message: string) => void;
  clearErrorsFromBackend: () => void;
  reset: () => void;
}

export const useStepOneStore = create<StepOneStore>()(
  persist(
    (set) => ({
      name: "",
      emailAddress: "",
      phoneNumber: "",
      errorsFromBackend: {},
      setName: (name: string) => set({name}),
      setEmailAddress: (emailAddress: string) => set({emailAddress}),
      setPhoneNumber: (phoneNumber: string) => set({phoneNumber}),
      setErrorFromBackend: (field, message) =>
        set(state => ({
          errorsFromBackend: {...state.errorsFromBackend, [field]: message}
        })),
      clearErrorsFromBackend: () => set({errorsFromBackend: {}}),
      reset: () => set({name: "", emailAddress: "", phoneNumber: "", errorsFromBackend: {}, }),
    }), {name: "step-one"}
  ),
);