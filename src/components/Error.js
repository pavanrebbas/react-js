import { useRouteError } from "react-router-dom";

const Error = () => {

    const Error = useRouteError()
    // console.log(Error)

    return (
        <div className="container py-5">
            <h2>OOpps</h2>
            <h3>{Error.status} {Error.statusText}</h3>
            <h4>{Error.data}</h4>
        </div>
    )
};

export default Error;