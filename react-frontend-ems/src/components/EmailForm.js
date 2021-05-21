import React, { Component } from 'react';
import emailjs from "emailjs-com";

export default function ContactUs() {

    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('gmail', 'template_y81omic', e.target, 'user_ymWC16QG0r318Q0EBpdGS')
          .then((result) => {
              console.log(result.text);
              console.log("email");
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()
      }
  
    return (
            <form className="contact-form" onSubmit={sendEmail}>
                <div>
                    <th> First Name: </th>
                    <input placeholder = "First Name" name = "firstName" className = "form-control"/>
            
                    <th> Last Name: </th>
                    <input placeholder = "Last Name" name = "lastName" className = "form-control"/>

                    <th> Email </th>
                    <input placeholder = "Email Id" name = "emailId" className = "form-control"/>

                    <th> Date </th>
                    <input placeholder = "Shift Date" name = "date" className = "form-control"/>
                </div>
                <input type="submit" value="Send" />
            </form>
    );
  }