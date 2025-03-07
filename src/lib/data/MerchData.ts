type MerchItem = {
  clothingImg: string; // Corrected property name
  id: number;
  link: string;
  price: string;
  title: string;
  priceId: string;
};

export const MerchItemsData: MerchItem[] = [
  {
    clothingImg: "/image/merch/BasicCrewneck.jpg",
    id: 0,
    link: "https://docs.google.com/forms/d/e/1FAIpQLSfpXS4hisen7IBvMGZnrfYWH600W_vpJwW0-b7blsA-D5Dq2w/viewform",
    price: "29.95",
    priceId: "price_1QuK3UIJ8lAYncJXcSjd0Hkl",
    title: "Classic Crew Neck",
  },
  {
    clothingImg: "/image/merch/BasicCrewneckWithSleevePrint.jpg",
    id: 1,
    link: "https://docs.google.com/forms/d/e/1FAIpQLSfpXS4hisen7IBvMGZnrfYWH600W_vpJwW0-b7blsA-D5Dq2w/viewform",
    price: "49.99",
    priceId: "price_1QuKSpIJ8lAYncJXBja1aLhU",
    title: "Crew Neck with Custom Sleeve Print",
  },
];
