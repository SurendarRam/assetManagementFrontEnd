import React, { useEffect } from "react";
import * as am5 from "@amcharts/amcharts5";
import * as am5flow from "@amcharts/amcharts5/flow";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
import imgss from './images/20519213.jpg';
import img1 from './images/wp2446263.webp'
import img2 from './images/th.jfif'
import img3 from './images/inv.jfif'
import img4 from './images/startup.jpg'
import img5 from './images/pro.jfif'
import img6 from './images/dev.webp'
import img7 from './images/outt.jfif'

const SankeyChart = () => {
  useEffect(() => {
    // Create a root element
    var root = am5.Root.new("chartdiv");

    // Set themes
    root.setThemes([
      am5themes_Animated.new(root)
    ]);

    // Create a Sankey diagram
    var series = root.container.children.push(am5flow.Sankey.new(root, {
        sourceIdField: "from",
        targetIdField: "to",
        valueField: "value",
        nodeWidth: 180,
        // nodePadding: 50
      }));

    series.nodes.get("colors").set("step", 2);

series.nodes.labels.template.set("paddingLeft", 20);

    // Add images to nodes
   series.nodes.nodes.template.setup = function(node) {
  var picture = node.children.push(am5.Picture.new(root, {
    width: 50,
    height: 50,
    y: am5.p50,
    x: am5.p50,
    centerY: am5.p50,
    centerX: am5.p50
  }));

  node.events.on("dataitemchanged", function(e) {
    var node = e.target;
    var dataItem = node.dataItem;
    if(dataItem) {
      picture.set("src", dataItem.dataContext.src);
      console.log("dataitemm", dataItem.dataContext.src)
    }
  });
}


series.nodes.data.setAll([
  { id: "Finance", src: img1 },
  { id: "Sales", src: img2 },
  { id: "Investment", src: img3 },
  { id: "Startup", src: img4 },
  { id: "Project", src: img5 },
  { id: "Development", src: img6 },
  { id: "Outsource", src: img7 },
//   { id: "I", src: "https://www.amcharts.com/wp-content/uploads/flags/estonia.svg" },
//   { id: "J", src: "https://www.amcharts.com/wp-content/uploads/flags/italy.svg" }
])
    // Set data for nodes
    // 
    
    // Set data for links
    series.data.setAll([
        { from: "Finance", to: "Sales", value: 0.5,},
          { from: "Finance", to: "Investment", value: 1},
          { from: "Finance", to: "Startup", value: 0.5 },
          { from: "Sales", to: "Project", value: 1 },
          { from: "Sales", to: "Development", value: 1 },
          { from: "Investment", to: "Project", value: 2 },
          { from: "Startup", to: "Development", value: 1 },
          { from: "Startup", to: "Outsource", value: 2 },    
    ]);
//style
// console.log("sankeyEvents",series.nodes.nodes.template.events);
// console.log("Node clicked:",series.nodes.nodes.template.set)
    
    // Execute custom code here

series.nodes.rectangles.template.setAll({
    cornerRadiusTL: 20,
    cornerRadiusTR: 20,
    cornerRadiusBL: 20,
    cornerRadiusBR: 20,
  });
  series.nodes.nodes.template.set("draggable", false);
//   series.nodes.nodes.template.set("interactive", false);
 
series.nodes.labels.template.setAll({
    x: am5.percent(50),
    centerX: am5.percent(50),
    y: am5.percent(75),
    centerY: am5.percent(25),   
  });
  series.links.template.setAll({
   
    controlPointDistance: 0.4,
    tooltipText: "",
  });
  
    // Make stuff animate on load
    series.appear(1000, 100);

    return () => {
      root.dispose();
    };
  }, []);

  return (
    <div id="chartdiv" style={{ width: "100%", height: "500px" }}></div>
  );
};

export default SankeyChart;
////////////////////////////////////////////////////////////////////////////////////////////////////////v4
// import React from 'react'
// import * as am4core from '@amcharts/amcharts4/core';
// import * as am4charts from '@amcharts/amcharts4/charts';
// import am4themes_animated from "@amcharts/amcharts4/themes/animated";
// import am4themes_material from "@amcharts/amcharts4/themes/material";
// import './SankeyChart.css';
// const SankeyChart = () => {
//     am4core.ready(function() {

//         // Themes begin
//         am4core.useTheme(am4themes_animated);
//         am4core.useTheme(am4themes_material);
//         // Themes end
        
//         var chart = am4core.create("chartdiv", am4charts.SankeyDiagram);
//         chart.hiddenState.properties.opacity = 0; // this creates initial fade-in
       
//         chart.data = [
//             // { from: "D", width: 30, offset: -30 },
//             // { from: "C", width: 40, offset: 40 },
//           { from: "Finance\n$1000", to: "Sales", value: 0.5,},
//           { from: "Finance\n$1000", to: "Investment", value: 1},
//           { from: "Finance\n$1000", to: "Startup", value: 0.5 },
//           { from: "Sales", to: "Project", value: 1 },
//           { from: "Sales", to: "Development", value: 1 },
//           { from: "Investment", to: "Project", value: 2 },
//           { from: "Startup", to: "Development", value: 1 },
//           { from: "Startup", to: "Outsource", value: 2 },    
//         //   { from: "G", to: "J", value: 1 },
//         //   { from: "I", to: "J", value: 1 },
//         //   { from: "H", to: "J", value: 1 }    
//         ];
        
//         let hoverState = chart.links.template.states.create("hover");
//         hoverState.properties.fillOpacity = 0.6;
        
//         chart.dataFields.fromName = "from";
//         chart.dataFields.toName = "to";
//         chart.dataFields.value = "value";
        
//         // for right-most label to fit
//         chart.paddingRight = 30;
//         chart.paddingLeft = 30;
//         // make nodes draggable
//         var nodeTemplate = chart.nodes.template;
//         // nodeTemplate.inert = true;
//         // nodeTemplate.draggable = true;
//         nodeTemplate.padding=0;
//         nodeTemplate.readerTitle = "Drag me!";
//         // nodeTemplate.showSystemTooltip = true;
//         nodeTemplate.width = 150;
//         nodeTemplate.height = 70;
//         nodeTemplate.contentAlign='center'

//         nodeTemplate.stroke = am4core.color("#fff");
//         nodeTemplate.strokeWidth = 2;
//         nodeTemplate.nameLabel.locationX = 0.2;
//         nodeTemplate.nameLabel.label.fill = am4core.color("#fff");
//         nodeTemplate.nameLabel.label.fontWeight = "bold";
//         nodeTemplate.className = "custom-node";        // nodeTemplate.color="#06D6A0";
       
//         // Add images to nodes
// var imageBullet = nodeTemplate.createChild(am4core.Image);
// imageBullet.width = 20;
// imageBullet.height = 20;
// imageBullet.horizontalCenter = "middle";
// imageBullet.verticalCenter = "middle";
// imageBullet.propertyFields.href =  "https://www.amcharts.com/wp-content/uploads/flags/germany.svg";

//         var linkTemplate = chart.links.template;
//         linkTemplate.fillOpacity = 0.4;
//         // linkTemplate.middleLine.strokeOpacity = 0.5;
//         // linkTemplate.middleLine.stroke = am4core.color("#555");
//         // linkTemplate.middleLine.strokeWidth = 15;
//         linkTemplate.tension=0.7;
//         linkTemplate.tooltipText="";
//         // make nodes draggable
//         linkTemplate.colorMode = "gradient";
//         // nodeTemplate.tooltip=false;
//         nodeTemplate.cursorOverStyle = am4core.MouseCursorStyle.pointer
        
//         });
//   return (
//     <div id="chartdiv"></div>
//   )
// }

// export default SankeyChart
