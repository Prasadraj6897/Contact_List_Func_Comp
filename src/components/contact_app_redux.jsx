import React, { useState, useEffect } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBTable, MDBTableBody, MDBTableHead, MDBBtn } from "mdbreact";
import {useDispatch, useSelector} from "react-redux"
import {contact_action } from "../redux_folder/action_reducer_folder/contactAppFolder/action.contact"


let ContactAppREdux = () =>{ 
    // const [contacts, setNewcontacts] = useState(null);
    const usedispatch = useDispatch();

    let contact_list = useSelector((state) =>{
        return state.Contact_root_reducer
    })

    let handleView = () =>{
        console.log("handleView")
        usedispatch(contact_action())
    }

    return(
        <MDBContainer>
            <h1>Contact List Redux</h1>
            <pre>{JSON.stringify({contact_list})}</pre>
            <MDBRow>
                <MDBCol size="6">
                <MDBBtn tag="a" size="sm" floating gradient="purple" onClick = {handleView} >Show Table</MDBBtn>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    )

}
export default ContactAppREdux;