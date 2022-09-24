import styled from "styled-components/native";

const SectionHorizontalStyles = `\
flex-direction: row;
justify-content: space-between
`;

export const Section = styled.View<{ horizontal: boolean }>`
  margin-bottom: 15px;
  ${({ horizontal }) => horizontal && SectionHorizontalStyles}
`;
