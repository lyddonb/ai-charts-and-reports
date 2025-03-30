import type { Options } from 'highcharts';

export const getAreaSplineOptions = (): Options => ({
  chart: {
    type: 'areasplinerange',
    height: '500px',
    backgroundColor: 'white',
    style: {
      fontFamily:
        '-apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    },
  },
  title: {
    text: 'Temperature Variation by Month',
    style: {
      fontSize: '20px',
      fontWeight: '600',
    },
  },
  subtitle: {
    text: 'Showing daily temperature ranges',
    style: {
      color: '#666666',
    },
  },
  xAxis: {
    categories: [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ],
    labels: {
      style: {
        color: '#666666',
      },
    },
    crosshair: true,
    visible: true,
  },
  yAxis: {
    title: {
      text: 'Temperature (°F)',
    },
    labels: {
      style: {
        color: '#666666',
      },
    },
    gridLineColor: '#E6E6E6',
    visible: true,
  },
  tooltip: {
    shared: true,
    headerFormat: '<b>{series.name}</b><br/>',
    pointFormat: '{point.x}: {point.low}°F - {point.high}°F',
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    borderWidth: 0,
    shadow: true,
  },
  plotOptions: {
    areasplinerange: {
      fillOpacity: 0.3,
      lineWidth: 1,
      color: '#4ECDC4',
      fillColor: {
        linearGradient: {
          x1: 0,
          y1: 0,
          x2: 0,
          y2: 1,
        },
        stops: [
          [0, '#4ECDC4'],
          [1, '#FF6B6B'],
        ],
      },
      marker: {
        enabled: false,
      },
      states: {
        hover: {
          lineWidth: 2,
        },
      },
    },
  },
  series: [
    {
      type: 'areasplinerange',
      name: 'Temperature Range',
      data: [
        [20, 45], // Jan
        [25, 50], // Feb
        [35, 65], // Mar
        [45, 75], // Apr
        [55, 85], // May
        [65, 90], // Jun
        [70, 95], // Jul
        [68, 93], // Aug
        [60, 85], // Sep
        [50, 75], // Oct
        [35, 60], // Nov
        [25, 50], // Dec
      ],
    },
  ],
  legend: {
    enabled: false,
  },
  credits: {
    enabled: false,
  },
});
