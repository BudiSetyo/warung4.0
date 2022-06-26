import { idGenerator } from "@/helpers";
import menu from "./menu.json";
const menuData = menu.map((item) => {
  return {
    id: idGenerator(),
    name: item.name,
    description: item.description,
    price: item.price,
    category: item.category,
    img: item.img,
  };
});

import voucherData from "./voucher.json";

export { menuData, voucherData };
