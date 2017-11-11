import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../style/Home.css';

class Home extends Component {
	render(){
		return(
			<div>
				<div id="colors" className="container-fluid animate">
					<div id="header-text" className="text-center">	
						<img id="logo-bbb" src={require('../style/BBB.png')}/>
						<h2>Better Business Buddy</h2>
						<p>Making Business Accessable to Everyone</p>
						<hr />
						<Link to="/industry"> <button className="btn btn-success btn-lg">Get Started</button></Link>
					</div>
				</div>

				<div className="container">
					<div className="row texts">
						<div className="col col-xm-12 col-md-4">
							<i className="material-icons">location_on</i>
							<h3>Find Your Location</h3>
							<p>Enter your future business location and we will figure out how you would fare with the competition.</p>
						</div>
						<div className="col col-xm-12 col-md-4">
							<i className="material-icons">trending_up</i>
							<h3>Get Insights</h3>
							<p>Our tool will ask for your credit score and other information to figure out what is the best for you.</p>
						</div>
						<div className="col col-xm-12 col-md-4">
							<i className="material-icons">poll</i>
							<h3>Plan Ahead</h3>
							<p>With our interactive and easy-to-understand user interface, we can help save money with your future expenses.</p>
						</div>
					</div>
				</div>

				<div id="footer" className="container-fluid">
					<div className="text-center">
						<p>Copyright Better Business Buddy 2017</p>
					</div>
				</div>
			</div>
		);
	}
};

export default Home;