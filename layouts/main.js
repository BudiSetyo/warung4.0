import { Container } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";

const MenuLayout = ({ children, className }) => {
  const user = useSelector((state) => state.user);

  const router = useRouter();

  if (user.userName === "") {
    router.push("/");
  }

  return (
    <Container className={className} maxW="600px">
      <main>{children}</main>
    </Container>
  );
};

export default MenuLayout;
