import React from "react";
import image1 from '../assets/laptop.jpg'
function Signup() {
  return (
    <div className="min-h-screen py-40 bg-violet-500">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row w-10/12 lg:w-8/12 bg-white rounded-xl mx-auto shadow-lg overflow-hidden">
          <div className="w-full lg:w-1/2 flex flex-col items-center justify-center p-12 bg-no-repeat bg-cover bg-center" style ={{ backgroundImage: `url(${image1})`,backgroundSize:'cover'}}>
            <h1 className="text-white text-3xl mb-3 ">Welcome</h1>
            <div>
              <p className="text-white">
                Already have an Account  
               <a href="#" className="text-purple-500 font-semibold">  Login</a> 
              </p>
            </div>
          </div>
          <div className="w:full lg:w-1/2 px-12  py-16">
            <h2 className="text-3xl mb-4 ">Register</h2>
            <p className="mb-4">
              create your account.
            </p>
            <form >
              <div className="grid grid-cols-2 gap-5">
               <input type="text " placeholder="First Name" className="border border-gray-400  py-1 px-2"  />
               <input type="text " placeholder="Sur Name" className="border border-gray-400 py-1 px-2"  />
              </div>
              <div className="mt-5">
              <input type="text " placeholder="email " className="border border-gray-400 py-1 px-2 w-full"  />

              </div>
              <div className="mt-5">
              <input type="text " placeholder="password " className="border border-gray-400 py-1 px-2 w-full"  />

              </div>
              <div className="mt-5">
                <button className="w-full bg-purple-500 py-3 text-center text-white">Register</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
