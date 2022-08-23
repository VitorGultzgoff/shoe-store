// Utils
import { formatDecimal } from "utils/format";

export const getLineChartOptions = ({ title }) => {
  return {
    chart: {},
    redraw: true,
    responsive: true,
    scales: {
      y: {
        ticks: {
          callback: function (value) {
            return `${formatDecimal(value)}`;
          },
        },
      },
    },
    plugins: {
      tooltip: {
        callbacks: {
          label: (value) => `${formatDecimal(value.raw)} sales`,
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

export const getBarChartOptions = ({ title }) => {
  return {
    chart: {},
    redraw: true,
    responsive: true,
    scales: {
      y: {
        ticks: {
          callback: function (value) {
            return `${formatDecimal(value)}%`;
          },
        },
      },
    },
    plugins: {
      tooltip: {
        callbacks: {
          label: (value) => `${formatDecimal(value.raw.toFixed(2))}%`,
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
