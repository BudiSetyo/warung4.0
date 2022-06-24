import { useState } from "react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Button,
} from "@chakra-ui/react";
import { HomeLayout } from "@/layouts";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { userLogin } from "@/configs";

export default function Home() {
  const [input, setInput] = useState("");
  const [isError, setIsError] = useState(false);

  const router = useRouter();
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    setIsError(false);
    setInput(e.target.value);
  };

  const handleClick = (e) => {
    e.preventDefault();

    if (input === "") {
      return setIsError(true);
    } else {
      dispatch(userLogin(input));
    }

    return router.push("/menu");
  };

  return (
    <HomeLayout>
      <main>
        <section className="w-full mb-14 flex justify-center">
          <div className="max-w-lg max-h-80">
            <img
              alt="logo"
              src="/assets/images/main-logo.svg"
              className="w-full h-full"
            />
          </div>
        </section>

        <section>
          <FormControl isInvalid={isError}>
            <FormLabel>Nama</FormLabel>
            <Input
              value={input}
              onChange={handleInputChange}
              placeholder="Masukan nama..."
            />
            <FormErrorMessage>
              Silahkan isi nama anda untuk melanjutkan pesanan!
            </FormErrorMessage>
          </FormControl>

          <Button
            className="w-full mt-5"
            colorScheme="teal"
            onClick={handleClick}
          >
            Pesan Makanan
            <ArrowForwardIcon className="ml-2.5" />
          </Button>
        </section>
      </main>
    </HomeLayout>
  );
}
