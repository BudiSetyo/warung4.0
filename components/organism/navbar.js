import { IconButton, Icon } from "@chakra-ui/react";
import { BiCart } from "react-icons/bi";
import { ArrowBackIcon } from "@chakra-ui/icons";
import { Container } from "@chakra-ui/react";

const Navbar = ({ page, cart }) => {
  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-10">
        <Container maxW={"600px"} className="bg-white ">
          <div className="flex justify-between py-4">
            {window.location.pathname === "/menu" ? (
              <>
                <div>
                  <img src="/assets/images/navbar-logo.svg"></img>
                </div>
              </>
            ) : (
              <>
                <div className="flex">
                  <IconButton
                    className="mr-2.5"
                    colorScheme="white"
                    icon={<ArrowBackIcon boxSize={6} color="#000000CC" />}
                  />

                  <div className="flex items-center">
                    <h1 className="font-bold text-xl">{page || "Page"}</h1>
                  </div>
                </div>
              </>
            )}

            {cart === true ? (
              <>
                <div>
                  <IconButton
                    colorScheme="white"
                    icon={<Icon boxSize={8} as={BiCart} color="#000000CC" />}
                  />
                </div>
              </>
            ) : (
              <></>
            )}
          </div>
        </Container>
      </nav>
    </>
  );
};

export default Navbar;
