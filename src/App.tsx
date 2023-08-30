import { useEffect } from "react";
import Mainlayout from "./layouts/Mainlayout";
import { useAppDispatch } from "./redux/hooks";
import { onAuthStateChanged } from "firebase/auth";
import { setLoading, setUser } from "./redux/features/user/userSlice";
import { auth } from "./lib/firebase";

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setLoading(true));
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(setUser(user.email));
        dispatch(setLoading(false));
      } else {
        dispatch(setLoading(false));
      }
    });
  }, [dispatch]);

  return (
    <>
      <Mainlayout />
    </>
  );
}

export default App;
