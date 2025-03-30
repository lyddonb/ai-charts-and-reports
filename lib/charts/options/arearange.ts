import type { Options } from 'highcharts';

export const getAreaRangeOptions = (): Options => ({
  chart: {
    type: 'arearange',
    height: '400px',
  },
  title: {
    text: 'Area Range Chart',
  },
  xAxis: {
    type: 'datetime',
    title: {
      text: 'Date',
    },
  },
  yAxis: {
    title: {
      text: 'Temperature (°C)',
    },
  },
  tooltip: {
    shared: true,
    useHTML: true,
    headerFormat: '<small>{point.key}</small><table>',
    pointFormat:
      '<tr><td style="color: {series.color}">{series.name}: </td>' +
      '<td style="text-align: right"><b>{point.low:.1f}°C</b> - <b>{point.high:.1f}°C</b></td></tr>',
    footerFormat: '</table>',
    valueDecimals: 1,
  },
  plotOptions: {
    arearange: {
      fillOpacity: 0.5,
      marker: {
        enabled: true,
      },
    },
  },
  series: [
    {
      type: 'arearange',
      name: 'Temperature',
      data: [
        [Date.UTC(2023, 0, 1), 5, 10],
        [Date.UTC(2023, 1, 1), 6, 12],
        [Date.UTC(2023, 2, 1), 8, 15],
        [Date.UTC(2023, 3, 1), 10, 18],
        [Date.UTC(2023, 4, 1), 12, 20],
        [Date.UTC(2023, 5, 1), 15, 25],
      ],
    },
  ],
});
