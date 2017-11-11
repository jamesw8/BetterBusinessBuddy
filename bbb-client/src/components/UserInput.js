import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class UserInput extends Component{
	render(){
		return(
	<div className="container text-left">
		<h1 className="location text-center">Enter Financial Information</h1>
		<div className="bg">
			<form>
				<div className="form-group row">
					<div className="container">
						<label for="credit-score" className="col-sm-2 col-form-label">Credit Score</label>
						<input type="text" name="credit-score" className="form-control" id="credit-score" />
					</div>
				</div>
				<div className="form-group row">
					<div className="container">
						<label for="income" className="col-sm-2 col-form-label">Income</label>
						<input type="text" name="income" className="form-control" id="income" />
					</div>
				</div>
				<div className="form-group row">
					<div className="container">
						<label for="assets" className="col-sm-2 col-form-label">Assets</label>
						<input type="text" name="assets" className="form-control" id="assets" />
					</div>
				</div>
				<div className="form-group row">
					<div className="container">
						<label for="available-funds" className="col-sm-2 col-form-label">Available Funds</label>
						<input type="text" name="available-funds" className="form-control" id="available-funds" placeholder="How much do you have available for paying off a loan?" />
					</div>
				</div>

				<div className="form-group row">
					<label className="col-sm-6 col-form-label">How experienced are you? (1 is the least, 5 is the most)</label>
					<div className="">
		  				<label className="form-check-label col-sm-1">
		    			<input className="form-check-input" type="radio" name="experience" id="inlineRadio1" value="option1" /> 1
		  				</label>
		  				<label className="form-check-label col-sm-1">
		    			<input className="form-check-input" type="radio" name="experience" id="inlineRadio2" value="option2" /> 2
		  				</label>
		 				<label className="form-check-label col-sm-1">
		    			<input className="form-check-input" type="radio" name="experience" id="inlineRadio3" value="option3" /> 3
		  				</label>
		 				<label className="form-check-label col-sm-1">
		    			<input className="form-check-input" type="radio" name="experience" id="inlineRadio4" value="option4" /> 4
		  				</label>
		 				<label className="form-check-label col-sm-1">
		    			<input className="form-check-input" type="radio" name="experience" id="inlineRadio5" value="option5" /> 5
		  				</label>
					</div>
				</div>

				<div className="form-group text-center">
				<Link to="/Pie"><input type="submit" className="btn btn-primary" /></Link>
				</div>
			</form>
		</div>
	</div>

		);
	}
};

export default UserInput;