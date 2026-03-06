import { useSignUp } from '~/Context/signUpContext';
import  SignUp  from '~/Components/Sign_up/'
import Login from '~/Components/Login';
import  { useTransition } from '~/Context/TransitionContext';


const OnboardingLayout = () => {
    const {isSignedUp, setIsSignedUp} =useSignUp()
    const {transition, setTransition} = useTransition()

    return ( 
        <div className='bg-gray-300 pt-18 px-6 pb-8 min-h-screen'>
            <section className='max-w-xl md:max-w-3xl mx-auto  bg-white rounded-xl relative z-10 grid  grid-cols-1 sm:grid-cols-2 sm:space-x-4'>
                <div className={`hidden sm:flex flex-col relative z-10 pt-24 items-center gap-5 h-full w-[90%] bg-emerald-500 translate duration-500 p-4 
                     ${transition ? 'translate-x-[131%] rounded-tr-xl rounded-br-xl' : 'translate-x-[0%] rounded-tl-xl rounded-bl-xl'}`}>
                    <h2 className='text-white text-xl sm:text-2xl md:text-3xl font-bold'>{isSignedUp ? 'Hello Friend!' : 'Welcome Back!'}</h2>
                    <p className='text-gray-100 max-w-[260px] mt-1 text-center leading-relaxed'>{isSignedUp ? 'Enter your personal details and start your journey with us' : 'To keep connected with us please log in with your personal info'}</p>
                    {isSignedUp 
                    ? 
                    ( <button  onClick={(e)=>{
                        setTransition(prev => false)
                        setTimeout(()=> setIsSignedUp(!isSignedUp),400) 
                    }}
                    className="text-white border mt-4 border-white cursor-pointer px-12 py-2 w-44 rounded-3xl mx-auto block text-center"> Sign Up </button>  
                    )
                    :
                    ( <button  onClick={(e)=>{
                        setTransition(prev => true)
                        setTimeout(()=> setIsSignedUp(!isSignedUp),400) 
                    }}
                    className="text-white border mt-4 border-white cursor-pointer px-12 py-2 w-44 rounded-3xl mx-auto block text-center"> Sign In </button>  
                    )
                    }
                </div>
                {!isSignedUp ? <SignUp /> : <Login /> } 
            </section>
        </div>
     )
}
 
export default OnboardingLayout;