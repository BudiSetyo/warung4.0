import { MainLayout } from "@/layouts";
import { Button } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { sumPayment } from "@/helpers";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { userLogout, deleteCart, cancelDiskon } from "@/configs";

export default function Queue() {
  const queueData = useSelector((state) => state.queue);
  const cartData = useSelector((state) => state.cart);
  const diskonData = useSelector((state) => state.diskon);
  const paymentData = useSelector((state) => state.payment);

  const totalPayment = sumPayment(cartData);
  const diskon = diskonData.diskon;

  const dispatch = useDispatch();
  const router = useRouter();

  const handleNav = () => {
    dispatch(userLogout());
    dispatch(deleteCart());
    dispatch(cancelDiskon());
    return router.push("/");
  };

  return (
    <MainLayout>
      <main className="px-6 pt-20 pb-8">
        <section className="flex flex-col">
          <h1 className="text-2xl font-bold text-green-800 text-center">
            Pesanan kamu sedang kami Proses!
          </h1>
          <h1 className="text-xl font-bold text-center">
            Berikut nomor antrian kamu
          </h1>
        </section>

        <section className="flex justify-center mt-7">
          <div className="flex justify-center items-center w-[160px] min-w-[160px] h-[160px] bg-yellow-400 rounded-full border-2 border-yellow-500">
            <h1 className="text-7xl text-gray-700">{queueData}</h1>
          </div>
        </section>

        <section className="mt-10 px-6 py-4">
          <div className="pb-2 border-b-2">
            <h1 className="text-xl font-bold">Rincian Pembayaran</h1>
          </div>

          <div className="w-full flex justify-between mt-2">
            <div className="w-1/2">
              <p>Metode Pembayaran</p>
            </div>
            <div className="w-1/2">
              <p className="text-right">
                {paymentData.method === "Bayar di kasir" ? (
                  <>{paymentData.method} (Segera selesaikan pembayaranmu)</>
                ) : (
                  <>{paymentData.method}</>
                )}
              </p>
            </div>
          </div>

          <div className="w-full flex justify-between mt-2">
            <p>Harga</p>
            <p>{totalPayment}</p>
          </div>

          <div className="w-full flex justify-between mt-2 border-b-2 pb-2">
            <p>Diskon</p>
            <p>- {diskon.diskon}</p>
          </div>

          <div className="w-full flex justify-between mt-2 border-b-2 pb-2">
            <p className="text-lg font-bold">Total</p>
            <p className="text-lg font-bold">{totalPayment - diskon.diskon}</p>
          </div>

          <div className="mt-2">
            <Button onClick={handleNav} className="w-full" colorScheme={"teal"}>
              Kembali ke halaman utama
            </Button>
          </div>
        </section>
      </main>
    </MainLayout>
  );
}
