import React from 'react';
import {useState} from 'react';

let userName='';
function Contact(){
    const [firstName, setfirstName]=useState('');
    const [lastName, setlastName]=useState('');
    const [impression, setImpression]=useState('');
    

    let handleChange1=(event)=>{
        setfirstName(event.target.value);
    };
    let handleChange2=(event)=>{
        setlastName(event.target.value);
    };

    let handleChange3=(event)=>{
        setImpression(event.target.value)
    };

    let handleClick=()=>{

        alert('Thank you ' + firstName)
        this.firstName.value="";
        this.lastName.value="";
        this.impression.value=""
    }
    return(
        <div>
            <h2>Contact</h2>
            <form>
            <input type="text" placeholder="first name" id="fName" onChange={handleChange1}></input>
            <input type="text" placeholder="last name" id="lName" onChange={handleChange2}></input>
            <input type="text" placeholder="best impression" id="impression" onChange={handleChange3}></input>
            <button onClick={handleClick}>Join us!</button>
            </form>
            <p>{firstName} {lastName}'s best impression is {impression}</p>
            <p>1-800-We-React</p>
            <p>Email: info@ReactActors.com</p>
        </div>
    )
}
export default Contact;