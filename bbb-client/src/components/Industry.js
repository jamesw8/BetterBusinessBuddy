import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../style/Industry.css';
import {ControlLabel, FormGroup, FormControl, option} from 'react-bootstrap';



function City(props) {
  return (
    <div>
    	<div className="">
    		<div className="col-md-6">
				<div className="panel panel-default">
					<div className="panel-heading">
						{props.data.name}
					</div>
					<div className="panel-body">
						<ul>
							<li>Category: {props.data.categories[0].title}</li>
							<li>Location: ({props.data.location.address1}, {props.data.location.city}, {props.data.location.state})</li>
							<li>Yelp Rating: {props.data.rating} from {props.data.review_count} users</li>
							<li>Pricing: {props.data.price}</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
    </div>);
}

function ZipSearchField(props) {
  return (
    <div className="search">
      <form className="form-inline">
        <label className="form-control-static">Zip Code:</label>
        <input className="form-control" type="text" placeholder="Try 10016" onChange={props.handleClick} />
      </form>
    </div>);
}


class Industry extends Component {
  constructor(props) {
    super();
    this.state = {
      zipCode: "",
      cities: []
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(i) {
    let zip = i.target.value;
    this.setState({
      zipCode: zip
    });

    if (zip.length === 5) {
      fetch("http://bbbackend-api.herokuapp.com/yelp/" + zip).then((response) => {
        return response.text();
      }).then((json) => {
        const json2 = JSON.parse(json);
        const cityComps = json2.map((city) => {return <City data={city} />;});
        this.setState({
          cities: cityComps
        });
      });
    }
  }


	render(){
		return(
			<div className="page">
				<div className="bg">
					<h1 className="location">What is your Business?</h1>
					<div className="container">
						<form>
							<FormGroup controlId="formControlsSelect">
								<FormControl className="drop" componentClass="select" placeholder="select">
									<option value="select">Restaurant</option>
									<option value="other">Cafe</option>
									<option value="other">Botique</option>
									<option value="other">Other</option>
								</FormControl>
							</FormGroup>
						</form>
						<ZipSearchField id="zip-style" handleClick={this.handleClick} />
						<Link id="submit-button" to="/UserInput"><button className="btn default" type="button">Next</button></Link>
				        <div>
				        	{this.state.cities}
				        </div>
					</div>
				</div>
			</div>
		);
	}
};

export default Industry;