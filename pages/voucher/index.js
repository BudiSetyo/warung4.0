import { MainLayout } from "@/layouts";
import { Navbar, Footer, Search } from "@/components";
import { Button } from "@chakra-ui/react";

export default function Voucher() {
  const diskonData = [
    {
      diskon: 20000,
      minimum: 50000,
      code: "CV6789HG",
    },
    {
      diskon: 40000,
      minimum: 50000,
      code: "CV6789HG",
    },
    {
      diskon: 28000,
      minimum: 50000,
      code: "CV6789HG",
    },
    {
      diskon: 30000,
      minimum: 50000,
      code: "CV6789HG",
    },
  ];

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
            {diskonData.map((item, index) => {
              return (
                <div className="border-2 p-4 mb-4 rounded-xl" key={index}>
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
          <Button colorScheme={"teal"} className="w-full">
            Pakai Promo
          </Button>
        </section>
      </Footer>
    </MainLayout>
  );
}
