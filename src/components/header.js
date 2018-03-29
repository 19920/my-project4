import React, { Component } from 'react';
import{Link} from "react-router-dom"; 

class Header extends Component {
  render() {
    return (
       <header className = "container-fluid head">
         <Link to="/" className ="nav-brand ">Jean Baptiste Kadahizi</Link>
         <nav className= "nav navbar-static">
    	         <ul className ="nav nav-navbar pull-right">
      		       <li><Link to ={"/home"}>Home</Link></li>
      		       <li><Link to ={"/about"}>About</Link></li>
      		       <li><Link to ={"/contact"}>Contact</Link></li>
      		       <li><Link to ={"/myCV"}>My CV</Link></li>
    	       </ul>
         </nav>
        <img  className="card" id="profile" src ={require ("./myprofile.jpg")}/>


         
      </header>
    );
  }
}

export default Header;	
