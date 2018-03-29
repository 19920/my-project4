import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter , Router, Link, Route,hashHistory} from 'react-router-dom';
import Header from "./components/header.js";
import Footer from "./components/footer.js";
import Home from "./components/Home.js";
import MyCV from "./components/myCV.js";
import About from "./components/about.js";
import Touch from "./components/touch.js"
import Contact from "./components/Contact.js"



ReactDOM.render(
	<BrowserRouter>
	  <div className="container-fluid bg-dark text-light">
	       <div>
			 <Header/>
			</div>
	        <Route>
	          <div>
			       <Route path='/Home' component={Home} />
				   <Route path='/about' component={About} />
				   <Route path='/contact' component={Contact} />
				   <Route path='/myCV' component={MyCV} />
			   </div>
		    </Route>
			
	    </div>
	    </BrowserRouter>, document.getElementById('header'));
registerServiceWorker();
