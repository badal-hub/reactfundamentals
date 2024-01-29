import { useRouteError } from "react-router-dom";
const Error = () => {
    const error = useRouteError();
    console.log("error",error)
    return(
        <div>
            <h1>
                !!!!ooops something wrong happened
            </h1>
            <h1>{error.status} {error.statusText}</h1>
        </div>
    )
}
export default Error