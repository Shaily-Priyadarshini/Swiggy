import { useRouteError } from "react-router-dom";
const Error=()=>{
    const err=useRouteError();
    return(
        <div>
            <h1>I am error</h1>
            <h2>{err.status}</h2>
        </div>
    )
}
export default Error;