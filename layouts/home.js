import { Container } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";

const HomeLayout = ({ children }) => {
  const user = useSelector((state) => state.user);

  const router = useRouter();

  if (user.userName !== "") {
    router.push("/menu");
  }
  return (
    <Container maxW="600px" px="24px" pt="176px" pb="50px">
      {children}
    </Container>
  );
};

export default HomeLayout;
