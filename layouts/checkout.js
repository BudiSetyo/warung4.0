import { Container } from "@chakra-ui/react";
import { Navbar } from "@/components";

const CheckoutLayout = ({ children, page }) => {
  return (
    <Container maxW="600px">
      <main className="scroll-smooth">
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

export default CheckoutLayout;
