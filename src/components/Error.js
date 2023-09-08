import { useRouteError } from "react-router-dom";

const Error = () => {

    const Error = useRouteError()
    console.log(Error)

    return (
        <div className="container py-5">
            <h2>OOpps</h2>
            <p>{Error.status} {Error.statusText}</p>
        </div>
    )
};

export default Error;