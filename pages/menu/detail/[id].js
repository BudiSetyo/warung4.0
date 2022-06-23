import { MainLayout } from "@/layouts";
import { Navbar, Footer } from "@/components";
import { useRouter } from "next/router";

import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import { IconButton, Button } from "@chakra-ui/react";

import { useSelector } from "react-redux";

export default function Id() {
  const router = useRouter();
  const { id } = router.query;
  const menuId = id;

  const menu = useSelector((state) => state.menu);
  const detailMenu = menu?.filter((item) => {
    return item.id === menuId;
  })[0];

  return (
    <MainLayout>
      <Navbar page={detailMenu?.name} cart={true} />
      <main className="bg-[#F7FAFC] pt-20">
        <section className="flex justify-center">
          <div className="h-96 w-96">
            <img
              alt="uduk"
              className="w-full h-full"
              src={`/assets/images/menu/${detailMenu?.img}.svg`}
            />
          </div>
        </section>

        <section className="bg-white px-6 py-5 pb-40 rounded-t-3xl">
          <h1 className="text-2xl font-bold">{detailMenu?.name}</h1>
          <h2 className="text-lg font-bold mt-2">Rp. {detailMenu?.price}</h2>

          <div className="mt-6 p-6 border-2 rounded-xl">
            <h1 className="text-base font-bold ">Deskripsi</h1>
            <p>{detailMenu?.description}</p>
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
