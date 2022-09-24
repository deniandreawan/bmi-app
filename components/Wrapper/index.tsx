import styled from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { colors } from "../../constants";

export const Wrapper = styled(SafeAreaView)`
  flex: 1;
  background-color: ${colors.primaryDark};
`;
