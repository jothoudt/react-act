import React from 'react';

function Contact(){
    return(
        <div>
            <h2>Contact</h2>
            <input type="text" placeholder="first name" id="firstname"></input>
            <input type="text" placeholder="last name" id="lastname"></input>
            <input type="text" placeholder="best impression" id="impression"></input>
            <button>Join us!</button>
            <p>1-800-We-React</p>
            <p>Email: info@ReactActors.com</p>
        </div>
    )
}
export default Contact;