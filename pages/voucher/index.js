import { MainLayout } from "@/layouts";
import { Navbar, Footer, Search } from "@/components";
import { Button } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addDiskon } from "@/configs";
import { useRouter } from "next/router";

export default function Voucher() {
  const voucher = useSelector((state) => state.voucher);

  const [diskonIndex, setDiskonIndex] = useState();
  const [diskon, setDiskon] = useState({});

  const dispatch = useDispatch();
  const router = useRouter();

  return (
    <MainLayout>
      <Navbar page="Voucher" />
      <main className="pt-20">
        <div className="sticky top-[72px] pb-1 bg-white">
          <Search />
        </div>

        <section className="mt-4">
          <h1 className="text-xl font-bold mb-4">Pilih Promo</h1>

          <section className="pb-32">
            {voucher?.map((item, index) => {
              return (
                <div
                  onClick={(e) => {
                    e.preventDefault();
                    setDiskonIndex(index);
                    setDiskon({
                      diskon: item.diskon,
                      minimum: item.minimum,
                      code: item.code,
                    });
                  }}
                  className={
                    diskonIndex === index
                      ? "bg-teal-50 border-2 border-teal-400 p-4 mb-4 rounded-xl"
                      : "border-2 p-4 mb-4 rounded-xl"
                  }
                  key={index}
                >
                  <h1 className="text-xl font-bold mb-1">
                    Diskon {item.diskon}
                  </h1>
                  <p className="text-lg mb-2">Minimal belanja {item.minimum}</p>
                  <p className="text-lg font-bold">Kode: {item.code}</p>
                </div>
              );
            })}
          </section>
        </section>
      </main>
      <Footer>
        <section>
          <h1 className="mb-3">Kamu bisa hemat Rp 0</h1>
          <Button
            onClick={(e) => {
              e.preventDefault();
              dispatch(addDiskon(diskon));
              return router.push("/checkout");
            }}
            colorScheme={"teal"}
            className="w-full"
          >
            Pakai Promo
          </Button>
        </section>
      </Footer>
    </MainLayout>
  );
}
