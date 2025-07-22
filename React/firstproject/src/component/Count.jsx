import React from "react";
function Count()
{
    const[data,setData]=useState(0)
    return
    (
        <div>
            <button>+</button>
            <h1>{data}</h1>
            <button>-</button>
        </div>
    )
}
export default Count