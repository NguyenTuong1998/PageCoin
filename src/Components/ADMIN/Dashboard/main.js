import { Chart } from "chart.js";
let myChart = document.getElementById("myChart");
const data = {
  labels: ["Red", "Blue"],
  datasets: [
    {
      label: "My First Dataset",
      data: [300, 50, 100],
      backgroundColor: [
        "rgb(255, 99, 132)",
        "rgb(54, 162, 235)",
       
      ],
      hoverOffset: 2,
    },
  ],
};
myChart = {
  type: "doughnut",
  data: data,
};