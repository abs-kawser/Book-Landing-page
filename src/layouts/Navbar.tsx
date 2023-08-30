import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { signOut } from "firebase/auth";
import { auth } from "../lib/firebase";
import { setUser } from "../redux/features/user/userSlice";
import { SetStateAction, useState } from "react";
import { inputSearchItemAction } from "../redux/features/book/searchSlice";

const Navbar = () => {
  const { user } = useAppSelector((state) => state.user);
  //console.log(user);

  const dispatch = useAppDispatch();
  //search functiONAL IMPLEMENT 

  const [searchValue, setSearchValue] = useState<string>('')
  const handleInputSearch=(e: { target:{ value: SetStateAction<string>} })=>{
    setSearchValue(e.target.value)
   
    if(searchValue.length > 0){
     dispatch(inputSearchItemAction(searchValue)) 
    }
 }

  
  
 const handleLogout = () => {
   signOut(auth).then(() => {
     dispatch(setUser(null));
   });
 };
 



  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <Link to={"/home"} className="btn btn-ghost normal-case text-xl">
          Home
        </Link>
      </div>
      <div className="flex-none gap-2">
        <div>
          <button>
            <Link to="/createBook"> Add book </Link>
          </button>
        </div>

        <div className="form-control">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered w-24 md:w-auto"
            onChange={handleInputSearch}
          />
        </div>

        {user.email && (
          <div className="form-control">
            <h2> {user.email}</h2>
          </div>
        )}

        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src="/src/assets/img/purple-flower.png" />
            </div>
          </label>

          <ul
            tabIndex={0}
            className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
          >
         

            <li>
              {user.email ? (
                <div className="p-5" onClick={handleLogout}>
                  <Link
                    to="/"
                    className="block py-2 px-4 text-black hover:bg-gray-100"
                  >
                    LogOut
                  </Link>
                </div>
              ) : (
                <>
                  <Link
                    to="/login"
                    className="block py-2 px-4 hover:bg-gray-100"
                  >
                    login
                  </Link>
                  <Link
                    to="/signup"
                    className="block py-2 px-4 text-black hover:bg-gray-100"
                  >
                    Signup
                  </Link>
                </>
              )}
              {/*             
              {isDropdownOpen && (
                <div>
                 
            

                </div>
              )} */}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

// {
//   ?  () : ()
// }
