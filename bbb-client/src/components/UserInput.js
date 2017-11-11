import React, { Component } from 'react';

class UserInput extends Component{
	render(){
		return(
	<div className="container text-left">
		<form>
			<div className="form-group row">
				<label for="credit-score" className="col-sm-2 col-form-label">Credit Score</label>
				<div className="col-sm-10">
					<input type="text" name="credit-score" className="form-control" id="credit-score" />
				</div>
			</div>
			<div className="form-group row">
				<label for="income" className="col-sm-2 col-form-label">Income</label>
				<div className="col-sm-10">
					<input type="text" name="income" className="form-control" id="income" />
				</div>
			</div>

			<div className="form-group row">
				<label for="assets" className="col-sm-2 col-form-label">Assets</label>
				<div className="col-sm-10">
					<input type="text" name="assets" className="form-control" id="assets" />
				</div>
			</div>

			<div className="form-group row">
				<label className="col-sm-7 col-form-label">How experienced are you? (1 is the least, 5 is the most)</label>
				<div className="col-sm-5">
					<div className="form-check form-check-inline">
		  				<label className="form-check-label">
		    			<input className="form-check-input" type="radio" name="experience" id="inlineRadio1" value="option1" /> 1
		  				</label>
					</div>
					<div className="form-check form-check-inline">
		  				<label className="form-check-label">
		    			<input className="form-check-input" type="radio" name="experience" id="inlineRadio2" value="option2" /> 2
		  				</label>
					</div>
					<div className="form-check form-check-inline">
		 				<label className="form-check-label">
		    			<input className="form-check-input" type="radio" name="experience" id="inlineRadio3" value="option3" /> 3
		  				</label>
					</div>
					<div className="form-check form-check-inline">
		 				<label className="form-check-label">
		    			<input className="form-check-input" type="radio" name="experience" id="inlineRadio4" value="option4" /> 4
		  				</label>
					</div>
					<div className="form-check form-check-inline">
		 				<label className="form-check-label">
		    			<input className="form-check-input" type="radio" name="experience" id="inlineRadio5" value="option5" /> 5
		  				</label>
					</div>
				</div>
			</div>

			<div className="form-group text-center">
			<input type="submit" className="btn btn-primary" />
			</div>
		</form>
	</div>

		);
	}
};

export default UserInput;