const svg = d3.select("svg")
const width = +svg.attr("width");
const height = +svg.attr("height");
const circleRad = 300;
const innerCircleRad = 300;
//i
const initialIRad = 23;
const initialIOffset = 80;
const characterOffsetX = 50;
const characterOffsetY = 100;
const characterOffsetYExtra = 130;
var getColor = () => Math.random() * 255;
var  color = `rgb(${getColor()},${getColor()},${getColor()})`
//animation
const animationTime = 2000;
var time = 0;
const timeInterval = setInterval(() => {
  color = `rgb(${getColor()},${getColor()},${getColor()})`
  time++;
}, 1000);

const g = svg
  .append("g")
  .attr('stroke-linejoin','round')
  .attr("transform", `translate(${width / 2},${height / 2})`);
  g.transition().duration(0)
    .attr("stroke", `rgb(${getColor()},${getColor()},${getColor()})`)
    .attr("stroke", `${color}`)
  .transition().duration(1000)
    .attr("stroke-width", 10)
    .attr("stroke", `rgb(${getColor()},${getColor()},${getColor()})`)
  .transition().duration(2000)
    .attr("stroke-width", 15)
    .attr("stroke", `rgb(${getColor()},${getColor()},${getColor()})`)
  .transition().duration(3000)
    .attr("stroke-width", 40)
    .attr("stroke", `rgb(${getColor()},${getColor()},${getColor()})`)
  .transition().duration(4000)
    .attr("stroke-width", 10)
    .attr("stroke", `rgb(${getColor()},${getColor()},${getColor()})`)
     
    

const innerCircle = g.append("path").attr(
  "d",
  d3.arc()({
    innerRadius: innerCircleRad,
    outerRadius: circleRad,
    startAngle: 0,
    endAngle: Math.PI * 2,
  })
);

const outerCircle = g.append("path").attr(
  "d",
  d3.arc()({
    innerRadius: innerCircleRad + 50,
    outerRadius: circleRad + 50,
    startAngle: 0,
    endAngle: Math.PI * 2,
  })
);

const lettersGroup = g.append('g');
lettersGroup.transition().duration(1000)
  .attr('transform','scale(.8)')
  .attr("stroke-width", 15)
    .transition().duration(2000)
      .attr('transform','scale(1)')
      .attr("stroke-width", 15)

// .attr("stroke", `rgb(${getColor()},${getColor()},${getColor()})`)

const initialLgroup = lettersGroup.append('g')
    .attr('fill','none')
    initialLgroup
    .transition().duration(animationTime/2)
      .attr('transform',`scale(1.2)`)
    .transition().duration(animationTime/2)
      .attr('transform',`scale(1)`)
    const initialL = initialLgroup.append('path')
        .attr('d',
        `M-${circleRad - characterOffsetX} -${characterOffsetY} 
         L-${circleRad - characterOffsetX} ${characterOffsetYExtra}
         L-${characterOffsetX} ${characterOffsetYExtra}
         M${circleRad - characterOffsetX} ${characterOffsetYExtra}
         L${100} ${characterOffsetYExtra}
        `)

        //  M${circleRad - characterOffsetX} ${characterOffsetY} L-${circleRad - characterOffsetX} ${characterOffsetY}
const initialEgroup = lettersGroup.append('g')
    // .attr("stroke-width", 10)
    .attr('transform','translate(-100)')
    const initialE = initialEgroup.append('path')
    .attr(
    'd',
    d3.arc()({
        innerRadius: 99,
        outerRadius: 100,
        startAngle: Math.PI,
        endAngle: Math.PI * 2,
    })
    );
    const initialELine = initialEgroup.append("path")
    .attr('d','M0 0 L-100 0');
    
const initialMgroup = lettersGroup.append('g')
initialMgroup
.attr('fill','none')
.transition().duration(animationTime/2)
.attr('transform',`scale(.8)`)
.transition().duration(animationTime)
     .attr('transform',`scale(1)`)
    // .attr("stroke-width", 15)
    const initialM = initialMgroup.append('path')
            .attr('d',
            `M${-characterOffsetX} ${characterOffsetY} L${-characterOffsetX} ${-characterOffsetY}
            L${characterOffsetX/2} ${characterOffsetY/2}
            L${characterOffsetX *2} ${-characterOffsetY}
            L${characterOffsetX * 2} ${characterOffsetY}
            `)

const Igroup = lettersGroup.append("g")
//   .attr("fill", "white")
        const firstDot = Igroup.append("circle")
        .attr("r", initialIRad)
        .attr("cx", circleRad - 2 * initialIOffset + 10)
        .attr("cy", initialIOffset)
            // .transition().duration(1)
            // .attr('cy',initialIOffset)
            .transition().duration(animationTime)
            .attr('cy',-initialIOffset)

        const SecondIDot = Igroup.append("circle")
        .attr("r", initialIRad)
        .attr("cx", circleRad - initialIOffset)
        .attr("cy", -initialIOffset)
            .transition().duration(animationTime)
            .attr('cy',initialIOffset)
            .transition().duration(animationTime)
            .attr('cy',-initialIOffset)
        const firstI = Igroup.append("path")
            .attr("d",
            `M${circleRad - initialIOffset} -${initialIRad} L${circleRad - initialIOffset} ${characterOffsetY} 
             M${circleRad - 2 * initialIOffset} -${initialIRad} L${circleRad - 2 * initialIOffset} ${characterOffsetY}`)
            .transition().duration(0)
                .attr("d",
                `M${circleRad } -${initialIRad} L${circleRad } ${characterOffsetY} 
                 M${circleRad - 2} -${initialIRad} L${circleRad - 2 } ${characterOffsetY}`)
            .transition().duration(animationTime * 4)
                .attr("d",
                `M${circleRad - initialIOffset} -${initialIRad} L${circleRad - initialIOffset} ${characterOffsetY} 
                 M${circleRad - 2 * initialIOffset +10} -${initialIRad} L${circleRad - 2 * initialIOffset +10} ${characterOffsetY}`)
