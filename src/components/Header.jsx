import { signOut } from "firebase/auth";
import logo from "../assets/netflix-logo.png";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";


const Header = () => {
  const navigate = useNavigate();
  
  const handleSignOut = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
      navigate("/");

    }).catch((error) => {
      // An error happened.
      navigate("/error");
      console.log(error);
    });
  }
  return (
    <div className="absolute flex justify-between z-10 w-full bg-gradient-to-b from-black">
      <img className="w-40 pl-2 pt-4 " src={logo} />
      <div className=" flex flex-row gap-4  pr-2 pt-4">
        <img alt="userIcon"  className="w-40"  src={ logo} />
        <button onClick={handleSignOut} className="bg-red-600 cursor-pointer  text-white rounded-lg px-4 py-2" >Sign out</button>
      </div>
    </div>
  )
}
export default Header;