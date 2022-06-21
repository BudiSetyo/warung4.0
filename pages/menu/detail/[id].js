import { MainLayout } from "@/layouts";
import { Navbar, Footer } from "@/components";
import { useRouter } from "next/router";

import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import { IconButton, Button } from "@chakra-ui/react";

export default function Id() {
  const router = useRouter();
  const { id } = router.query;
  return (
    <MainLayout>
      <Navbar page={id} cart={true} />
      <main className="bg-[#F7FAFC] pt-20">
        <section className="flex justify-center">
          <div className="h-96 w-96">
            <img className="w-full h-full" src="/assets/images/uduk.svg" />
          </div>
        </section>

        <section className="bg-white px-6 py-5 pb-40 rounded-t-3xl">
          <h1 className="text-2xl font-bold">{id}</h1>
          <h2 className="text-lg font-bold mt-2">Rp. 18.000</h2>

          <div className="mt-6 p-6 border-2 rounded-xl">
            <h1 className="text-base font-bold ">Deskripsi</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </section>
      </main>
      <Footer>
        <section>
          <div className="flex justify-between">
            <h1 className="text-xl font-bold">Jumlah Pesanan</h1>
            <div className="flex">
              <IconButton
                size={"sm"}
                isRound={true}
                colorScheme={"teal"}
                variant="outline"
                icon={<MinusIcon />}
              />
              <p className="text-xl font-bold mx-4">2</p>
              <IconButton
                size={"sm"}
                isRound={true}
                colorScheme={"teal"}
                variant="outline"
                icon={<AddIcon />}
              />
            </div>
          </div>
          <Button className="w-full mt-6" colorScheme={"teal"}>
            Tambah Pesanan - 36.000
          </Button>
        </section>
      </Footer>
    </MainLayout>
  );
}
