import React from "react";
import { Chart } from "chart.js/auto"
import { Bar } from "react-chartjs-2";

function BarChart() {
  return (
    <>
      <Bar 
      data = {{
        labels: ['Users', 'Sales', 'Books'],
        datasets: [
            {
                label: "#",
                data: [12, 19, 13],
                backgroundColor: ['red', 'green', 'yellow']
            }
        ]
      }}
      height = {400}
      width = {600}
      />
    </>
  );
}

export default BarChart;
