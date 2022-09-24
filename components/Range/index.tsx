import styled from "styled-components/native";
import Slider from "@react-native-community/slider";
import { colors } from "../../constants";

export const Range = styled(Slider).attrs({
  thumbTintColor: colors.secondary,
  minimumTrackTintColor: colors.white,
  maximumTrackTintColor: colors.gray,
})`
  width: 100%;
  margin: 20px 0 20px 0;
`;
