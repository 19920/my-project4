import React, { Component } from 'react';

class HomePage extends Component {
  render() {
    return (
      <div className ="container-fluid">
         <div className ="HomePage">
           <h1> 
           Hi there ! 
           </h1>
         </div>
         <div className ="container-fluid">
            <p>
             I am happy to have you here and hope you will know more about me after visiting this site.
             </p>
            <p> 
            I'm a Full stack web developer based in Sweden, developing web applications by using different languages and frameworks,you can know more 
            about me by clicking on  MY CV  on top corn .
             </p>
         </div>

         <div className ="container-fluid">
           <button className ="btn btn-warning"><a href="./Contact">Get In Touch</a></button>
         </div>

         <div className="container">
           <h1>My old projects</h1>
         </div>
      <div className ="container-fluid">
         <div className ="row">
	         <div className="panel">
		       <img className="img-thumbnail" src ={require ("./groove3.jpg")}/>
		       <h3>Track your fitness habits App</h3>
	         </div>
	         
	         
	         <div className="panel">
		        <img className="img-thumbnail" src ={require ("./estate.jpeg")}/>
		         <h3>Real estate agency website by WordPress</h3>
	         </div>
	         
	         <div className="panel">
		         <img className="img-thumbnail" src ={require ("./festival.jpg")}/>
		         <h3>brooklyn film festval.com</h3>
	         </div>
           <div className="panel">
             <img className="img-thumbnail" src ={require ("./portfolio.jpeg")}/>
             <h3>Build your portfolio site using React</h3>
             </div>
	         
         </div>
         </div>
        
      </div>


    );
  }
}

setInterval(HomePage, 1000);
export default HomePage;
	