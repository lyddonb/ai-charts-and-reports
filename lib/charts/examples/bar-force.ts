import type { Options } from 'highcharts';
import type { Example } from './example';

const barForceChartOptions: Options = {
  chart: {
    type: 'bar',
    height: 170,
  },
  title: {
    text: 'Mars EDL forces comparison',
  },
  plotOptions: {
    bar: {
      stacking: 'normal',
      dataLabels: {
        enabled: true,
        y: 20,
        verticalAlign: 'bottom',
      },
      color: 'rgb(255, 7, 77)',
      negativeColor: 'rgb(1, 127, 250)',
      accessibility: {
        exposeAsGroupOnly: true,
      },
    },
  },
  tooltip: {
    format:
      '<span style="color:{point.color}">\u25CF</span> ' +
      '<b>{series.name}: {point.y}</b>',
  },
  accessibility: {
    typeDescription:
      'Stacked bar "force" chart. Positive forces ' +
      'are shown on the right side and negative on the left.',
    series: {
      descriptionFormat:
        'Series {add series.index 1} of ' +
        '{chart.series.length}, Name: {series.name}, ' +
        '{#if (gt series.points.0.y 0)}accelerating' +
        '{else}decelerating{/if} value of {series.points.0.y}.',
    },
  },
  yAxis: {
    reversedStacks: false,
    opposite: true,
    labels: {
      enabled: false,
    },
    title: {
      text: '',
    },
    accessibility: {
      description: '',
    },
    stackLabels: {
      enabled: true,
      verticalAlign: 'top',
      style: {
        fontSize: '1.2em',
      },
      format: '{#if isNegative}Min{else}Max{/if}: {total}',
    },
    startOnTick: false,
    endOnTick: false,
  },
  xAxis: {
    visible: false,
    title: {
      text: '',
    },
    accessibility: {
      description: '',
    },
  },
  legend: {
    enabled: false,
  },
  /*
NOTE: These data values are arbitrary, illustrative and does not reflect
the strength of actual forces in a Mars EDL sequence. They aim to broadly
demonstrate the key dynamics affecting the spacecraft during EDL.
*/
  series: [
    // Unwanted/additive forces
    { type: 'bar', name: 'Initial Entry Speed', data: [15] },
    { type: 'bar', name: 'Martian Gravity', data: [3] },

    // Slowing forces
    { type: 'bar', name: 'Atmospheric Drag (Re-entry)', data: [-9] },
    { type: 'bar', name: 'Parachute Drag', data: [-7] },
    { type: 'bar', name: 'Heat Shield Separation', data: [-0.5] },
    { type: 'bar', name: 'Retro Rockets (Powered decent)', data: [-1.5] },
    { type: 'bar', name: 'Sky Crane Operation', data: [-1] },
  ],
};

const BarForceExample: Example = {
  options: barForceChartOptions,
  name: 'Bar Force',
  chartType: 'bar',
  slug: 'bar-force',
};

export default BarForceExample;
