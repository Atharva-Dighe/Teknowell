import React, { useState } from 'react'

function FormHandling() 
{
    const [userName,setUserName]=useState("")
    const[password,setPassword]=useState("")
    const[formdata,setFormData]=useState([])
    function handleForm(e)
    {
        e.preventdefault()
        alert("Form Submitted Successfully");
        setFormData
    }
    
  return(
    <div>
        <form>
            Enter Name: <input type="text" /><br /><br />
            Enter Password: <input type="password" /><br /><br />
            <input type="submit" />
        </form>
    </div>
  )
}

export default FormHandling