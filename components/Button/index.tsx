import * as React from "react";
import { CalculateButton, CalculateButtonText } from "./styles";

interface Props {
  children: React.ReactNode;
  onPress: () => void;
}

export function Button({ children, onPress }: Props) {
  return (
    <CalculateButton onPress={onPress}>
      <CalculateButtonText>{children}</CalculateButtonText>
    </CalculateButton>
  );
}
