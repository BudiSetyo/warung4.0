import { MainLayout } from "@/layouts";
import { Navbar } from "@/components";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { addQueue, addPayment } from "@/configs";

export default function Payment() {
  const router = useRouter();
  const dispatch = useDispatch();

  const handleNav = () => {
    dispatch(addQueue());
    dispatch(addPayment("Bayar di kasir"));
    return router.push("/queue");
  };
  return (
    <MainLayout>
      <Navbar page="Pilih Pembayaran" />
      <main className="pt-20 px-4">
        <h1 className="text-xl font-bold">Mau bayar dengan metode apa?</h1>

        <section className="mt-2 py-2">
          <div
            onClick={() => router.push("/completePayment")}
            className="flex border-b-2 py-4"
          >
            <div className="w-1/6 h-8">
              <img
                alt="qr"
                className="w-full h-full"
                src="/assets/images/qr.svg"
              />
            </div>
            <div className="flex ml-3 justify-between items-center w-full">
              <p className="font-bold">Bayar dengan QRIS</p>
              <ChevronRightIcon boxSize={6} />
            </div>
          </div>

          <div onClick={handleNav} className="flex border-b-2 py-4">
            <div className="w-1/6 h-8">
              <img
                alt="cash"
                className="w-full h-full"
                src="/assets/images/cash.svg"
              />
            </div>
            <div className="flex ml-3 justify-between items-center w-full">
              <p className="font-bold">Bayar di kasir</p>
              <ChevronRightIcon boxSize={6} />
            </div>
          </div>
        </section>
      </main>
    </MainLayout>
  );
}
