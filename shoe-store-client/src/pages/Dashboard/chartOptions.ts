export const getChartOptions = ({ title }) => {
  return {
    chart: {},
    redraw: true,
    responsive: true,
    scales: {
      y: {
        ticks: {
          callback: function (value) {
            return `${value}%`;
          },
        },
      },
    },
    plugins: {
      tooltip: {
        callbacks: {
          label: (value) => `${value.raw.toFixed(2)}%`,
        },
      },
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: title,
      },
    },
  };
};
