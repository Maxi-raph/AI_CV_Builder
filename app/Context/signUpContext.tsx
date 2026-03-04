import { createContext, useContext, useState, type Dispatch, type ReactNode, type SetStateAction } from "react";

 type SignUp ={
    isSignedUp:boolean
    setIsSignedUp: Dispatch<SetStateAction<boolean>>
}


const signUpContext = createContext<SignUp | undefined>(undefined)


export const SignUpProvider = ({children}:{children:ReactNode})=>{
      const [isSignedUp, setIsSignedUp] = useState(false)
    
      return <signUpContext.Provider value={{isSignedUp, setIsSignedUp}}>
        {children}
      </signUpContext.Provider>
}

export const useSignUp = ()=>{
    const context = useContext(signUpContext)

    if(!context) throw new Error('SignUpProvider must be provided above the App component')
    
    return context
}