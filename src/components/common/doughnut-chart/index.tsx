// components/DoughnutChart.js
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

// Register required Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = () => {
  const data = {
    labels: ['A', 'B', 'C', 'D', 'E', 'F'],
    datasets: [
      {
        data: [16, 16, 16, 16, 16, 20],
        backgroundColor: [
          '#59D9C2',
          '#125C55',
          '#107569',
          '#0E9384',
          '#44C5B1',
          '#2Ed3B7',
        ],
        hoverBackgroundColor: [
          '#59D9C2',
          '#125C55',
          '#107569',
          '#0E9384',
          '#44C5B1',
          '#2Ed3B7',
        ],
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false, // This ensures it fits the container,
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <div style={{ width: '100%', height: '400px' }}>
      <Doughnut data={data} options={options} />
    </div>
  );
};

export default DoughnutChart;
