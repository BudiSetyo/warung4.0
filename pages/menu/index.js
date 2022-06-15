import { useState } from "react";
import { SearchIcon } from "@chakra-ui/icons";
import {
  Input,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from "@chakra-ui/react";
import { MenuLayout } from "@/layouts";
import Link from "next/link";

export default function Menu() {
  const [tabIndex, setTabIndex] = useState(0);

  const tabList = ["Popular", "Breakfast", "Snack", "Desert", "Drink"];

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

        <div className="mt-4 scroll-auto">
          <Tabs
            onChange={(index) => setTabIndex(index)}
            index={tabIndex}
            colorScheme="teal"
            className="scroll-auto"
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

      <main className="scroll-smooth">
        <section>
          <h1 className="text-xl font-bold" id="Popular">
            Popular
          </h1>
        </section>

        <section>
          <h1 className="text-xl font-bold" id="Breakfast">
            Breakfast
          </h1>
        </section>

        <section>
          <h1 className="text-xl font-bold" id="Snack">
            Snack
          </h1>
        </section>

        <section>
          <h1 className="text-xl font-bold" id="Drink">
            Drink
          </h1>
        </section>
      </main>
    </MenuLayout>
  );
}
