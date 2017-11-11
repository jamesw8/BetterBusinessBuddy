import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component{
	render(){
		return(
			<div>
				<nav className="navbar navbar-toggleable-md navbar-light bg-faded">
				  <Link className="navbar-brand" to="/">Better Business Buddy</Link>
				  <div className="" id="navbarNav">
				    <ul className="navbar-nav">
				      <li className="nav-item">
				        <Link className="nav-link" to="/about">About</Link>
				      </li>
				      <li className="nav-item">
				        <Link className="nav-link" to="/contact">Contact</Link>
				      </li>
				    </ul>
				  </div>
				</nav>
			</div>
		);
	}
};

export default Header;