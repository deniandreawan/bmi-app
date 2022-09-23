import React from "react";
import { StyleProp, TouchableOpacityProps } from "react-native";
import { Container, Icon } from "./styles";

interface Props {
  type?: any;
  onPress?: () => void;
  style?: StyleProp<TouchableOpacityProps>;
}

function Modifier({ type, onPress, style }: Props) {
  return (
    <Container style={style} onPress={onPress}>
      <Icon name={type} />
    </Container>
  );
}

export default Modifier;
