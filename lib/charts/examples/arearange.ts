import type { Options } from 'highcharts';
import type { Example } from './example';

const areaRangeChartOptions: Options = {
  data: {
    csvURL: 'temp-florida-bergen-2023.csv',
    beforeParse: (csv) => csv.replace(/\n\n/g, '\n'),
    // parseDate: (val) => new Date(val).getTime(),
    // columns: [['date', 'high', 'low']],
  },
  chart: {
    type: 'arearange',
    zooming: {
      type: 'x',
    },
    scrollablePlotArea: {
      minWidth: 600,
      scrollPositionX: 1,
    },
    height: '100%',
    width: '100%',
  },
  title: {
    text: 'Temperature variation by day',
    align: 'left',
  },
  subtitle: {
    text:
      'Source: ' +
      '<a href="https://veret.gfi.uib.no/"' +
      'target="_blank">Universitetet i Bergen</a>',
  },
  xAxis: {
    type: 'datetime',
    accessibility: {
      rangeDescription: 'Range: Jan 1st 2023 to Jan 1st 2024.',
    },
  },
  yAxis: {
    title: {
      text: null,
    },
  },
  tooltip: {
    shared: true,
    valueSuffix: '°C',
    xDateFormat: '%A, %b %e',
  },
  legend: {
    enabled: false,
  },
  series: [
    {
      type: 'arearange',
      name: 'Temperatures',
      color: {
        linearGradient: {
          x1: 0,
          x2: 0,
          y1: 0,
          y2: 1,
        },
        stops: [
          [0, '#ff0000'],
          [1, '#0000ff'],
        ],
      },
    },
  ],
};

const AreaRangeChartExample: Example = {
  options: areaRangeChartOptions,
  name: 'Area Range Chart',
  chartType: 'arearange',
  slug: 'arearange-chart',
};

export default AreaRangeChartExample;
