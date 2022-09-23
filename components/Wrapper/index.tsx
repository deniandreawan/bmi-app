import * as React from "react";
import { View } from "./styles";

interface Props {
  children: React.ReactNode;
}

function Wrapper({ children }: Props) {
  return <View>{children}</View>;
}

export default Wrapper;
