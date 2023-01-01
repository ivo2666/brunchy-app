export interface Item {
  name: string;
  caption: string;
  price: number;
  image: string;
}

export type Data = {items: Item[]} 
