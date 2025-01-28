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
    image: "/image/merch/BasicCrewneck.jpg",
    item: "Original Basic Crewneck",
    price: "$29.95 CAD",
    sizes: ["S", "M", "L", "XL"],
  },
  {
    colors: ["Black"],
    description: "placeholder descripton",
    id: 1,
    image: "/image/merch/BasicCrewneckWithSleevePrint.jpg",
    item: "Crewneck with Sleeve Print",
    price: "$49.99 CAD",
    sizes: ["S", "M", "L", "XL"],
  },
];
