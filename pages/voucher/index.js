import { MainLayout } from "@/layouts";
import { Navbar, Footer, Search } from "@/components";
import { Button } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addDiskon } from "@/configs";
import { useRouter } from "next/router";
import { sumPayment } from "@/helpers";

export default function Voucher() {
  const voucherData = useSelector((state) => state.voucher);
  const cartData = useSelector((state) => state.cart);

  const [diskonIndex, setDiskonIndex] = useState();
  const [diskon, setDiskon] = useState({});
  const [search, setSearch] = useState("");
  const [warning, setWarning] = useState("");

  const dispatch = useDispatch();
  const router = useRouter();

  const totalPayment = sumPayment(cartData);

  const handleAddDiskon = (e) => {
    e.preventDefault();

    if (totalPayment < diskon.minimum) {
      return setWarning("Minimum belanja kurang!");
    }

    if (diskon.diskon === undefined) {
      return setWarning("Pilih voucher dulu!");
    }

    dispatch(addDiskon(diskon));
    return router.push("/checkout");
  };

  const sortAndFilter = (data, searchString) => {
    const newData = data.filter(
      (item) =>
        (item.code || "")
          .toLowerCase()
          .indexOf((searchString || "").toLowerCase()) !== -1
    );

    return newData;
  };

  return (
    <MainLayout>
      <Navbar page="Voucher" />
      <main className="pt-20">
        <div className="sticky top-[72px] pb-1 bg-white">
          <Search value={search} onChange={(e) => setSearch(e.target.value)} />
        </div>

        <section className="mt-4">
          <h1 className="text-xl font-bold mb-4">Pilih Promo</h1>

          <section className="pb-32">
            {(sortAndFilter(voucherData, search) || []).map((item, index) => {
              return (
                <div
                  onClick={(e) => {
                    e.preventDefault();
                    setWarning("");
                    setDiskonIndex(index);
                    setDiskon({
                      diskon: item.diskon,
                      minimum: item.minimum,
                      code: item.code,
                    });
                  }}
                  className={
                    diskonIndex === index
                      ? "bg-teal-50 border-2 border-teal-400 p-4 mb-4 rounded-xl"
                      : "border-2 p-4 mb-4 rounded-xl"
                  }
                  key={index}
                >
                  <h1 className="text-xl font-bold mb-1">
                    Diskon {item.diskon}
                  </h1>
                  <p className="text-lg mb-2">Minimal belanja {item.minimum}</p>
                  <p className="text-lg font-bold">Kode: {item.code}</p>
                </div>
              );
            })}
          </section>
        </section>
      </main>
      <Footer>
        <section>
          {warning !== "" ? (
            <>
              <h1 className="mb-3 text-red-500">{warning}</h1>
            </>
          ) : (
            <>
              <h1 className="mb-3">Kamu bisa hemat Rp {diskon.diskon || 0}</h1>
            </>
          )}
          <Button
            onClick={handleAddDiskon}
            colorScheme={"teal"}
            className="w-full"
          >
            Pakai Promo
          </Button>
        </section>
      </Footer>
    </MainLayout>
  );
}
