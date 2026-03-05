import { Outlet, useLocation } from 'react-router'
import { useSignUp } from '~/Context/signUpContext';


const OnboardingLayout = () => {
    const {isSignedUp, setIsSignedUp} =useSignUp()
    const location = useLocation()
    if(location.pathname === '/login') setIsSignedUp(prev => true)
    return ( 
        <div className='bg-gray-300 p-6 min-h-screen'>
            <section className='max-w-3xl mx-auto  bg-white rounded-md relative z-10 grid grid-cols-2 gap-4'>
                <div className={`flex flex-col relative z-10 pt-24 items-center gap-6 h-full w-[90%] bg-emerald-400 translate duration-500 p-4 
                     ${isSignedUp ? 'translate-x-[129%] rounded-tr-md rounded-br-md' : 'translate-x-[0%] rounded-tl-md rounded-bl-md'}`}>
                    <h2 className='text-white text-xl sm:text-2xl md:text-3xl font-bold'>Welcome Back!</h2>
                </div>
                <Outlet />
            </section>
        </div>
     )
}
 
export default OnboardingLayout;