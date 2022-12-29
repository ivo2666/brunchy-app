export interface Item {
  name: string;
  caption: string;
  price: number;
  image: string;
}

export type Data = {items: Item[]} 

export const data:Data = {
  items: [
    {
      name: "Butter Pancakes",
      caption: "With",
      price: 14.5,
      image: "asset1.png",
    },
    {
      name: "Avocado Toast",
      caption: "2 pieces",
      price: 16.5,
      image: "asset2.png",
    },
    {
      name: "Sweet Yogurt",
      caption: "With strawberries",
      price: 5.0,
      image: "asset3.png",
    },
    {
      name: "Peanut Toast",
      caption: "With butter",
      price: 9.5,
      image: "asset4.png",
    },
    {
      name: "French Toast",
      caption: "With butter and jam",
      price: 9.5,
      image: "asset5.png",
    },
    {
      name: "Banana Bread",
      caption: "With blueberries",
      price: 5.5,
      image: "asset6.png",
    },
    {
      name: "Classic Waffle",
      caption: "With ice cream",
      price: 7.5,
      image: "asset7.png",
    },
  ],
};
