import type { Options } from 'highcharts';

export const getScatter3DOptions = (): Options => ({
  chart: {
    type: 'scatter3d',
    options3d: {
      enabled: true,
      alpha: 20,
      beta: 30,
      depth: 200,
      viewDistance: 10,
      frame: {
        bottom: {
          size: 1,
          color: 'rgba(0,0,0,0.05)',
        },
      },
    },
  },
  title: {
    text: '3D Scatter Chart',
  },
  subtitle: {
    text: 'using x y z coordinates',
  },
  plotOptions: {
    scatter3d: {
      marker: {
        radius: 5,
      },
    },
  },
  xAxis: {
    min: 0,
    max: 10,
    gridLineWidth: 1,
    title: {
      text: 'X Axis',
    },
    startOnTick: true,
    showLastLabel: true,
    crosshair: true,
    labels: {
      format: '{value}',
    },
  },
  yAxis: {
    min: 0,
    max: 10,
    title: {
      text: 'Y Axis',
    },
    startOnTick: true,
    showLastLabel: true,
    crosshair: true,
    labels: {
      format: '{value}',
    },
  },
  zAxis: {
    min: 0,
    max: 10,
    showFirstLabel: false,
    title: {
      text: 'Z Axis',
    },
    labels: {
      format: '{value}',
    },
    startOnTick: true,
    showLastLabel: true,
  },
  tooltip: {
    headerFormat: '<b>{series.name}</b><br>',
    pointFormat: 'X: {point.x}<br>Y: {point.y}<br>Z: {point.z}',
  },
  series: [
    {
      type: 'scatter3d',
      name: 'Values',
      data: [
        [1, 1, 1],
        [1, 1, 2],
        [1, 1, 5],
        [2, 3, 2],
        [2, 6, 4],
        [4, 5, 7],
        [4, 2, 8],
        [7, 1, 3],
        [7, 1, 5],
        [8, 1, 5],
      ],
      marker: {
        radius: 5,
      },
      tooltip: {
        pointFormat: 'X: {point.x}<br>Y: {point.y}<br>Z: {point.z}',
      },
    },
  ],
});
