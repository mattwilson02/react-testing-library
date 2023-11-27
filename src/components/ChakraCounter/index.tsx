import { Button, HStack, Heading, Text } from "@chakra-ui/react";
import { useState } from "react";

type Props = {
  initialCount: number;
};

const ChakraCounter = ({ initialCount }: Props) => {
  const [count, setCount] = useState(initialCount);

  return (
    <HStack>
      <Heading>Count:</Heading>
      <Text data-testid="count">{count}</Text>

      <Button onClick={() => setCount(count + 1)}>Increment</Button>
      <Button onClick={() => setCount(count - 1)}>Decrement</Button>
      <Button onClick={() => setCount(0)}>Restart</Button>
    </HStack>
  );
};

export default ChakraCounter;
