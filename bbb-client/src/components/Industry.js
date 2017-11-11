import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../style/Industry.css';
import {ControlLabel, FormGroup, FormControl, option} from 'react-bootstrap';

class Industry extends Component{
	 constructor(props){
        super(props);
        this.state = {
            type: ''
        };
    }

	render(){
		return(
			<div className="page">
				<div className="bg">
					<h1 className="location">What is your Business?</h1>
					<div className="container">
						<form>
						<FormGroup controlId="formControlsSelect">
							<FormControl className="drop" componentClass="select" onChange={this.state.type} placeholder="select">
								<option value="select">Restaurant</option>
								<option value="other">Cafe</option>
								<option value="other">Botique</option>
								<option value="other">Other</option>
							</FormControl>
						</FormGroup>
						</form>
						<input className="form-control" type="text" name="search" placeholder="Zip Code"/>
						<button className="btn default" type="button">Search</button>
					</div>
				</div>
			</div>
		);
	}
};

export default Industry;