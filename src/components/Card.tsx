/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  ReactElement,
  JSXElementConstructor,
  ReactNode,
  ReactPortal,
} from "react";
import { IBookInterface } from "../types/dataTypes";

interface IProps {
  books: IBookInterface[];
}

const Card = ({ books }: IProps) => {
  console.log(books);

  return (
    <>
      {books.map(
        (
          book: {
            price: ReactNode;
            author: ReactNode;
            genre: ReactNode;
            title:
              | string
              | number
              | boolean
              | ReactElement<any, string | JSXElementConstructor<any>>
              | Iterable<ReactNode>
              | ReactPortal
              | null
              | undefined;
          },
          index: number
        ) => (
          <div key={index} className="rounded-lg p-4 m-2">
            <div className="card w-96 bg-neutral text-neutral-content">
              <div className="card-body items-center text-center">
                <h2 className="card-title">
                  {book.title} <p>{book.price}</p>
                </h2>
                <p>{book.genre}</p>
                <h4> {book.author}</h4>
              </div>
            </div>
            <div className="text-center  text-2xl  text-lime-600"></div>
          </div>
        )
      )}
    </>
  );
};

export default Card;
