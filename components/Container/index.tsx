import * as React from "react";
import { View } from "./styles";

interface Props {
  children: React.ReactNode;
}

function Container({ children }: Props) {
  return <View>{children}</View>;
}

export default Container;
