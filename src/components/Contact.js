import React, { Component } from 'react';
import{Link} from "react-router-dom";
import{BrowserRouter} from "react-router-dom"; 
class Contact extends Component {
  render() {
    return (
    	<div  className ="container-fluid" id ="about">
    	<h4 >Contact Me</h4>
    	<form className ="form-control">
    	    
	        <div className ="form-group">
		        <label>Full name </label>
		        <p><input type ="text" name="name"></input></p>
	        </div>
	        <div className="form-group">
		        <label>Your Email</label>
		        <p><input type="text" name="Email"></input></p>
	        </div>
         <div className ="form-group">
	        <label>Message </label>
	        <p><input type ="textArea" name ="Message"></input></p>
         </div>
         <button className ="btn btn-primary">Send</button>
        </form>

        <div className ="container-fluid" >
              <h1>My Full Address:</h1>
              <address className ="text-center">
				<p><strong>Norrtullsgatan  48</strong></p>
				<p><strong>826 37 Söderhamn</strong></p>
				<p><strong>Sweden</strong></p>
				<p><strong>Telefon, mobil: 073 – 0923388</strong></p>
				<p><strong>Email :jbatgoal@yahoo.fr</strong></p>
				</address>
			</div>
        </div>

    );
  }
}

export default Contact;	