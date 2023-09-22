/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { useAppSelector } from "../redux/hooks";
import { useCreateBookMutation } from "../redux/features/book/bookSlice";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
//import { Toaster, toast } from "react-hot-toast";
// import { Toaster, toast } from "react-hot-toast";

const CreateBook = () => {
  const { user } = useAppSelector((state: { user: any; }) => state.user);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    author: "",
    email: `${user.email}`,
    genre: "",
    price: "",
    description: "",
  });

  const [data, { isLoading, isError, isSuccess }] = useCreateBookMutation();
  console.log(isError, isSuccess, isLoading);

  // if (isSuccess) {
  //   console.log(`hello`);

  //     toast.success(`Book created successfully`)
  // } else if (isError) {
  //    toast.error(`Book not  created successfully`)
  // }

  const handleChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    if (!formData.title || !formData.author || !formData.genre || !formData.price || !formData.description) {
      toast.error("Please fill out all required fields");
    } else {
      try {
        data(formData);
        console.log(formData);
        // Reset the form fields after submission
        setFormData({
          title: "",
          author: "",
          email: `${user.email ? user.email : ""}`,
          genre: "",
          price: "",
          description: "",
        });
        alert(`Success`)
        toast.success("Successes fully submit ")

      } catch (error) {
        toast.error("Successes fully submit ")

      }

    }

  };

  if (isSuccess) {
    navigate("/home");
  }




  return (
    <>
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
          <label htmlFor="email" className="block font-semibold mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
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
          {isLoading ? "Loading..." : "Create Book"}
        </button>
      </form>
      <Toaster />
    </>
  );
};

export default CreateBook;
