// import { MDBContainer} from "mdbreact";
import './contactapp.css';
import axios from "axios";
import ContactList from "./contactList"
import React, { useState, useEffect } from "react";
// import ContactCard from "./contact_card";



let ContactApp = () =>{
    const [contacts, setNewcontacts] = useState(null);
    const [Error, setError] = useState("");
    const [Contact, selectedContact] = useState(null);

    useEffect(() => {
        axios
        .get(
          "https://gist.githubusercontent.com/narasimhareddyprostack/7e344f346f47bc53a889d78b5258d0c9/raw/56d531cb936d9c79e2417e5d0e5d8c9c876800f2/contactlist"
        ) .then((response) => {
            setNewcontacts(response.data)
            // console.log(contacts);
          })
          .catch((err) => {
            setError(err)
          });


    })
    let PutData = (data) =>{
      
      
      selectedContact(data)
      console.log("Putdata", data);
    }

    return (
        <div>
            <h1>Contact App</h1>
            {/* <pre>{JSON.stringify(Contact)}</pre> */}
                <ContactList contactData={contacts}
                putData={PutData}/>

                {/* <ContactCard selectedContact={selectedContact} /> */}

        </div>
       
    )

}

export default ContactApp;