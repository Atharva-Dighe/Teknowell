import React, { useState } from "react";
import './Home.css';
function Home() 
{
    const [data, setData] = useState("Hello");
    function f1() 
    {
        setData("Good Morning");
    }
    return (

        <div>
            <h1>Welcome to Home Page</h1>
            <h1 className="h1">{data}</h1>
            <button onClick={f1}>Change</button>
            {/* <p><Link to ="/">Home</Link></p>
            <p><Link to ="/count">Count</Link></p> */}
        </div>

    )
}

export default Home;