import Header from "./Header"
import bg from "../assets/netflix-bg.jpg"
import { useRef, useState } from "react"
import { check_Validata_Email_Password } from "../utils/validate";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

import {auth} from "../utils/firebase";


const Login = () => {

    const [isSignedIn, setSignIN] = useState(true);
    const [errorMessage, seterrorMessage] = useState(null);

    const fullName = useRef(null);
    const email = useRef(null);
    const password = useRef(null);

    const handleLoginLogout = (e) => {

        e.preventDefault();
        
        console.log("submited")
        if (!isSignedIn) seterrorMessage(check_Validata_Email_Password(email.current.value, password.current.value, fullName.current.value, email.current.value))

        else seterrorMessage(check_Validata_Email_Password(email.current.value, password.current.value));
        
        if (!isSignedIn) {
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed up 
                    const user = userCredential.user;
                    console.log(user);

                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    // ..

                    seterrorMessage(errorCode, errorMessage);
                });
            console.log("1")
        }
        else {
            console.log("2")	
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    console.log(user);
                    // ...
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    seterrorMessage(errorCode + " " + errorMessage);
                });
        }

    }


    return (
        <div className="  ">
            <Header />
            <div className="absolute z-0 ">
                <img className="w-full h-full object-fill" src={bg} />
            </div>


            <form className="absolute bg-black md:py-10 py-10 px-8 mt-36 md:w-[360px] mx-auto  right-0 left-0 text-white text-center rounded-md bg-opacity-80 w-[360px]">
                <h1 className="font-medium text-3xl">{isSignedIn ? "Sign In" : "Sign Up"}</h1>

                {!isSignedIn &&
                    <input
                    ref={fullName}
                    type="text"
                    placeholder="Full Name"
                    className="p-3 px-5 my-2  w-full rounded-md bg-[#333333] text-gray-400" />
                }

                <input
                    ref={email} 
                    type="text"
                    placeholder="Email"
                    className="p-3 px-5 my-2  w-full rounded-md bg-[#333333] text-gray-400" />

                <input
                    ref={password}
                    type="password"
                    placeholder="Password"
                    className="p-3 px-5 my-2  w-full rounded-md bg-[#333333] text-gray-400" />

                <p className="text-red-500 ">{errorMessage }</p>

                <button
                    onClick={handleLoginLogout}
                    className="py-4 my-6 bg-red-600 w-full rounded-md">
                    {isSignedIn ? "Sign In" : "Sign Up"}
                </button>

                <p
                    onClick={() => setSignIN((pre) => !pre)}
                    className="cursor-pointer text-slate-400">
                    {isSignedIn ? "New to netflix? Sign up now" : "Already have an Account ? Sing In now"}
                </p>


            </form>
        </div>
    )
}
export default Login