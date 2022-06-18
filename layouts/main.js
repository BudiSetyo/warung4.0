import { Container } from "@chakra-ui/react";

const MenuLayout = ({ children, className }) => {
  return (
    <Container className={className} maxW="600px">
      <main>{children}</main>
    </Container>
  );
};

export default MenuLayout;
