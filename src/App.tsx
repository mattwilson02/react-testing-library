import { Heading, VStack } from "@chakra-ui/react";
import Counter from "./components/Counter";
import ChakraCounter from "./components/ChakraCounter";

function App() {
  return (
    <VStack justifyContent="space-between">
      <Heading>React js counter</Heading>
      <Counter initialCount={0} />
      <Heading>Chakra counter</Heading>
      <ChakraCounter initialCount={0} />
    </VStack>
  );
}

export default App;
