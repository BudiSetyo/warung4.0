import { MainLayout } from "@/layouts";
import {
  InfoIcon,
  AddIcon,
  MinusIcon,
  ChevronRightIcon,
} from "@chakra-ui/icons";
import { IconButton, Button, Select } from "@chakra-ui/react";
import { Footer, Navbar } from "@/components";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import { sumPayment } from "@/helpers";
import { changeCounnt, cancelDiskon } from "@/configs";

export default function Menu() {
  const dispatch = useDispatch();
  const cartData = useSelector((state) => state.cart);
  const diskonData = useSelector((state) => state.diskon);

  const router = useRouter();

  const diskon = diskonData.diskon;

  const totalPayment = sumPayment(cartData);

  return (
    <MainLayout>
      <Navbar clearDiskon={true} cart={false} page="Checkout" />
      <main className="bg-[#F7FAFC] pt-16 mb-4 scroll-smooth">
        <section className="pt-4 mb-4 bg-white">
          <section>
            <div className="flex bg-orange-50 py-3 px-6 rounded-md">
              <InfoIcon boxSize={7} color="#FBD38D" />
              <p className="ml-6 text-xl text-yellow-700">
                Pastikan pesanan kamu sudah sesuai!
              </p>
            </div>
          </section>

          <section className="pt-4">
            <h1 className="text-xl font-bold">Daftar Pesanan</h1>

            <section className="px-6">
              {cartData.length !== 0 ? (
                <>
                  {cartData?.map((item, index) => {
                    return (
                      <div
                        key={index}
                        className={`flex py-4 ${
                          index === cartData.length - 1 ? "" : "border-b-2"
                        }`}
                      >
                        <div className="w-[160px] min-w-[160px] h-[160px] p-2">
                          <img
                            alt="uduk"
                            className="h-full w-full object-contain"
                            src={`/assets/images/menu/${item.img}.svg`}
                          />
                        </div>

                        <div
                          className={`flex flex-col justify-around p-4 ml-4`}
                        >
                          <h1 className="text-xl font-bold">{item.name}</h1>
                          <p>Rp. {item.price}</p>
                          <div className="flex items-center">
                            <IconButton
                              size={"sm"}
                              colorScheme={"teal"}
                              variant={"outline"}
                              isRound={true}
                              icon={<MinusIcon />}
                              onClick={() => {
                                dispatch(cancelDiskon());
                                if (item.count - 1 < 1) {
                                  if (
                                    confirm(
                                      `Apakah kamu yakin ingin menghapus ${item.name}?`
                                    )
                                  ) {
                                    dispatch(
                                      changeCounnt({ ...item, count: -1 })
                                    );
                                  }
                                } else {
                                  dispatch(
                                    changeCounnt({ ...item, count: -1 })
                                  );
                                }
                              }}
                            />
                            <p className="px-5 text-lg font-bold">
                              {item.count}
                            </p>
                            <IconButton
                              size={"sm"}
                              colorScheme={"teal"}
                              variant={"outline"}
                              isRound={true}
                              icon={<AddIcon />}
                              onClick={() => {
                                dispatch(cancelDiskon());
                                dispatch(changeCounnt({ ...item, count: 1 }));
                              }}
                            />
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </>
              ) : (
                <>
                  <div className="py-5">
                    <h1>Kamu belum memesan makanan</h1>
                  </div>
                </>
              )}
            </section>
          </section>
        </section>

        <section className="px-4 py-3 mb-4 bg-white">
          <h1 className="mb-2">Mau makan dimana?</h1>
          <Select placeholder="Pilih mau makan dimana">
            <option value="option1">Dibungkus</option>
            <option value="option2">Makan ditempat</option>
          </Select>
          <p className="mt-2 text-red-600">Harus dipilih</p>
        </section>

        <section className="bg-white px-6 pt-4 pb-40">
          <h1 className="text-xl font-bold mb-4">Ringkasan Pembayaran</h1>
          <div className="border-b-2 mb-4">
            <div className="flex justify-between pb-4">
              <p>Harga</p>
              <p>{totalPayment}</p>
            </div>
            <div className="flex justify-between pb-4">
              <p>Diskon</p>
              <p>{diskon.diskon}</p>
            </div>
          </div>
          <div>
            <div className="flex justify-between">
              <p className="text-xl font-bold">Total Pembayaran</p>
              <p className="text-xl font-bold">
                {totalPayment - diskon.diskon < 0
                  ? 0
                  : totalPayment - diskon.diskon}
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer>
        <div className="mb-6">
          <Button
            onClick={(e) => {
              e.preventDefault;
              router.push("/voucher");
            }}
            className="w-full"
            colorScheme="gray"
            variant="outline"
          >
            <div>
              {diskon.diskon !== 0 ? (
                <>
                  <h1 className="text-xl text-gray-600">{`Kode: ${diskon.code}`}</h1>
                </>
              ) : (
                <>
                  <div className="flex">
                    <p>Makin Hemat Pakai Voucher</p>
                    <ChevronRightIcon boxSize={5} />
                  </div>
                </>
              )}
            </div>
          </Button>
        </div>
        <div className="flex">
          <div className="w-1/2">
            <p>Total Tagihan</p>
            <p className="text-xl font-bold">
              Rp{" "}
              {totalPayment - diskon.diskon < 0
                ? 0
                : totalPayment - diskon.diskon}
            </p>
          </div>
          <div className="w-full flex items-center">
            <Button
              onClick={(e) => {
                e.preventDefault;
                return router.push("/payment");
              }}
              className="w-full"
              colorScheme="teal"
            >
              Pilih Pembayaran
            </Button>
          </div>
        </div>
      </Footer>
    </MainLayout>
  );
}
