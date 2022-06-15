import { IconButton, Icon } from "@chakra-ui/react";
import { BiCart } from "react-icons/bi";
import { ArrowBackIcon } from "@chakra-ui/icons";

export default ({ page, cart }) => {
  return (
    <>
      <nav className="sticky top-0 bg-white">
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
      </nav>
    </>
  );
};
