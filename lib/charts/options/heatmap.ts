import type { Options } from 'highcharts';

export const getHeatmapOptions = (): Options => ({
  chart: {
    type: 'heatmap',
    height: '400px',
  },
  title: {
    text: 'Heatmap Chart',
  },
  xAxis: {
    title: {
      text: null,
    },
    labels: {
      overflow: 'justify',
    },
  },
  yAxis: {
    title: {
      text: null,
    },
    labels: {
      overflow: 'justify',
    },
  },
  colorAxis: {
    min: 0,
    stops: [
      [0, '#3061cf'],
      [0.5, '#fffbbc'],
      [0.9, '#c4463a'],
      [1, '#c4463a'],
    ],
  },
  legend: {
    align: 'right',
    layout: 'vertical',
    margin: 0,
    verticalAlign: 'top',
    y: 25,
    symbolHeight: 280,
  },
  tooltip: {
    formatter: function (this: any) {
      if (!this.series?.xAxis?.categories || !this.series?.yAxis?.categories) {
        return '';
      }
      return `<b>${this.series.xAxis.categories[this.x]}</b> sold <br><b>${
        this.y
      }</b> items on <br><b>${this.series.yAxis.categories[this.y]}</b>`;
    },
  },
  series: [
    {
      type: 'heatmap',
      name: 'Sales per employee per weekday',
      borderWidth: 1,
      data: [
        [0, 0, 10],
        [0, 1, 19],
        [0, 2, 8],
        [0, 3, 24],
        [0, 4, 67],
        [1, 0, 92],
        [1, 1, 58],
        [1, 2, 78],
        [1, 3, 117],
        [1, 4, 48],
        [2, 0, 35],
        [2, 1, 15],
        [2, 2, 123],
        [2, 3, 64],
        [2, 4, 52],
        [3, 0, 72],
        [3, 1, 132],
        [3, 2, 114],
        [3, 3, 19],
        [3, 4, 16],
        [4, 0, 38],
        [4, 1, 5],
        [4, 2, 8],
        [4, 3, 117],
        [4, 4, 115],
      ],
      dataLabels: {
        enabled: true,
        color: '#000000',
      },
      tooltip: {
        pointFormat: '{point.value}',
      },
    },
  ],
});
