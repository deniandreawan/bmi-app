import styled from "styled-components/native";
import { colors } from "../../constants";

export const Text = styled.Text`
  color: ${colors.white};
  font-size: 14px;
`;

export const Label = styled(Text)`
  font-weight: bold;
  font-size: 30px;
  margin-bottom: 20px;
`;

export const State = styled(Text)`
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: bold;
  font-size: 16px;
  color: ${colors.green};
`;

export const Result = styled(Text)`
  font-size: 78px;
  font-weight: bold;
  margin: 0 0 20px 0;
`;

export const StateDescription = styled(Text)`
  font-size: 16px;
`;

export const RangeLabel = styled(Text)`
  color: ${colors.gray};
`;

export const Range = styled(Text)`
  margin-bottom: 20px;
`;
