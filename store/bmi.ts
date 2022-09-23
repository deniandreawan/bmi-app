import create from "zustand";
import { calcBMI, cmToMeter } from "../helpers/calculate";

enum Gender {
  gender = 0 | 1,
}

interface BMIState {
  gender: Gender;
  height: number;
  weight: number;
  age: number;
  setGender: (gender: Gender) => void;
  setHeight: (height: number) => void;
  handleAddWeight: () => void;
  handleMinusWeight: () => void;
  handleAddAge: () => void;
  handleMinusAge: () => void;
  setBmi: (weight: number, height: number) => void;
}

export const useBMI = create<BMIState>((set) => ({
  gender: 0,
  height: 100,
  weight: 50,
  age: 10,
  setGender: (gender) => set(() => ({ gender })),
  setHeight: (height) => set(() => ({ height })),
  handleAddWeight: () => set(({ weight }) => ({ weight: weight + 1 })),
  handleMinusWeight: () => set(({ weight }) => ({ weight: weight - 1 })),
  handleAddAge: () => set(({ age }) => ({ age: age + 1 })),
  handleMinusAge: () => set(({ age }) => ({ age: age + 1 })),
  setBmi: (weight, height) => {
    return calcBMI(weight, cmToMeter(height));
  },
}));
