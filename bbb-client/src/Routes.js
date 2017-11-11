import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

class Routes extends Component{
	render(){
		return(
			<main>
				<Switch>
					<Route exact path="/" component={Home}/>
					<Route path="/Home" component={Home}/>
					<Route path="/about" component={About}/>
					<Route path="/contact" component={Contact}/>
				</Switch>
			</main>
		); 
	}
};

export default Routes;