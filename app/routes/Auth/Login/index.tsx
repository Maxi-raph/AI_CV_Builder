import { useSignUp } from "~/Context/signUpContext";
import { FaFacebookF ,FaLinkedin, FaGoogle, FaUser, FaEnvelope, FaLock } from "react-icons/fa";
import { Link, useNavigate } from "react-router";



export default function Login() {
    const {isSignedUp, setIsSignedUp} = useSignUp()
    const navigate = useNavigate()
  return (
    <section className={`translate duration-500 p-6 pt-10 relative z-8 ${isSignedUp ?'-translate-x-[100%]': 'translate-x-0'}`}>
        <h2 className="text-emerald-400 font-bold text-center text-xl sm:text-2xl md:text-3xl">Sign in to Diprella</h2>
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
        <p className="mb-4 text-gray-300 text-center">or use your email account</p>
       <form>  
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
          <button  onClick={(e)=>{
            e.preventDefault()
            setIsSignedUp(!isSignedUp)
            setTimeout(()=> navigate('/sign_up'),5000)    
        }}
           type="submit" className="text-white bg-emerald-500 hover:bg-emerald-600 cursor-pointer px-12 py-2 rounded-3xl mx-auto block w-44 text-center">Sign In</button>  
        </form>
    </section>
  )
}