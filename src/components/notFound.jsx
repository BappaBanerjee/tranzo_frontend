import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
    const navigate = useNavigate();
    return (
        <>
            <h1>Page Not Found</h1> <br></br>
            <button onClick={() => navigate('/')}> Go to Home Page</button>
        </>
    )
}
export default NotFound;