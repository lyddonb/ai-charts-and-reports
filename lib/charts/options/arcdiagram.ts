import type { Options, SeriesSankeyPointOptionsObject } from 'highcharts';

export const getArcDiagramOptions = (): Options => ({
  chart: {
    type: 'arcdiagram',
    height: '400px',
  },
  title: {
    text: 'Arc Diagram',
  },
  plotOptions: {
    arcdiagram: {
      dataLabels: {
        enabled: true,
        format: '{point.name}',
      },
    },
  },
  series: [
    {
      type: 'arcdiagram',
      name: 'Connections',
      data: [
        { from: 'A', to: 'B', weight: 5 },
        { from: 'B', to: 'C', weight: 3 },
        { from: 'C', to: 'D', weight: 4 },
        { from: 'D', to: 'A', weight: 2 },
      ] as SeriesSankeyPointOptionsObject[],
      nodes: [
        { id: 'A', name: 'Node A' },
        { id: 'B', name: 'Node B' },
        { id: 'C', name: 'Node C' },
        { id: 'D', name: 'Node D' },
      ],
    },
  ],
});
