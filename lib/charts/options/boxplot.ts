import type { Options } from 'highcharts';

export const getBoxPlotOptions = (): Options => ({
  chart: {
    type: 'boxplot',
    height: '400px',
  },
  title: {
    text: 'Box Plot Chart',
  },
  xAxis: {
    categories: ['A', 'B', 'C', 'D', 'E'],
    title: {
      text: 'Categories',
    },
  },
  yAxis: {
    title: {
      text: 'Values',
    },
  },
  plotOptions: {
    boxplot: {
      fillColor: '#7cb5ec',
      lineWidth: 1,
      medianColor: '#000000',
      medianWidth: 1,
      stemColor: '#A63400',
      stemDashStyle: 'Dot',
      stemWidth: 1,
      whiskerColor: '#3B9205',
      whiskerLength: '80%',
      whiskerWidth: 1,
    },
  },
  series: [
    {
      type: 'boxplot',
      name: 'Observations',
      data: [
        [760, 801, 848, 895, 965],
        [733, 853, 939, 980, 1080],
        [714, 762, 817, 870, 918],
        [724, 802, 806, 871, 950],
        [834, 836, 864, 882, 910],
      ],
    },
  ],
});
