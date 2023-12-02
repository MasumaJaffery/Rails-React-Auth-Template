import React from "react";
import Logout from "../components/logout";

const Homepage = () => {
    return (
        <div className='flex flex-col items-center justify-center'>
         <h1 className="p-5">Welcome to Authentication Template!</h1>
         <h2 className="p-5">Happy Coding! 	&#128512;</h2>
         <Logout />
        </div>
    )
}

export default Homepage;