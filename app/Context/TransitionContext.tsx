import { createContext, useContext, useState, type Dispatch, type ReactNode, type SetStateAction } from "react";

 type Transition ={
    transition:boolean
    setTransition: Dispatch<SetStateAction<boolean>>
}


const transitionContext = createContext<Transition | undefined>(undefined)


export const TransitionProvider = ({children}:{children:ReactNode})=>{
      const [transition, setTransition] = useState(false)
    
      return <transitionContext.Provider value={{transition, setTransition}}>
        {children}
      </transitionContext.Provider>
}

export const useTransition = ()=>{
    const context = useContext(transitionContext)

    if(!context) throw new Error('TransitionProvider must be provided above the App component')
    
    return context
}