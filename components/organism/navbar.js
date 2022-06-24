import { IconButton, Icon } from "@chakra-ui/react";
import { BiCart } from "react-icons/bi";
import { ArrowBackIcon } from "@chakra-ui/icons";
import { Container } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

const Navbar = ({ page, cart }) => {
  const router = useRouter();

  const cartData = useSelector((state) => state.cart);
  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-10">
        <Container maxW={"600px"} className="bg-white ">
          <div className="flex justify-between py-4">
            {window.location.pathname === "/menu" ? (
              <>
                <div>
                  <img
                    alt="navbar-logo"
                    src="/assets/images/navbar-logo.svg"
                  ></img>
                </div>
              </>
            ) : (
              <>
                <div className="flex">
                  <IconButton
                    onClick={() => {
                      return router.back();
                    }}
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
                    onClick={() => {
                      return router.push("/checkout");
                    }}
                    className="relative"
                    colorScheme="white"
                  >
                    {cartData.length === 0 ? (
                      <>
                        <Icon boxSize={8} as={BiCart} color="#000000CC" />
                      </>
                    ) : (
                      <>
                        <div className="absolute h-5 w-5 top-0 right-0 rounded-full bg-yellow-400">
                          <p className="text-sm text-center">
                            {cartData.length}
                          </p>
                        </div>
                        <Icon boxSize={8} as={BiCart} color="#000000CC" />
                      </>
                    )}
                  </IconButton>
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
