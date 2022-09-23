import styled from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { colors } from "../../constants";

export const View = styled(SafeAreaView)`
  flex: 1;
  background-color: ${colors.primaryDark};
`;

export const Container = styled.ScrollView.attrs({
  contentContainerStyle: {
    padding: 20,
  },
})`
  flex: 1;
`;
