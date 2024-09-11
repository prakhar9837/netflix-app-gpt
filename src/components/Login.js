import React, { useState } from "react"
import Header from "./Header"


const Login = () => {

    const [isSignInForm, setIsSignInForm] = useState(true);

    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm);
    }


    return (
        <div>
            <Header />
            <div className="absolute">
                <img className="" src="https://assets.nflxext.com/ffe/siteui/vlv3/04bef84d-51f6-401e-9b8e-4a521cbce3c5/null/IN-en-20240903-TRIFECTA-perspective_0d3aac9c-578f-4e3c-8aa8-bbf4a392269b_large.jpg"
                alt="background" />
            </div>
            <form className="w-4/12 absolute p-12 bg-black mx-auto right-0 left-0 my-36 text-white bg-opacity-80">
            <h1 className="font-bold text-3xl py-4 w-full">{ isSignInForm? "Sign In" : "Sign Up"}</h1>
            
            {!isSignInForm && <input type="text" placeholder="Full Name" className="p-4 my-4 w-full bg-gray-800" />}

                <input type="text" placeholder="Email Address" className="p-4 my-4 w-full bg-gray-800" />

                <input type="password" placeholder="Password" className="p-4 my-4 w-full bg-gray-800" />

                <button className="p-4 my-6 bg-red-600 w-full rounded-lg">{ isSignInForm? "Sign In" : "Sign Up"}</button>

                <p className="text-gray-400 cursor-pointer" onClick={toggleSignInForm}>{ isSignInForm? "New to Netflix? Sign Up Now" : "Already Registered? Sign In Now."}</p>
            </form>
        </div>

    )
}

export default Login


// rafce -> React Arrow Function Component Export