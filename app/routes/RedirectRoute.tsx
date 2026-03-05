import { redirect } from "react-router";

export async function loader(){
    return redirect('/Auth')
}

const RedirectRoute = () => {

    return null
}
 
export default RedirectRoute;