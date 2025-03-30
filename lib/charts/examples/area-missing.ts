import type { Options } from 'highcharts';
import type { Example } from './example';
import Highcharts from 'highcharts';

const areaMissingChartOptions: Options = {
  chart: {
    type: 'area',
  },
  title: {
    text: "Born persons, by boys' name",
  },
  subtitle: {
    text: '* Missing data for Yasin in 2019',
    verticalAlign: 'bottom',
  },
  legend: {
    layout: 'vertical',
    align: 'left',
    verticalAlign: 'top',
    x: 150,
    y: 60,
    floating: true,
    borderWidth: 1,
    backgroundColor: '#FFFFFF',
  },
  yAxis: {
    title: {
      text: 'Amount',
    },
  },
  plotOptions: {
    series: {
      pointStart: 2016,
    },
    area: {
      fillOpacity: 0.5,
    },
  },
  credits: {
    enabled: false,
  },
  series: [
    {
      type: 'area',
      name: 'Arvid',
      data: [11, 11, 8, 13, 12, 14, 4, 12],
    },
    {
      type: 'area',
      name: 'Yasin',
      data: [10, 10, 8, null, 8, 6, 4, 8],
    },
  ],
};

const AreaMissingChartExample: Example = {
  options: areaMissingChartOptions,
  name: 'Area Missing Chart',
  chartType: 'area',
  slug: 'area-missing-chart',
};

export default AreaMissingChartExample;
