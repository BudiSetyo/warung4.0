import { MainLayout } from "@/layouts";
import { Navbar } from "@/components";
import { Button } from "@chakra-ui/react";
import { useRouter } from "next/router";

export default function CompletePayment() {
  const router = useRouter();
  return (
    <MainLayout>
      <Navbar page={"Pilih Pembayaran"} />
      <main className="bg-[#F7FAFC] pt-16">
        <section className="px-6 pt-8 pb-4 bg-white">
          <div>
            <p className="mb-2">Batas akhir pembayaran</p>
            <h1 className="text-xl font-bold">Senin, 13 Juni 2022 16: 37</h1>
          </div>
        </section>

        <section className="mt-3 py-4 px-6 bg-white">
          <div className="flex justify-between pb-2 border-b-2">
            <h1 className="text-xl font-bold">QRIS</h1>

            <div className="h-8">
              <img
                alt="qr"
                className="h-full w-full"
                src="/assets/images/qr.svg"
              />
            </div>
          </div>

          <div className="w-full pb-2 border-b-2">
            <img
              alt="qr-code"
              className="w-full h-full"
              src="/assets/images/qr-code.svg"
            />
          </div>

          <div className="mt-2 pb-6">
            <Button
              onClick={() => router.push("/queue")}
              className="w-full"
              colorScheme={"teal"}
            >
              Bayar Sekarang
            </Button>
          </div>
        </section>
      </main>
    </MainLayout>
  );
}
