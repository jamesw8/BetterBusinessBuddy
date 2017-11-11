import React, { Component } from 'react';
import '../style/Dashboard.css';
import PieChart from 'react-simple-pie-chart';	

class Pie extends Component {
	render() {
		return (
			<div>
				<div id="divinfo">
					<div id="userinfo">
						<h1>Your credit score 706 should qualify you for a bank loan.</h1>
						<h1>Consider an online search on small business bank loans.</h1>
					</div>
				</div>
				<h1>Operational Costs for the first month</h1>
				<div id="legend">
					<ul>
						<li><h2><span id="greenOne">&nbsp;&nbsp;&nbsp;&nbsp;</span> Land/Building Costs $25,500</h2></li>
						<li><h2><span id="greenTwo">&nbsp;&nbsp;&nbsp;&nbsp;</span> Kitchen Equipment $381,000</h2></li>
						<li><h2><span id="greenThree">&nbsp;&nbsp;&nbsp;&nbsp;</span> Food Supplies $8,100</h2></li>
						<li><h2><span id="greenFour">&nbsp;&nbsp;&nbsp;&nbsp;</span> Labor $9,000</h2></li>
						<li><h2><span id="greenFive">&nbsp;&nbsp;&nbsp;&nbsp;</span> Advertising/Marketing $44,500</h2></li>
					</ul>
				</div>
				<div id="pie" className="container">
					<div>
						<h2>Operational Costs $455,100</h2>
					</div>
					<PieChart
					slices={[
						{
							color: '#596C56',
							value: 12500,
						},
						{
							color: '#435D36',
							value: 381000,
						},
						{
							color: '#78AB46',
							value: 8100,
						},
						{
							color: '#A9C9A4',
							value: 9000,
						},
						{
							color: '#78A489',
							value: 44500,
						},
						]}
					/>
				</div>
			</div>
			);
	}
}

export default Pie;
