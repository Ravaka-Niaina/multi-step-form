import {useState} from "react";
import {useStepThreeStore} from "./useStepThreeStore";
import {useStepTwoStore} from "./useStepTwoStore";

export interface IStepThree {
  setCurrentStep: (step: number) => void;
}

export interface IAddOn {
  name: string;
  description: string;
  monthlyPrice: string;
  yearlyPrice: string;
}

export const addOns: IAddOn[] = [
  {
    name: "Online service",
    description: "Access to multiplayer games",
    monthlyPrice: "+$1/mo",
    yearlyPrice: "+$10/yr",
  },
  {
    name: "Large storage",
    description: "Extra 1TB of cloud save",
    monthlyPrice: "+$2/mo",
    yearlyPrice: "+$20/yr",
  },
  {
    name: "Customizable profile",
    description: "Custom theme on your profile",
    monthlyPrice: "+$2/mo",
    yearlyPrice: "+$20/yr",
  },
];

interface UseStepThree {
  setCurrentStep: (step: number) => void;
}

export default function useStepThree({setCurrentStep}: UseStepThree) {
  const {chosenAddOns, setChosenAddOns} = useStepThreeStore();
  const isMonthly = useStepTwoStore((state) => state.isMonthly);

  const toggleAddOn = (name: string) => {
    chosenAddOns.includes(name)
      ? setChosenAddOns(chosenAddOns.filter((v) => v !== name))
      : setChosenAddOns([...chosenAddOns, name]);
  };

  const onSubmit = () => {
    setCurrentStep(4);
  };

  return {
    addOns,
    chosenAddOns,
    toggleAddOn,
    onSubmit,
    isMonthly,
  };
}