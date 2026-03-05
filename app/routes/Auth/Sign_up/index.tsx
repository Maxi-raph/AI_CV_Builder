import { useSignUp } from "~/Context/signUpContext";
import { FaFacebookF ,FaLinkedin, FaGoogle, FaUser, FaEnvelope, FaLock } from "react-icons/fa";



export default function SignUp() {
    const {isSignedUp, setIsSignedUp} =useSignUp()
  return (
    <section className={`translate duration-500 p-6 pt-10 relative z-8 ${isSignedUp?'-translate-x-93': '-translate-x-0'}`}>
        <h2 className="text-emerald-400 font-bold text-center text-xl sm:text-2xl md:text-3xl">Create Account</h2>
        <div className='flex w-full justify-center gap-4 mt-4 mb-4'>
          <a href="#">
            <div className="border border-gray-300 p-2 rounded-full">
              <FaFacebookF className="text-lg" />
            </div>
          </a>
          <a href="#">
            <div className="border border-gray-300 p-2 rounded-full">
              <FaGoogle className="text-lg"/>
            </div>
          </a>
          <a href="#">
            <div className="border border-gray-300 p-2 rounded-full">
              <FaLinkedin className="text-lg" />
            </div>
          </a>
        </div>
        <p className="mb-4 text-gray-300 text-center">or use your email for registration</p>
       <form>
          <div className="relative mb-6">
            <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input 
              type="text"
              placeholder="Name"
              className="pl-10 pr-3 py-2 bg-gray-100 focus:ring-2 focus:ring-emerald-300 outline-0 rounded-md w-full" 
            />
          </div>     
           <div className="relative mb-6">
            <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input 
              type="email"
              placeholder="Email"
              className="pl-10 pr-3 py-2 bg-gray-100 focus:ring-2 focus:ring-emerald-300 outline-0 rounded-md w-full" 
            />
          </div>     
           <div className="relative mb-6">
            <FaLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input 
              type="password"
              placeholder="Password"
              className="pl-10 pr-3 py-2 bg-gray-100 focus:ring-2 focus:ring-emerald-300 outline-0 rounded-md w-full" 
            />
          </div>   
          <button type="submit" className="text-white bg-emerald-500 hover:bg-emerald-600 cursor-pointer px-12 py-2 rounded-3xl mx-auto flex">Sign Up</button>  
        </form>
    </section>
  );
}