import { useEffect, useState } from "react"
import { Mail } from "../components/Mail";

export const Inbox=() =>{
    const [mails,setMails] = useState([]);

    const getMailList = async() =>{
            const response = await fetch("https://flipkart-email-mock.vercel.app/");
            const data = await response.json();
            console.log(data);
            setMails(data.list);
    }

    useEffect(()=>{
        getMailList();
    },[])
    return (
        <div>
            Inbox page
            {
                mails.map(mail => <Mail key={mail.id} mail={mail}/>)
            }
        </div>
    )
}