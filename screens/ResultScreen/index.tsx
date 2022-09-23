import { RouteProp, useRoute } from "@react-navigation/native";
import { Wrapper, Container, Button, Card } from "../../components";
import { RootStackParamList, RootStackScreenProps } from "../../types";
import { useResult } from "../../hooks/useResult";
import { useBMI } from "../../store/bmi";
import {
  Label,
  Result,
  RangeLabel,
  Range,
  StateDescription,
  State,
} from "./styles";

function ResultScreen({ navigation }: RootStackScreenProps<"Result">) {
  const { weight, height } =
    useRoute<RouteProp<RootStackParamList, "Result">>().params;
  const { setBmi } = useBMI();
  const bmi = Number(setBmi(weight, height));
  const { state, rangeLabel, range, stateDesc } = useResult(bmi);

  return (
    <Wrapper>
      <Container>
        <Label>Your Result</Label>
        <Card
          full
          style={{
            paddingTop: 40,
            paddingRight: 40,
            paddingBottom: 40,
            paddingLeft: 40,
          }}
        >
          <State>{state}</State>
          <Result>{bmi}</Result>
          <RangeLabel>{rangeLabel}</RangeLabel>
          <Range>{range}</Range>
          <StateDescription>{stateDesc}</StateDescription>
        </Card>
      </Container>

      <Button onPress={navigation.goBack}>Re-calculate</Button>
    </Wrapper>
  );
}

export default ResultScreen;
