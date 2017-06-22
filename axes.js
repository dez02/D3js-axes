var dataset = [
                  [ 5,     20 ],
                  [ 480,   90 ],
                  [ 250,   50 ],
                  [ 100,   33 ],
                  [ 330,   95 ],
                  [ 410,   12 ],
                  [ 475,   44 ],
                  [ 25,    67 ],
                  [ 85,    21 ],
                  [ 220,   88 ]
              ];
 var linear = d3.scaleLinear()     
                           .domain([0, d3.max(dataset)])
                           .range([0, 600]);

//Create SVG element
var svgWidth = 520;
var svgHeight = 120;
var padding = 10;


var svg = d3.select("body")
            .append("svg")
            .attr("width", svgWidth)
            .attr("height", svgHeight);

svg.selectAll("circle")
   .data(dataset)
   .enter()
   .append("circle")
   .attr("cx", (d)=> d[0])
   .attr("cy", (d)=> d[1])
   .attr("r", 5)
   .attr("r", (d)=> Math.sqrt(svgHeight - d[1]));


svg.selectAll("text")
   .data(dataset)
   .enter()
   .append("text")
   .text((d)=> d[0] + "," + d[1])
   .attr("x", (d)=> d[0])
   .attr("y", (d)=> d[1])
   .attr("font-family", "sans-serif")
   .attr("font-size", "11px")
   .attr("fill", "red");

var xAxis = d3.axisBottom(linear)
            .scale(linear);
                  
                  
svg.append("g")
   .attr("class", "axis")  //Assign "axis" class
   .attr("transform", "translate(0," + (svgHeight - padding) + ")")
   .call(xAxis);
                
                
   