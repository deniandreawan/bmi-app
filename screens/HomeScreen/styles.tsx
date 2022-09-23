import styled from "styled-components/native";
import Slider from "@react-native-community/slider";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { colors } from "../../constants";

const SectionHorizontalStyles = `\
flex-direction: row;
justify-content: space-between
`;

export const Section = styled.View<{ horizontal: boolean }>`
  margin-bottom: 15px;
  ${({ horizontal }) => horizontal && SectionHorizontalStyles}
`;

export const GenderMaleIcon = styled(MaterialCommunityIcons).attrs<{
  focus: boolean;
}>(({ focus }) => ({
  name: "gender-male",
  size: 80,
  color: focus ? colors.active : colors.inactive,
}))`
  margin-bottom: 20px;
`;

export const GenderFemaleIcon = styled(MaterialCommunityIcons).attrs<{
  focus: boolean;
}>(({ focus }) => ({
  name: "gender-female",
  size: 80,
  color: focus ? colors.active : colors.inactive,
}))`
  margin-bottom: 20px;
`;

export const Label = styled.Text<{ focus: boolean }>`
  text-transform: uppercase;
  font-weight: bold;
  font-size: 16px;
  color: ${({ focus }) => (focus ? colors.active : colors.inactive)};
`;

export const Range = styled(Slider).attrs({
  thumbTintColor: colors.secondary,
  minimumTrackTintColor: colors.white,
  maximumTrackTintColor: colors.gray,
})`
  width: 100%;
  margin: 20px 0 20px 0;
`;

export const H1 = styled.Text`
  font-size: 48px;
  font-weight: bold;
  color: ${colors.white};
`;

export const H6 = styled.Text`
  font-size: 16px;
  color: ${colors.gray};
`;

export const ModifiersContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 16px;
  width: 100%;
`;
