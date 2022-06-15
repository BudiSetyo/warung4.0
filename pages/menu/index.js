import { useState } from "react";
import { SearchIcon } from "@chakra-ui/icons";
import { Input, Tabs, TabList, Tab } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import { MenuLayout } from "@/layouts";
import Link from "next/link";

export default function Menu() {
  const [tabIndex, setTabIndex] = useState(0);

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

  const textTruncate = (str, length, ending) => {
    if (!length) {
      // eslint-disable-next-line no-param-reassign
      length = 100;
    }
    if (!ending) {
      // eslint-disable-next-line no-param-reassign
      ending = "...";
    }
    if (str.length > length) {
      return str.substring(0, length - ending.length) + ending;
    }
    return str;
  };

  return (
    <MenuLayout>
      <section className="sticky top-[72px] bg-white">
        <div className="mt-4">
          <h1 className="font-bold text-xl">
            Halo Wintang, apa yang akan kamu pesan?
          </h1>
        </div>

        <div className="flex bg-gray-100 rounded-md mt-4 px-4">
          <div className="flex items-center">
            <SearchIcon boxSize={5} color="#0000007A" />
          </div>
          <Input placeholder="Search" border="none" focusBorderColor="none" />
        </div>

        <div className="mt-4 overflow-auto">
          <Tabs
            onChange={(index) => setTabIndex(index)}
            index={tabIndex}
            colorScheme="teal"
          >
            <TabList>
              {tabList.map((item, index) => {
                return (
                  <ul key={index}>
                    <li key={index}>
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

      <main className="scroll-smooth mt-4">
        <section>
          <h1 className="text-xl font-bold" id="Popular">
            Popular
          </h1>

          <section className="mt-4">
            {popularData.map((item, index) => {
              return (
                <section
                  key={index}
                  className="flex mb-4 bg-[#F7FAFC] rounded-t"
                >
                  <div className="w-4/12 p-4">
                    <img
                      className="h-full w-full"
                      src="/assets/images/uduk.svg"
                    />
                  </div>

                  <div className="flex flex-col justify-around p-4">
                    <h1 className="text-xl font-bold">{item.name}</h1>
                    <div>
                      <p>{textTruncate(item.description, 40)}</p>
                    </div>
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
                  className="flex mb-4 bg-[#F7FAFC] rounded-t"
                >
                  <div className="w-4/12 p-4">
                    <img
                      className="h-full w-full"
                      src="/assets/images/uduk.svg"
                    />
                  </div>

                  <div className="flex flex-col justify-around p-4">
                    <h1 className="text-xl font-bold">{item.name}</h1>
                    <div>
                      <p>{textTruncate(item.description, 40)}</p>
                    </div>
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
                  className="flex mb-4 bg-[#F7FAFC] rounded-t"
                >
                  <div className="w-4/12 p-4">
                    <img
                      className="h-full w-full"
                      src="/assets/images/uduk.svg"
                    />
                  </div>

                  <div className="flex flex-col justify-around p-4">
                    <h1 className="text-xl font-bold">{item.name}</h1>
                    <div>
                      <p>{textTruncate(item.description, 40)}</p>
                    </div>
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
                  className="flex mb-4 bg-[#F7FAFC] rounded-t"
                >
                  <div className="w-4/12 p-4">
                    <img
                      className="h-full w-full"
                      src="/assets/images/uduk.svg"
                    />
                  </div>

                  <div className="flex flex-col justify-around p-4">
                    <h1 className="text-xl font-bold">{item.name}</h1>
                    <div>
                      <p>{textTruncate(item.description, 40)}</p>
                    </div>
                    <h1 className="text-xl font-bold">{`Rp. ${item.price}`}</h1>
                  </div>
                </section>
              );
            })}
          </section>
        </section>
      </main>
    </MenuLayout>
  );
}
