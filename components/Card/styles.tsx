import styled from "styled-components/native";
import { colors } from "../../constants";

export const Wrapper = styled.TouchableWithoutFeedback``;

export const Container = styled.View<{ full: boolean }>`
  width: ${({ full }) => (full ? "100%" : "48%")};
  align-items: center;
  background-color: ${colors.primary};
  padding: 14px;
  border-radius: 10px;
`;
