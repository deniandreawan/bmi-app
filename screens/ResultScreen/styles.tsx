import styled from "styled-components/native";
import { colors } from "../../constants";

export const Text = styled.Text`
  color: ${colors.white};
  font-family: Poppins_500Medium;
  font-size: 14px;
`;

export const Label = styled(Text)`
  font-family: Poppins_700Bold;
  font-size: 30px;
  margin-bottom: 20px;
`;

export const State = styled(Text)`
  text-transform: uppercase;
  letter-spacing: 2px;
  font-family: Poppins_700Bold;
  font-weight: bold;
  font-size: 16px;
  color: ${colors.green};
`;

export const Result = styled(Text)`
  font-size: 78px;
  font-family: Poppins_700Bold;
  font-weight: bold;
  margin: 0 0 20px 0;
`;

export const StateDescription = styled(Text)`
  font-size: 14px;
  font-family: Poppins_500Medium;
`;

export const RangeLabel = styled(Text)`
  color: ${colors.gray};
  font-family: Poppins_500Medium;
`;

export const Range = styled(Text)`
  margin-bottom: 20px;
  font-family: Poppins_500Medium;
`;
