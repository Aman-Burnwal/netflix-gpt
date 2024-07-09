import { onAuthStateChanged, signOut } from "firebase/auth";
import logo from "../assets/netflix-logo.png";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";


const Header = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const user = useSelector(state => state.user);
  // console.log()

  const handleSignOut = () => {
    signOut(auth)
      .then(() => { })
      .catch((error) => {
       
        navigate("/error");
        console.log(error);
      });
  }

  useEffect(() => {

    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;

        dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }))

        navigate("/browse")

      }
      else {

        dispatch(removeUser())
        navigate("/")

      }
    })
  }, [])
  return (
    <div className="absolute flex justify-between z-10 w-full bg-gradient-to-b from-black">
      <img className="w-40 pl-2 pt-4 " loading="lazy" src={logo} />
      {user && <div className=" flex flex-row gap-4  pr-2 pt-4">
        <img alt="userIcon" className="w-10 h-10 rounded-lg" loading="lazy" src={user?.photoURL} />
        <button onClick={handleSignOut} className="bg-red-600 cursor-pointer  text-white rounded-lg px-4 py-2" >Sign out</button>
      </div>}
    </div>
  )
}
export default Header;