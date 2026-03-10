import {useState} from "react";
import {useStepThreeStore} from "./useStepThreeStore";

export interface IStepThree {
  setCurrentStep: (step: number) => void;
}

export interface IAddOn {
  name: string;
  description: string;
  monthlyPrice: string;
}

const addOns: IAddOn[] = [
  {
    name: "Online service",
    description: "Access to multiplayer games",
    monthlyPrice: "+$1/mo",
  },
  {
    name: "Large storage",
    description: "Extra 1TB of cloud save",
    monthlyPrice: "+$2/mo",
  },
  {
    name: "Customizable profile",
    description: "Custom theme on your profile",
    monthlyPrice: "+$2/mo",
  },
];

interface UseStepThree {
  setCurrentStep: (step: number) => void;
}

export default function useStepThree({setCurrentStep}: UseStepThree) {
  const {chosenAddOns, setChosenAddOns} = useStepThreeStore();

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
  };
}