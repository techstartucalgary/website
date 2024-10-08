import BasicCrewneck from "../../images/merch/BasicCrewneck.jpg";
import BasicCrewneckWithSleevePrint from "../../images/merch/BasicCrewneckWithSleevePrint.jpg";

export type MerchProperties = {
  id: number;
  item: string;
  price: string;
  image: string;
  description: string;
  sizes: string[];
  colors: string[];
};

export const merchList: MerchProperties[] = [
  {
    colors: ["Black"],
    description: "placeholder descripton",
    id: 0,
    image: BasicCrewneck.src,
    item: "Original Basic Crewneck",
    price: "$29.95 CAD",
    sizes: ["S", "M", "L", "XL"],
  },
  {
    colors: ["Black"],
    description: "placeholder descripton",
    id: 1,
    image: BasicCrewneckWithSleevePrint.src,
    item: "Crewneck with Sleeve Print",
    price: "$49.99 CAD",
    sizes: ["S", "M", "L", "XL"],
  },
];
