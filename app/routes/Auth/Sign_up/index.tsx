import { useSignUp } from "~/Context/signUpContext";



export default function SignUp() {
    const {isSignedUp, setIsSignedUp} =useSignUp()
  return (
    <section className={`translate duration-500 p-6 ${isSignedUp?'-translate-x-80': '-translate-x-0'}`}>
        <h2 className="text-emerald-400 font-bold text-3xl">Create Account</h2>
       <form>
        
       </form>
    </section>
  );
}