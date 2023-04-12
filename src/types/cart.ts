export type product = {
  id: number;
  name: string;
  price: number;
  stock: number;
} 

export type cartItem = {
  id: number;
  name: string;
  price: number;
  [key:string]:any
}