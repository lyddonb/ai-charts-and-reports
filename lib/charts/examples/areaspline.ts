import type { Options } from 'highcharts';
import type { Example } from './example';
import Highcharts from 'highcharts';

const areaSplineChartOptions: Options = {
  chart: {
    type: 'areaspline',
  },
  title: {
    text: 'Moose and deer hunting in Norway, 2000 - 2024',
  },
  subtitle: {
    text: 'Source: <a href="https://www.ssb.no/jord-skog-jakt-og-fiskeri/jakt" target="_blank">SSB</a>',
  },
  legend: {
    layout: 'vertical',
    align: 'left',
    verticalAlign: 'top',
    x: 120,
    y: 70,
    floating: true,
    borderWidth: 1,
    backgroundColor: '#FFFFFF',
  },
  xAxis: {
    // Highlight the last years where moose hunting quickly deminishes
    plotBands: [
      {
        from: 2020,
        to: 2023,
        color: 'rgba(68, 170, 213, .2)',
      },
    ],
  },
  yAxis: {
    title: {
      text: 'Quantity',
    },
  },
  tooltip: {
    shared: true,
    headerFormat: '<b>Hunting season starting autumn {point.x}</b><br>',
  },
  credits: {
    enabled: false,
  },
  plotOptions: {
    series: {
      pointStart: 2000,
    },
    areaspline: {
      fillOpacity: 0.5,
    },
  },
  series: [
    {
      type: 'areaspline',
      name: 'Moose',
      data: [
        38000, 37300, 37892, 38564, 36770, 36026, 34978, 35657, 35620, 35971,
        36409, 36435, 34643, 34956, 33199, 31136, 30835, 31611, 30666, 30319,
        31766, 29278, 27487, 26007,
      ],
    },
    {
      type: 'areaspline',
      name: 'Deer',
      data: [
        22534, 23599, 24533, 25195, 25896, 27635, 29173, 32646, 35686, 37709,
        39143, 36829, 35031, 36202, 35140, 33718, 37773, 42556, 43820, 46445,
        50048, 52804, 49317, 52490,
      ],
    },
  ],
};

const AreaSplineChartExample: Example = {
  options: areaSplineChartOptions,
  name: 'Area Spline Chart',
  chartType: 'areaspline',
  slug: 'areaspline-chart',
};

export default AreaSplineChartExample;
