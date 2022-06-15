import { Container } from "@chakra-ui/react";

const HomeLayout = ({ children }) => {
  return (
    <Container maxW="600px" px="24px" pt="176px" pb="50px">
      {children}
    </Container>
  );
};

export default HomeLayout;
