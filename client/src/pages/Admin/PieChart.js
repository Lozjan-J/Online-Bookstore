import React from "react";
import { Chart } from "chart.js/auto"
import { Pie } from "react-chartjs-2";

function PieChart({users, books}) {
  return (
    <>
      <Pie 
      data = {{
        labels: ['Users', 'Sales', 'Books'],
        datasets: [
            {
                label: "#",
                data: [users, 1, books],
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

export default PieChart;
