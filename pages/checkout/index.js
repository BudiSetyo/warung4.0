import { CheckoutLayout } from "@/layouts";
import {
  InfoIcon,
  AddIcon,
  MinusIcon,
  ChevronRightIcon,
} from "@chakra-ui/icons";
import { IconButton, Button, Select } from "@chakra-ui/react";
import { Footer } from "@/components";

export default function Menu() {
  const listOrder = [
    {
      name: "nasi uduk",
      price: 18000,
      count: 2,
    },
    {
      name: "nasi padang",
      price: 18000,
      count: 5,
    },
  ];

  return (
    <CheckoutLayout page="Checkout">
      <main className="bg-[#F7FAFC] mb-4 scroll-smooth">
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
              {listOrder.map((item, index) => {
                return (
                  <div
                    key={index}
                    className={`flex py-4 ${
                      index === listOrder.length - 1 ? "" : "border-b-2"
                    }`}
                  >
                    <div className="w-[160px] min-w-[160px] h-[160px] p-2">
                      <img
                        className="h-full w-full object-contain"
                        src="/assets/images/uduk.svg"
                      />
                    </div>

                    <div className={`flex flex-col justify-around p-4 ml-4`}>
                      <h1 className="text-xl font-bold">{item.name}</h1>
                      <p>Rp. {item.price}</p>
                      <div className="flex items-center">
                        <IconButton
                          size={"sm"}
                          colorScheme={"teal"}
                          variant={"outline"}
                          isRound={true}
                          icon={<MinusIcon />}
                        />
                        <p className="px-5 text-lg font-bold">{item.count}</p>
                        <IconButton
                          size={"sm"}
                          colorScheme={"teal"}
                          variant={"outline"}
                          isRound={true}
                          icon={<AddIcon />}
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
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

        <section className="bg-white px-6 pt-4 pb-48">
          <h1 className="text-xl font-bold">Ringkasan Pembayaran</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </section>
      </main>

      <Footer>
        <div className="mb-6">
          <Button className="w-full" colorScheme="teal" variant="outline">
            <p>Makin Hemat Pakai Voucher</p>
            <ChevronRightIcon boxSize={6} />
          </Button>
        </div>
        <div className="flex">
          <div className="w-1/2">
            <p>Total Tagihan</p>
            <p>Rp 216.000</p>
          </div>
          <div className="w-full flex items-center">
            <Button className="w-full" colorScheme="teal">
              Pilih Pembayaran
            </Button>
          </div>
        </div>
      </Footer>
    </CheckoutLayout>
  );
}
