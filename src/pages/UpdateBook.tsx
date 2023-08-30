/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import {  useNavigate, useParams } from "react-router-dom";
import {
  useGetSingleBookQuery,
  useUpdateBookMutation,
} from "../redux/features/book/bookSlice";

const UpdateBook = () => {

  const navigate = useNavigate()
  
  const { id } = useParams();
  console.log(id);

  //const { user } = useAppSelector((state: { user: any }) => state.user);
  
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    genre: "",
    price: "",
    description: "",
  });


  const { data: currentdata} = useGetSingleBookQuery(id);
 console.log(currentdata);
 
 console.log(currentdata?.data.title);
 

  useEffect(() => {
    if (currentdata && currentdata) {
      const { title, author, genre, price, description } = currentdata.data;
      setFormData((prevFormData) => ({
        ...prevFormData,
        title,
        author,
        genre,
        price,
        description,
      }));

   
    }
  }, [currentdata]);
  

  const [data, { isLoading, isError, isSuccess }] = useUpdateBookMutation();
  console.log(isError, isSuccess);
  console.log(data);

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
  
    data({ formData, id });
    console.log({ id, formData });

    // Reset the form fields after submission
    setFormData({
      title: "",
      author: "",
      genre: "",
      price: "",
      description: "",
    });

    navigate("/home")
     
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  return (
    <div className="container">
      {/* <div className="flex">
        <h1>{user.email}</h1>
      </div> */}
      <form className="max-w-md mx-auto p-4 bg-white shadow-lg rounded-lg">
        <div className="mb-4">
          <label htmlFor="title" className="block font-semibold mb-1">
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="author" className="block font-semibold mb-1">
            Author
          </label>
          <input
            type="text"
            id="author"
            name="author"
            value={formData.author}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="genre" className="block font-semibold mb-1">
            Genre
          </label>
          <input
            type="text"
            id="genre"
            name="genre"
            value={formData.genre}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="price" className="block font-semibold mb-1">
            Price
          </label>
          <input
            type="text"
            id="price"
            name="price"
            value={formData.price}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block font-semibold mb-1">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
          />
        </div>
        <button
          type="submit"
          onClick={handleSubmit}
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded"
        >
          {isLoading ? "Loading..." : "Update  book"}
        </button>
      </form>
    </div>
  );
};

export default UpdateBook;
