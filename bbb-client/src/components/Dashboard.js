import React, { Component } from 'react';

class Dashboard extends Component{
	render(){
		return(
			<div>
				<p>Testing Dashboard Component</p>
			</div>
		);
	}
};

export default Dashboard;

var data = [
	{"days": 1, "loans": 20},
	{"days": 2, "loans": 10},
	{"days": 3, "loans": 15},
	{"days": 4, "loans": 11},
	{"days": 5, "loans": 18},
	{"days": 6, "loans": 23},
	{"days": 7, "loans": 43},
	{"days": 8, "loans": 55},
	{"days": 9, "loans": 21},
	{"days": 10, "loans": 35}];

var width = 800
var height = 600
var color = "orange"
var numOfData = data.length


var container = d3.select("body")
					.append("svg")
					.attr("width", width)
					.attr("height", height)
					.style("border", "1px solid black")

var days = container.selectAll("rect")
					.data(data)
					.enter()
					.append("rect")
					.attr("x", function(d) { return (width/numOfData)*(d.days-1) })
					.attr("y", function(d) { return height-10*d.loans })
					.attr("height", function(d) { return height })
					.attr("width", width/numOfData-5)
					.style("fill", color);

// var xAxisScale = d3.scaleLinear()
// 					.range([0,1000])

// var yAxisScale = d3.scaleLinear()
// 					.range([0,1000]);

// var xScale = d3.axisBottom().scale(xAxisScale);
// var yScale = d3.axisLeft().scale(yAxisScale);

// var xAxisGroup = container.append("g")
// 					.call(xScale)
// 					.attr("transform", "translate(" + 0 + "," + (height-25) + ")");
// var yAxisGroup = container.append("g")
// 					.call(yScale)
// 					.attr("transform", "translate(" + 25 + "," + 0 + ")");
