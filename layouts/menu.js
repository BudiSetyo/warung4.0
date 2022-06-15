import { Container } from "@chakra-ui/react";
import { Navbar } from "@/components";

const MenuLayout = ({ children, page }) => {
  return (
    <Container maxW="600px" px="24px">
      <main>
        <Navbar
          cart={
            window.location.pathname === "/menu"
              ? true
              : window.location.pathname === "/menu/description"
              ? true
              : false
          }
          page={page}
        />
        {children}
      </main>
    </Container>
  );
};

export default MenuLayout;
