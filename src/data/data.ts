import asset1 from '../assets/asset1.png'
import asset2 from '../assets/asset2.png'
import asset3 from '../assets/asset3.png'
import asset4 from '../assets/asset4.png'
import asset5 from '../assets/asset5.png'
import asset6 from '../assets/asset6.png'
import asset7 from '../assets/asset7.png'

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
      caption: "With honey",
      price: 14.5,
      image: asset1,
    },
    {
      name: "Avocado Toast",
      caption: "2 pieces",
      price: 16.5,
      image: asset2,
    },
    {
      name: "Sweet Yogurt",
      caption: "With strawberries",
      price: 5.0,
      image: asset3,
    },
    {
      name: "Peanut Toast",
      caption: "With butter",
      price: 9.5,
      image: asset4,
    },
    {
      name: "French Toast",
      caption: "With butter and jam",
      price: 9.5,
      image: asset5,
    },
    {
      name: "Banana Bread",
      caption: "With blueberries",
      price: 5.5,
      image: asset6,
    },
    {
      name: "Classic Waffle",
      caption: "With ice cream",
      price: 7.5,
      image: asset7,
    },
  ],
};
