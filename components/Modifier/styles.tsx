import styled from "styled-components/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { colors } from "../../constants";

export const Container = styled.TouchableOpacity`
  width: 60px;
  height: 60px;
  border-radius: 30px;
  align-items: center;
  justify-content: center;
  background-color: ${colors.primaryLight};
`;

export const Icon = styled(MaterialCommunityIcons).attrs({
  size: 50,
  color: colors.gray,
})``;
