import { useState } from "react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Button,
} from "@chakra-ui/react";
import { MenuLayout } from "@/layouts";
import { useRouter } from "next/router";

export default function Menu() {
  const [input, setInput] = useState("");
  const [isError, setIsError] = useState(false);

  const router = useRouter();

  const handleInputChange = (e) => {
    setIsError(false);
    setInput(e.target.value);
  };

  const handleClick = (e) => {
    if (input === "") {
      return setIsError(true);
    }

    e.preventDefault();
    return router.push("/menu");
  };

  return (
    <MenuLayout page="Checkout">
      <main></main>
    </MenuLayout>
  );
}
