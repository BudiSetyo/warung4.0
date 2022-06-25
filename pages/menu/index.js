import { useState } from "react";
import { Tabs, TabList, Tab, Icon, Button } from "@chakra-ui/react";
import { BiCart } from "react-icons/bi";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { MainLayout } from "@/layouts";
import Link from "next/link";
import { Search } from "@/components";
import { Navbar, Footer } from "@/components";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

export default function Menu() {
  const [tabIndex, setTabIndex] = useState(0);

  const [search, setSearch] = useState("");

  const menu = useSelector((state) => state.menu);
  const user = useSelector((state) => state.user);
  const cart = useSelector((state) => state.cart);

  const router = useRouter();

  const tabList = ["Dahsyat", "Paket", "Geprek", "Western", "Drink"];

  const handleNavigate = (id) => {
    return router.push(`/menu/detail/${id}`);
  };

  const sortAndFilter = (data, searchString) => {
    const newData = data.filter(
      (item) =>
        (item.name || "")
          .toLowerCase()
          .indexOf((searchString || "").toLowerCase()) !== -1
    );

    let categoryData = {};

    tabList.map((category) => {
      const lowercategory = (category || "").toLowerCase();

      const findFoods = newData.filter(
        (food) => (food.category || "").toLowerCase() === lowercategory
      );

      if (!categoryData[lowercategory] && findFoods.length) {
        categoryData[lowercategory] = [];

        categoryData[lowercategory] = findFoods;
      }
    });

    return categoryData;
  };

  return (
    <MainLayout className="px-6">
      <Navbar cart={true} />
      <section className="sticky top-[72px] bg-white">
        <div className="mt-4">
          <h1 className="font-bold text-xl">
            Halo {user.userName}, apa yang akan kamu pesan?
          </h1>
        </div>

        <div className="mt-4">
          <Search value={search} onChange={(e) => setSearch(e.target.value)} />
        </div>

        <div className="overflow-auto">
          <Tabs
            onChange={(index) => setTabIndex(index)}
            index={tabIndex}
            colorScheme="teal"
          >
            <TabList>
              {(Object.keys(sortAndFilter(menu, search)) || []).map(
                (item, index) => {
                  return (
                    <ul key={index}>
                      <li key={index} className="outline-none">
                        <Link key={index} href={`#${item}`}>
                          <Tab
                            className="font-bold text-xl capitalize"
                            key={index}
                          >
                            {item}
                          </Tab>
                        </Link>
                      </li>
                    </ul>
                  );
                }
              )}
            </TabList>
          </Tabs>
        </div>
      </section>

      <main
        className={`scroll-smooth pt-12 ${
          cart.length !== 0 ? "pb-24" : ""
        } mt-4`}
      >
        {(Object.keys(sortAndFilter(menu, search)) || []).map((key, index) => (
          <section key={index}>
            <h1 className="text-xl font-bold capitalize" id={key}>
              {key}
            </h1>

            <section className="mt-4">
              {sortAndFilter(menu, search)[key].map((item, index) => {
                return (
                  <section
                    onClick={() => handleNavigate(item.id)}
                    key={index}
                    className="flex items-start mb-4 bg-[#F7FAFC] rounded-t cursor-pointer"
                  >
                    <div className="w-[160px] min-w-[160px] h-[160px] p-2 ">
                      <img
                        className="h-full w-full object-contain"
                        src={`/assets/images/menu/${item.img}.svg`}
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
        ))}
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
            <Button
              onClick={() => {
                router.push("/checkout");
              }}
              className="mt-6 w-full"
              colorScheme={"teal"}
            >
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
