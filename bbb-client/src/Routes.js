import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Industry from './components/Industry';
import Competition from './components/Competition';
import Dashboard from './components/Dashboard';
import UserInput from './components/UserInput';
import Test from './components/Test';


class Routes extends Component{
	render(){
		return(
			<main>
				<Switch>
					<Route exact path="/" component={Home}/>
					<Route path="/home" component={Home}/>
					<Route path="/about" component={About}/>
					<Route path="/contact" component={Contact}/>
					<Route path="/industry" component={Industry}/>
					<Route path="/competition" component={Competition}/>
					<Route path="/dashboard" component={Dashboard}/>
					<Route path="/UserInput" component={UserInput}/>
					<Route path="/test" component={Test}/>
				</Switch>
			</main>
		); 
	}
};

export default Routes;