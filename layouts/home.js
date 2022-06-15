import { Container } from "@chakra-ui/react";

export default ({ children }) => {
  return (
    <Container maxW="600px" px="24px" pt="176px" pb="50px">
      {children}
    </Container>
  );
};
