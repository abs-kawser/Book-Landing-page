/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable prefer-const */
import { useState } from "react";

import { Link } from "react-router-dom";
import { useAppSelector } from "../redux/hooks";
import { useGetAllBooksQuery } from "../redux/features/book/bookSlice";
import Card from "../components/Card";
import { IBookInterface } from "../types/dataTypes";

const Home = () => {
  const { search } = useAppSelector(
    (state: { searchItem: any }) => state?.searchItem
  );

  const { data, isLoading, isError } = useGetAllBooksQuery(search, {
    refetchOnMountOrArgChange: true,
  });

  console.log(data);

  const [filterItems, setFilterItems] = useState([]);

  let content;

  if (isLoading) <div>Loading...</div>;
  if (isError) <div>{isError}</div>;
  if (!isLoading && !isError && data?.data[0]["Rows"].length > 0) {
    content = <Card books={data?.data[0]["Rows"]} />;
  }

  const ShowByFilter = (genre: unknown) => {
    let filterItem = data?.data[0]["Rows"].filter(
      (item: IBookInterface) => item.genre === genre
    );
    setFilterItems(filterItem);
  };

  let filterData = [
    ...new Set(
      data?.data[0]["Rows"]?.map((item: IBookInterface) => item.genre)
    ),
  ];

  console.log(`filterData from home `, filterData);

  return (
    <>
      <div className="container">
        <div className="flex flex-wrap justify-center">
          <div className="w-full flex justify-center align-center items-center ">
            {filterData?.map((genre: any, ind) => (
              <div
                onClick={() => ShowByFilter(genre)}
                key={ind}
                className="  bg-white shadow-lg rounded-lg p-4 m-2 w-[100px] text-center cursor-pointer"
              >
                <span>{genre} </span>
              </div>
            ))}
          </div>

          {filterItems.length > 0 ? (
            filterItems?.map((book: any) => (
              <Link key={book._id} to={`/details/${book._id}`}>
                <div className="rounded-lg p-4 m-2">
                  <div className="card w-96 bg-neutral text-neutral-content">
                    <div className="card-body items-center text-center">
                      <h2 className="card-title">{book.title}</h2>

                      <h1>{book.price}</h1>

                      <h4>{book.genre}</h4>

                      <h4> {book.author}</h4>
                    </div>
                  </div>
                </div>
              </Link>
            ))
          ) : (
            <>{content}</>
          )}
        </div>
      </div>
    </>
  );
};

export default Home;
