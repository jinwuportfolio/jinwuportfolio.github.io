//load data
var funding = [12,21,32,32,31,34,44,42,42,45,45,45];

//tooltip
var tip = d3.tip()
            .attr('class','d3-tip')
            .offset([-10,0])
            .html(function(d) {
                return "$"+d+" million";
            })

// margins and w/h
var margin = {top: 25, right: 25, bottom: 45, left: 50},
    width = 770 - margin.left - margin.right,
    height = 340 - margin.top - margin.bottom;

// scales
var x = d3.scale.ordinal()
            .rangeRoundBands([0,width],.07);

var y = d3.scale.linear()
    .range([height, 0]);

//axes    
var xAxis = d3.svg.axis()
    .scale(x)
    .orient("bottom");

var yAxis = d3.svg.axis()
    .scale(y)
    .tickFormat(function(d) { return "$ "+d + " M"; })
    .orient("left");

// create the SVG
var svg = d3.select("#chart").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
	.attr("id", "funding")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

//call tooltip
svg.call(tip);

// set domains
 x.domain([2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015]);
y.domain([0, d3.max(funding, function(d) { return d; })]).nice();

// draw bars
svg.selectAll(".bar")
      .data(funding)
    .enter().append("rect")
	  .attr("id", function(d,i) { return "bin" + i; })
      .attr("class", "bar")
      .attr("x", function(d,i) { return i * (width / funding.length); })
      .attr("width", x.rangeBand())
	.attr("y", function(d) { return y(d); })
      .attr("height", function(d) { return height - y(d); })
      .style("fill","rgb(249, 77, 0)")
      .style("opacity",0.7)
      .on('mouseover',function(d) {
        tip.show(d);
        d3.select(this).style("opacity",1);
      })
      .on('mouseout',function(d) {
        tip.hide(d);
        d3.select(this).style("opacity",0.7);
      });

// draw x axis
xAxis.tickValues(x.domain().filter(function(d,i) { return !(i % 1); } ));
svg.append("g")
    .attr("class", "x axis")
    .attr("transform", "translate(0," + height + ")")
    .call(xAxis)
  .append("text")
    .attr("x", x("6"))
    .attr("y", 30)
    .attr("dy", ".71em");
    // .text("Year")
    // .style("text-anchor", "middle");

// draw y axis
svg.append("g")
    .attr("class", "y axis")
    .call(yAxis);

// draw the baseline
svg.append("g")
    .attr("class", "baseline")
    .attr("transform", "translate(0,"+ height +")")
  .append("line")
    .attr("x1", -xAxis.tickSize())
    .attr("x2", width)
    .attr("y2", 0);
