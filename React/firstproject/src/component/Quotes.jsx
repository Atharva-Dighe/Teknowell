import React, { useState } from 'react'

function Quotes() 
{
    const[data,setData]=useState("Old is Gold")
    function f1()
    {   
        // alert("hello");
        let arr=['Time is Money','Service to Man is Service to God','Every Cloud has a Silver Lining'];
        let index;
        index=Math.floor(Math.random()*arr.length);
        console.log(index);
        setData(arr[index]);
        // for(let i=0;i<arr.length;i++)
        // {
        //     setData(arr[i]);
        // }
    }
    return (
        <div>
            <h1>{data}</h1>
            <button onClick={f1}>Click for Change</button>
        </div>
    )
}

export default Quotes