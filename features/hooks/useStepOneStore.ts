import {create} from "zustand";
import {persist} from "zustand/middleware";

interface StepOneStore {
  name: string;
  emailAddress: string;
  phoneNumber: string;
  setName: (name: string) => void;
  setEmailAddress: (emailAddress: string) => void;
  setPhoneNumber: (phoneNumber: string) => void;
}

export const useStepOneStore = create<StepOneStore>()(
  persist(
    (set) => ({
      name: "",
      emailAddress: "",
      phoneNumber: "",
      setName: (name: string) => set({name}),
      setEmailAddress: (emailAddress: string) => set({emailAddress}),
      setPhoneNumber: (phoneNumber: string) => set({phoneNumber}),
    }), {name: "step-one"}
  ),
);