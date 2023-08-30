import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { useEffect } from "react";
import { loginUser } from "../redux/features/user/userSlice";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const dispatch = useAppDispatch();
  const { user, isLoading } = useAppSelector((state) => state.user);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  // const navigate = useNavigate();
  // const { state } = useLocation();
  // const from = "/" || state;

  const navigate = useNavigate();


  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    try {
      const check = dispatch(
        loginUser({ email: formData.email, password: formData.password })
      );
      console.log({ check: check });

      console.log(formData);
      // Clear the form fields after submission
      setFormData({
        email: "",
        password: "",
      });

      toast.success(`Login successful`);
    } catch (error) {
      toast.error(`Login failed`);
      console.log(error);
    }


  };

  useEffect(() => {
    if (user.email && !isLoading) {
      navigate('/home');
    }
  }, [user.email, isLoading,navigate]);

  // useEffect(() => {
  //   if (user.email && !isLoading) {
  //     navigate(from);
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [user.email, isLoading]);

  return (
    <div>
      <h1 className="text-center py-5">Login</h1>

      <form className="max-w-md mx-auto p-4 bg-white shadow-lg rounded-lg">
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
            placeholder="Enter your email"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block font-semibold mb-1">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
            placeholder="Enter your password"
          />
        </div>
        <button
          type="submit"
          onClick={handleSubmit}
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded"
        >
          Login
        </button>
      </form>
      <Toaster />
    </div>
  );
};

export default Login;
