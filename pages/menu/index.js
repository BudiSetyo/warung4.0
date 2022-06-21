import { useState } from "react";
import { Tabs, TabList, Tab, Icon, Button } from "@chakra-ui/react";
import { BiCart } from "react-icons/bi";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { MainLayout } from "@/layouts";
import Link from "next/link";
import { Search } from "@/components";
import { Navbar, Footer } from "@/components";
import { useRouter } from "next/router";

export default function Menu() {
  const [tabIndex, setTabIndex] = useState(0);

  const router = useRouter();

  const tabList = ["Popular", "Breakfast", "Snack", "Desert", "Drink"];
  const popularData = [
    {
      name: "Nasi Uduk",
      price: "15.000",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      pict: "Nasi Uduk",
    },
    {
      name: "Nasi Padang",
      price: "15.000",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      pict: "Nasi Padang",
    },
    {
      name: "Nasi Gulai",
      price: "15.000",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      pict: "Nasi Gulai",
    },
  ];

  const cart = [
    {
      name: "Nasi Gulai",
      price: "15.000",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      pict: "Nasi Gulai",
    },
  ];

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      console.log("do validate");
    }
  };

  const handleNavigate = (id) => {
    return router.push(`/menu/detail/${id}`);
  };

  return (
    <MainLayout className="px-6">
      <Navbar cart={true} />
      <section className="sticky top-[72px] bg-white">
        <div className="mt-4">
          <h1 className="font-bold text-xl">
            Halo Wintang, apa yang akan kamu pesan?
          </h1>
        </div>

        <div className="mt-4">
          <Search onKeyDown={handleKeyDown} />
        </div>

        <div className="overflow-auto">
          <Tabs
            onChange={(index) => setTabIndex(index)}
            index={tabIndex}
            colorScheme="teal"
          >
            <TabList>
              {tabList.map((item, index) => {
                return (
                  <ul key={index}>
                    <li key={index} className="outline-none">
                      <Link key={index} href={`#${item}`}>
                        <Tab className="font-bold text-xl" key={index}>
                          {item}
                        </Tab>
                      </Link>
                    </li>
                  </ul>
                );
              })}
            </TabList>
          </Tabs>
        </div>
      </section>

      <main className="scroll-smooth pt-12 pb-24 mt-4">
        <section>
          <h1 className="text-xl font-bold" id="Popular">
            Popular
          </h1>

          <section className="mt-4">
            {popularData.map((item, index) => {
              return (
                <section
                  onClick={() => handleNavigate(item.name)}
                  key={index}
                  className="flex items-start mb-4 bg-[#F7FAFC] rounded-t"
                >
                  <div className="w-[160px] min-w-[160px] h-[160px] p-2 ">
                    <img
                      className="h-full w-full object-contain"
                      src="/assets/images/uduk.svg"
                      alt={item.name}
                    />
                  </div>

                  <div className="flex flex-col justify-around p-4">
                    <h1 className="text-xl font-bold mb-2">{item.name}</h1>
                    <span title={item.description} className="mb-2">
                      <p className="line-clamp-2 text-gray-500">
                        {item.description}
                      </p>
                    </span>
                    <h1 className="text-xl font-bold">{`Rp. ${item.price}`}</h1>
                  </div>
                </section>
              );
            })}
          </section>
        </section>

        <section>
          <h1 className="text-xl font-bold" id="Breakfast">
            Breakfast
          </h1>

          <section className="mt-4">
            {popularData.map((item, index) => {
              return (
                <section
                  key={index}
                  className="flex items-start mb-4 bg-[#F7FAFC] rounded-t"
                >
                  <div className="w-[160px] min-w-[160px] h-[160px] p-2 ">
                    <img
                      className="h-full w-full object-contain"
                      src="/assets/images/uduk.svg"
                      alt={item.name}
                    />
                  </div>

                  <div className="flex flex-col justify-around p-4">
                    <h1 className="text-xl font-bold mb-2">{item.name}</h1>
                    <span title={item.description} className="mb-2">
                      <p className="line-clamp-2 text-gray-500">
                        {item.description}
                      </p>
                    </span>
                    <h1 className="text-xl font-bold">{`Rp. ${item.price}`}</h1>
                  </div>
                </section>
              );
            })}
          </section>
        </section>

        <section>
          <h1 className="text-xl font-bold" id="Snack">
            Snack
          </h1>

          <section className="mt-4">
            {popularData.map((item, index) => {
              return (
                <section
                  key={index}
                  className="flex items-start mb-4 bg-[#F7FAFC] rounded-t"
                >
                  <div className="w-[160px] min-w-[160px] h-[160px] p-2 ">
                    <img
                      className="h-full w-full object-contain"
                      src="/assets/images/uduk.svg"
                      alt={item.name}
                    />
                  </div>

                  <div className="flex flex-col justify-around p-4">
                    <h1 className="text-xl font-bold mb-2">{item.name}</h1>
                    <span title={item.description} className="mb-2">
                      <p className="line-clamp-2 text-gray-500">
                        {item.description}
                      </p>
                    </span>
                    <h1 className="text-xl font-bold">{`Rp. ${item.price}`}</h1>
                  </div>
                </section>
              );
            })}
          </section>
        </section>

        <section>
          <h1 className="text-xl font-bold" id="Desert">
            Desert
          </h1>

          <section className="mt-4">
            {popularData.map((item, index) => {
              return (
                <section
                  key={index}
                  className="flex items-start mb-4 bg-[#F7FAFC] rounded-t"
                >
                  <div className="w-[160px] min-w-[160px] h-[160px] p-2 ">
                    <img
                      className="h-full w-full object-contain"
                      src="/assets/images/uduk.svg"
                      alt={item.name}
                    />
                  </div>

                  <div className="flex flex-col justify-around p-4">
                    <h1 className="text-xl font-bold mb-2">{item.name}</h1>
                    <span title={item.description} className="mb-2">
                      <p className="line-clamp-2 text-gray-500">
                        {item.description}
                      </p>
                    </span>
                    <h1 className="text-xl font-bold">{`Rp. ${item.price}`}</h1>
                  </div>
                </section>
              );
            })}
          </section>
        </section>

        <section>
          <h1 className="text-xl font-bold" id="Drink">
            Drink
          </h1>

          <section className="mt-4">
            {popularData.map((item, index) => {
              return (
                <section
                  key={index}
                  className="flex items-start mb-4 bg-[#F7FAFC] rounded-t"
                >
                  <div className="w-[160px] min-w-[160px] h-[160px] p-2 ">
                    <img
                      className="h-full w-full object-contain"
                      src="/assets/images/uduk.svg"
                      alt={item.name}
                    />
                  </div>

                  <div className="flex flex-col justify-around p-4">
                    <h1 className="text-xl font-bold mb-2">{item.name}</h1>
                    <span title={item.description} className="mb-2">
                      <p className="line-clamp-2 text-gray-500">
                        {item.description}
                      </p>
                    </span>
                    <h1 className="text-xl font-bold">{`Rp. ${item.price}`}</h1>
                  </div>
                </section>
              );
            })}
          </section>
        </section>
      </main>
      {cart.length !== 0 ? (
        <Footer>
          <section>
            <div className="flex ">
              <Icon boxSize={7} as={BiCart} color="#000000CC" />
              <h1 className="ml-3 text-xl font-bold">
                {cart.length} makanan di keranjang
              </h1>
            </div>
            <Button className="mt-6 w-full" colorScheme={"teal"}>
              Selesaikan Pesanan
              <ArrowForwardIcon className="ml-2.5" />
            </Button>
          </section>
        </Footer>
      ) : (
        <></>
      )}
    </MainLayout>
  );
}
