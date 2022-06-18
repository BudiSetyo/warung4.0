import { Container } from "@chakra-ui/react";

const Footer = ({ children }) => {
  return (
    <>
      <footer className="fixed bottom-0 left-0 right-0 z-10">
        <Container
          className="border-t-2 bg-white rounded px-6 py-4"
          maxW="600px"
        >
          {children}
        </Container>
      </footer>
    </>
  );
};

export default Footer;
