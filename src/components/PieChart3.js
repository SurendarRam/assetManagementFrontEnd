import React, { useEffect } from 'react';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';

// Apply the animated theme
am4core.useTheme(am4themes_animated);

const PieChart3 = ({ data }) => {
  useEffect(() => {
    // Create a chart instance
    const chart = am4core.create('chartdiv3', am4charts.PieChart);
    chart.hiddenState.properties.opacity = 0;
     //disable logo
     chart.config = {
        "logo": {
          disabled: true,
        }
      }

    // Add data
    chart.data = data;
    
    chart.innerRadius = am4core.percent(30);
    chart.depth = 120;

    // Create pie series
    const series = chart.series.push(new am4charts.PieSeries());
    series.dataFields.value = 'value';
    series.dataFields.category = 'category';

    chart.radius = am4core.percent(95);

    // Add labels
    series.labels.template.disabled = true;
    series.ticks.template.disabled = true;
    // Add a legend
    chart.legend = new am4charts.Legend();
    chart.legend.position = "right";

    // Return a cleanup function to destroy the chart when the component is unmounted
    return () => {
      chart.dispose();
    };
  }, [data]);

  return <div id="chartdiv3" style={{ width: '100%', height: '150px' }} />;
};

export default PieChart3;