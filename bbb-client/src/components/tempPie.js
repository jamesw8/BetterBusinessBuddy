import React, { Component } from 'react';
import '../style/Dashboard.css';
import PieChart from 'react-simple-pie-chart';	

class Pie extends Component {
	render() {
		return (
			<div>
				<div id="divinfo">
					<div>
						<i className="material-icons thumbsup">thumb_up</i><h1 id="creditinfo">Your <a href="https://goo.gl/EeJMQh" target="_blank">credit score</a> of 706 should qualify you for a bank loan.</h1>
						<i className="material-icons thumbsup">thumb_up</i><h1 id="slowinfo">The <a href="https://goo.gl/8Bqb4r" target="_blank">interest rate</a> (rate at which you need to pay more on top of the loan) may be below average at 3% instead of 5% with your credit score.</h1>
						<h1 id="slowerinfo">Consider an <a href="https://goo.gl/yd8VJn" target="_blank">online search</a> on small business bank loans.</h1>
					</div>
				</div>
				<h1>Operational Costs for the first month</h1>
				<div id="legend">
					<ul>
						<h1>One Time Costs</h1>
						<li><h2><span id="greenTwo">&nbsp;&nbsp;&nbsp;&nbsp;</span> Kitchen Equipment $381,000</h2></li>
						
						<h1>Recurring Costs</h1>
						<li><h2><span id="greenOne">&nbsp;&nbsp;&nbsp;&nbsp;</span> Land/Building/Furniture Costs $25,500</h2></li>
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
