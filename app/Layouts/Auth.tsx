import { Outlet } from 'react-router'
import { useSignUp } from '~/Context/signUpContext';


const OnboardingLayout = () => {
    const {isSignedUp, setIsSignedUp} =useSignUp()
    return ( 
        <div className='bg-gray-300 p-6 h-screen'>
            <section className='max-w-2xl mx-auto h-[420px] bg-white rounded-md relative z-10 grid grid-cols-2 gap-4'>
                <div className={`flex flex-col pt-24 items-center gap-6 h-full w-[90%] bg-emerald-400 translate duration-500 p-6 
                     ${isSignedUp ? 'translate-x-95 rounded-tr-md rounded-br-md' : 'translate-x-0 rounded-tl-md rounded-bl-md'}`}>
                    <h2 className='text-white text-3xl font-bold'>Welcome Back!</h2>
                </div>
                <Outlet />
            </section>
        </div>
     );
}
 
export default OnboardingLayout;