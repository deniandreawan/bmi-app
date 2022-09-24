import React from "react";
import { StyleProp, TouchableOpacityProps } from "react-native";
import { Container, Icon } from "./styles";

interface Props {
  type?: any;
  onPress?: () => void;
  style?: StyleProp<TouchableOpacityProps>;
}

export function Modifier({ type, onPress, style }: Props) {
  return (
    <Container style={style} onPress={onPress}>
      <Icon name={type} />
    </Container>
  );
}
