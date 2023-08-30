/* eslint-disable @typescript-eslint/no-explicit-any */
import { useNavigate, useParams } from "react-router-dom";
import {
  useDeleteBookMutation,
  useGetSingleBookQuery,
} from "../redux/features/book/bookSlice";
import { useAppSelector } from "../redux/hooks";

const DetailsBook = () => {
  const { id } = useParams();

  //its come from redux
  const { data } = useGetSingleBookQuery(id);
  console.log(`single query data `, data);

  const { user } = useAppSelector((state: { user: any }) => state.user);
  console.log(user);

  const [deleteBook] = useDeleteBookMutation();

  const filterItems = data?.data?.email === user?.email;

  console.log(`email data `, filterItems);

  const navigate = useNavigate();

  const editBookpage = (id: any) => {
    navigate(`/updateBook/${id}`);
  };

  const deleteBookpage = (id: string) => {
    // Call the deleteBook mutation with the bookId
    deleteBook(id)
      .unwrap()
      .then(() => {
        console.log("Book deleted successfully");

        navigate(`/home`);
      })
      .catch((error) => {
        console.error("Error deleting book:", error);
        // Handle any error cases
      });
  };

  return (
    <div className="container  flex flex-wrap justify-center">
      <div className="rounded-lg p-4 m-2  ">
        <div className="card w-96 bg-neutral text-neutral-content">
          <div className="card-body items-center text-center">
            <div>
              <h1> About: {data?.data.title}</h1>
              <br />
              <h2> Author:{data?.data.author}</h2>
              <br />
              <h3> genre:{data?.data.genre}</h3>
              <br />
              <span> price:{data?.data.price}</span>
              <br />
              <p>description:{data?.data.description}</p>
              {/* Condisonal rendering  */}
              {filterItems ? (
                <>
                  <div className="card-actions justify-end">
                    <button
                      className="btn btn-primary"
                      onClick={() => editBookpage(data.data._id)}
                    >
                      Edit
                    </button>

                    <button
                      className="btn btn-ghost"
                      onClick={() => deleteBookpage(data.data._id)}
                    >
                      Delete
                    </button>
                  </div>
                </>
              ) : (
                <h1>You are not the creator of this post!</h1>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsBook;
