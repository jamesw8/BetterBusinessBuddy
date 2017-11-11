import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../style/Header.css';

class Header extends Component{
	render(){
		return(
			<div id="navbar-style">
				<nav className="navbar nav-custom-style">
				  	<div className="">
					  	<Link className="navbar-brand" to="/">Better Business Buddy</Link>
				    </div>
				</nav>
			</div>
		);
	}
};

export default Header;