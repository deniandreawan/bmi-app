import * as React from "react";
import { StyleProp, ViewStyle } from "react-native";
import { Wrapper, Container } from "./styles";

interface Props {
  full?: boolean;
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  onPress?: () => void;
}

function Card({ full, children, style, onPress }: Props) {
  return (
    <Wrapper onPress={onPress}>
      <Container style={style} full={full}>
        {children}
      </Container>
    </Wrapper>
  );
}

export default Card;
