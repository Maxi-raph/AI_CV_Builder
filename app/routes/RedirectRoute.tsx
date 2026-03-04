import { redirect } from "react-router";

export async function loader(){
    return redirect('/sign_up')
}

const RedirectRoute = () => {

    return null
}
 
export default RedirectRoute;