import {
  Wrapper,
  Container,
  Button,
  Card,
  Modifier,
  Section,
  Range,
} from "../../components";
import { RootStackScreenProps } from "../../types";
import { useBMI } from "../../store/bmi";
import {
  Label,
  GenderMaleIcon,
  GenderFemaleIcon,
  H1,
  H6,
  ModifiersContainer,
} from "./styles";

function HomeScreen({ navigation }: RootStackScreenProps<"Home">) {
  const {
    gender,
    height,
    weight,
    age,
    setGender,
    setHeight,
    handleAddWeight,
    handleMinusWeight,
    handleAddAge,
    handleMinusAge,
  } = useBMI();

  return (
    <Wrapper>
      <Container>
        <Section horizontal>
          <Card onPress={() => setGender(0)}>
            <GenderMaleIcon focus={gender == 0} />
            <Label focus={gender == 0}>Male</Label>
          </Card>

          <Card onPress={() => setGender(1)}>
            <GenderFemaleIcon focus={gender} />
            <Label focus={gender}>Female</Label>
          </Card>
        </Section>

        <Section>
          <Card full>
            <Label>Height</Label>
            <H1>
              {height}
              <H6>cm</H6>
            </H1>
            <Range
              onValueChange={(value) => setHeight(value)}
              step={1}
              minimumValue={100}
              maximumValue={300}
            />
          </Card>
        </Section>

        <Section horizontal>
          <Card>
            <Label>Weight</Label>
            <H1>{weight}</H1>
            <ModifiersContainer>
              <Modifier type="plus" onPress={() => handleAddWeight()} />
              <Modifier type="minus" onPress={() => handleMinusWeight()} />
            </ModifiersContainer>
          </Card>

          <Card>
            <Label>Age</Label>
            <H1>{age}</H1>
            <ModifiersContainer>
              <Modifier type="plus" onPress={() => handleAddAge()} />
              <Modifier type="minus" onPress={() => handleMinusAge()} />
            </ModifiersContainer>
          </Card>
        </Section>
      </Container>

      <Button
        onPress={() => {
          navigation.navigate("Result", { gender, height, weight, age });
        }}
      >
        Calculate
      </Button>
    </Wrapper>
  );
}

export default HomeScreen;
