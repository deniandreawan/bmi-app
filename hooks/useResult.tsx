export const useResult = (bmi: number) => {
  if (18.5 <= bmi && bmi <= 24.9) {
    return {
      state: "Normal",
      stateDesc: "You have a normal body weight.",
      rangeLabel: "Normal BMI range:",
      range: "18.5 - 24.9 kg/m2",
    };
  } else if (25.0 <= bmi && bmi <= 29.9) {
    return {
      state: "Pre-obesity",
      stateDesc: "You have a pre-obesity body weight.",
      rangeLabel: "Pre-obesity BMI range:",
      range: "25.0 - 29.9 kg/m2",
    };
  } else if (30.0 <= bmi && bmi <= 34.9) {
    return {
      state: "Obesity Grade 1",
      stateDesc: "You have a obesity grade 1 body weight.",
      rangeLabel: "Obesity grade 1 BMI range:",
      range: "30.0 - 34.9 kg/m2",
    };
  } else if (35.0 <= bmi && bmi <= 39.9) {
    return {
      state: "Obesity Grade 2",
      stateDesc: "You have a obesity grade 2 body weight.",
      rangeLabel: "Obesity grade 2 BMI range:",
      range: "35.0 - 39.9 kg/m2",
    };
  } else if (bmi > 40) {
    return {
      state: "Obesity Grade 3",
      stateDesc: "You have a obesity grade 3 body weight.",
      rangeLabel: "Obesity grade 3 BMI range:",
      range: "40.0 - kg/m2",
    };
  }

  return {
    state: "Under weight",
    stateDesc: "You have a under weight body weight.",
    rangeLabel: "Under weight BMI range:",
    range: "- 18.5 kg/m2",
  };
};
