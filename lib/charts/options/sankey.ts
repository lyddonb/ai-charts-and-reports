import type { Options } from 'highcharts';

export const getSankeyOptions = (): Options => ({
  chart: {
    type: 'sankey',
    height: '400px',
  },
  title: {
    text: 'Sankey Chart',
  },
  plotOptions: {
    sankey: {
      dataLabels: {
        enabled: true,
        format: '{point.name}',
      },
      tooltip: {
        pointFormat: '{point.name}: {point.weight}',
      },
    },
  },
  series: [
    {
      type: 'sankey',
      name: 'Flow',
      data: [
        ['A', 'B', 5],
        ['A', 'C', 3],
        ['A', 'D', 4],
        ['B', 'C', 4],
        ['B', 'D', 2],
        ['C', 'D', 5],
      ],
      nodes: [
        { id: 'A', name: 'Node A' },
        { id: 'B', name: 'Node B' },
        { id: 'C', name: 'Node C' },
        { id: 'D', name: 'Node D' },
      ],
    },
  ],
});
