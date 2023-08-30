export interface IBookInterface{
  title: string;
  author: string;
  genre: string;
  price:number;
  email:string;
  description:string;
  _id:string;
  book_id: number;
  createdAt?:string;
  updatedAt?: string;
}[]