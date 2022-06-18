import { MainLayout } from "@/layouts";
import { Navbar } from "@/components";
import { ChevronRightIcon } from "@chakra-ui/icons";

export default function Payment() {
  return (
    <MainLayout>
      <Navbar page="Pilih Pembayaran" />
      <main className="pt-20 px-4">
        <h1 className="text-xl font-bold">Mau bayar dengan metode apa?</h1>

        <section className="mt-2 py-2">
          <div className="flex border-b-2 py-4">
            <div className="w-1/6 h-8">
              <img className="w-full h-full" src="/assets/images/qr.svg" />
            </div>
            <div
              variant={"none"}
              className="flex ml-3 justify-between items-center w-full"
            >
              <p className="font-bold">Bayar dengan QRIS</p>
              <ChevronRightIcon boxSize={6} />
            </div>
          </div>

          <div className="flex border-b-2 py-4">
            <div className="w-1/6 h-8">
              <img className="w-full h-full" src="/assets/images/cash.svg" />
            </div>
            <div
              variant={"none"}
              className="flex ml-3 justify-between items-center w-full"
            >
              <p className="font-bold">Bayar di kasir</p>
              <ChevronRightIcon boxSize={6} />
            </div>
          </div>
        </section>
      </main>
    </MainLayout>
  );
}
