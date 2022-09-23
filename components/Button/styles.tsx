import styled from "styled-components/native";
import { colors } from "../../constants";

export const CalculateButton = styled.TouchableOpacity`
  background-color: ${colors.secondary};
  justify-content: center;
  align-items: center;
  height: 68px;
  margin: 20px;
  border-radius: 10px;
`;

export const CalculateButtonText = styled.Text`
  text-transform: uppercase;
  font-weight: bold;
  font-size: 20px;
  color: ${colors.primaryDark};
`;
