import {useState} from "react";
import {useStepTwoStore} from "./useStepTwoStore";

export interface IStepTwo {
  setCurrentStep: (step: number) => void;
}

interface IPlan {
  name: string;
  monthlyPrice: string;
  yearlyPrice: string;
  monthsFree: string;
  icon: string;
}

const plans: IPlan[] = [
  {
    name: "Arcade",
    monthlyPrice: "$9/mo",
    yearlyPrice: "$90/yr",
    monthsFree: "2 months free",
    icon: "/images/icon-arcade.svg",
  },
  {
    name: "Advanced",
    monthlyPrice: "$12/mo",
    yearlyPrice: "$120/yr",
    monthsFree: "2 months free",
    icon: "/images/icon-advanced.svg",
  },
  {
    name: "Pro",
    monthlyPrice: "$15/mo",
    yearlyPrice: "$150/yr",
    monthsFree: "2 months free",
    icon: "/images/icon-pro.svg",
  },
];

interface UseStepTwo {
  setCurrentStep: (step: number) => void;
}

export default function useStepTwo({setCurrentStep}: UseStepTwo) {
  const {isMonthly, chosenPlan, setIsMonthly, setChosenPlan} = useStepTwoStore();

  const handleChangeMonthly = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsMonthly(!e.target.checked);
  };

  const handleChoosePlan = (planName: string) => {
    setChosenPlan(planName);
  };

  const onSubmit = () => {
    setCurrentStep(3);
  };

  return {
    plans,
    isMonthly,
    chosenPlan,
    handleChoosePlan,
    handleChangeMonthly,
    onSubmit,
  };
}