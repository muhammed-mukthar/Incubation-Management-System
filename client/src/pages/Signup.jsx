import React from "react";
import { useEffect } from "react";
import image1 from "../assets/laptop.jpg";
import axios from 'axios'
import {userUrl} from '../constants/constant'
import { useState } from "react";
import {Link,useNavigate} from 'react-router-dom'
function Signup() {


  const [name, Setname] = useState("");
  const [company, Setcompany] = useState("");
  const [email, Setemail] = useState("");
  const [password, Setpassword] = useState("");
  const [error, setError] = useState("");
  const navigate=useNavigate()

  let details={
    name,company,email,password
  }
  
  const handleSubmit=async(e)=>{
    e.preventDefault()
    if (!name || !email || !password || !company) {
        setError('Enter All Details')
    } else if (password.length < 5) {
        setError('Enter Minimum 5 chararcters')
    } else {
        console.log(details);
      await  axios.post(`${userUrl}/api/auth/register`, details).then((reponse) => {
        console.log(reponse);
        if(reponse.data.savedUser){
          navigate('/')
        }
        })
    }
  }

  return (
    <div className="min-h-screen py-40 bg-violet-500">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row w-10/12 lg:w-8/12 bg-white rounded-xl mx-auto shadow-lg overflow-hidden">
          <div
            className="w-full lg:w-1/2 flex flex-col items-center justify-center p-12 bg-no-repeat bg-cover bg-center"
            style={{
              backgroundImage: `url(${image1})`,
              backgroundSize: "cover",
            }}
          >
            <h1 className="text-white text-3xl mb-3 ">Welcome</h1>
            <div>
              <p className="text-white">
                Already have an Account
                <a href="#" className="text-purple-500 font-semibold">
                  
                  Login
                </a>
              </p>
            </div>
          </div>
          <div className="w:full lg:w-1/2 px-12  py-16">
            <h2 className="text-3xl mb-4 ">Register</h2>
            <p className="mb-4">create your account.</p>
            {error && <h1 className="text-red-600">{error}</h1>} 
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-2 gap-5">
                <input
                  type="text "
                  onChange={(e) => {
                    Setname(e.target.value);
                  }}
                  placeholder="name"
                  className="border border-gray-400  py-1 px-2"
                />
                <input
                onChange={(e) => {
                  Setcompany(e.target.value);
                }}
                  type="text "
                  placeholder="company"
                  className="border border-gray-400 py-1 px-2"
                />
              </div>
              <div className="mt-5">
                <input
                  type="text "
                  onChange={(e) => {
                    Setemail(e.target.value);
                  }}
                  placeholder="email "
                  className="border border-gray-400 py-1 px-2 w-full"
                />
              </div>
              <div className="mt-5">
                <input
                  type="text "onChange={(e) => {
                    Setpassword(e.target.value);
                  }}

                  placeholder="password "
                  className="border border-gray-400 py-1 px-2 w-full"
                />
              </div>
              <div className="mt-5">
                <button className="w-full bg-purple-500 py-3 text-center text-white">
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
