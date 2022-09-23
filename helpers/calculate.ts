export const cmToMeter = (cm: number) => {
  return cm / 100;
};

export const calcBMI = (weight: number, height: number) => {
  return (weight / (height * height)).toFixed(1);
};
