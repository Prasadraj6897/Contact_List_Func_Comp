import React,{useEffect, useState} from "react";
import { MDBContainer, MDBRow, MDBCol, MDBTable, MDBTableBody, MDBTableHead, MDBBtn } from "mdbreact";


let ContactList = (props) => {
    
    let handleView = (contact) =>{
        // console.log("contactData", contact)
        console.log("cas")
        props.putData(contact);
    }
    let getData = (contact) => {
        console.log("contactData", contact)
        props.putData(contact);
    }
      
    return (
        <MDBContainer>
            <h1>Contact List</h1>
            {/* <pre>{JSON.stringify(props.contactData)}</pre> */}
            <MDBRow>
                <MDBCol size="8">
                    <MDBTable striped hover>
                        <MDBTableHead color="primary-color" textWhite>
                            <tr>
                                <th>ID</th>
                                <th>NAME</th>
                                <th>AGE</th>
                                <th>EMAIL</th>
                                <th>Button</th>
                            </tr>
                        </MDBTableHead>
                        <MDBTableBody>
                            {props.contactData != null ? (
                                <>
                                {props.contactData.map((contact, id) => {
                                    return ( 
                                        <tr key = {id} onMouseOver={getData}>
                                            <td>{contact.login.uuid}</td>
                                            <td>{contact.name.last}</td>
                                            <td>{contact.dob.age}</td>
                                            <td>{contact.email}</td>
                                            <td>
                                            <MDBBtn tag="a" size="sm" floating gradient="purple" onClick = {handleView(contact)} >view</MDBBtn>
                                                
                                            </td>
                                        </tr>
                                    )
                                })

                                }
                                </>
                                ) : null}
                        </MDBTableBody>
                    </MDBTable>       
                </MDBCol>
            </MDBRow>
        </MDBContainer>
       
    )
}

export default ContactList;