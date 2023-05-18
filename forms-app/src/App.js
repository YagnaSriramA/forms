import React, {useState} from "react"

function App()
{
    const [formData,setFormData] = useState({
        "firstName": "", "lastName": "", "email" : "", "comments": ""
    })

    console.log(formData)

    function HandleEvent(event)
    {
        setFormData(prevData => {
            return {
                ...prevData,
                [event.target.name]: event.target.value
            }
        })
    }

    return(
        <form>
            <input
            type="text"
            placeholder="First Name"
            name="firstName"
            onChange={HandleEvent}
            value={formData.firstName}
            />

            <input
            type="text"
            placeholder="Last Name"
            name="lastName"
            onChange={HandleEvent}
            value={formData.lastName}
            />

            <input
            type="email"
            placeholder="Email"
            name="email"
            onChange={HandleEvent}
            value={formData.email}
            />

            <textarea 
            placeholder="Type in your comments here"
            name="comments"
            onChange={HandleEvent}
            value={FormData.comments}            
            />
        </form>
        
    )
}

export default App