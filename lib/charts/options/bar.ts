import type { Options } from 'highcharts';

export const getBarOptions = (): Options => ({
  chart: {
    type: 'bar',
    height: '400px',
  },
  title: {
    text: 'Bar Chart',
  },
  xAxis: {
    categories: ['Apples', 'Oranges', 'Pears', 'Grapes', 'Bananas'],
    title: {
      text: 'Fruits',
    },
  },
  yAxis: {
    min: 0,
    title: {
      text: 'Amount',
    },
    labels: {
      overflow: 'justify',
    },
  },
  tooltip: {
    valueSuffix: ' units',
  },
  plotOptions: {
    bar: {
      dataLabels: {
        enabled: true,
      },
      borderRadius: 5,
    },
  },
  legend: {
    layout: 'vertical',
    align: 'right',
    verticalAlign: 'top',
    x: -40,
    y: 80,
    floating: true,
    borderWidth: 1,
    backgroundColor: '#FFFFFF',
    shadow: true,
  },
  credits: {
    enabled: false,
  },
  series: [
    {
      type: 'bar',
      name: 'Year 2023',
      data: [4, 3, 4, 7, 2],
    },
    {
      type: 'bar',
      name: 'Year 2024',
      data: [3, 4, 4, 2, 5],
    },
  ],
});
