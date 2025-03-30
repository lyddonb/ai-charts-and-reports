import type { Options, SeriesSankeyPointOptionsObject } from 'highcharts';

export const getArcDiagramOptions = (): Options => ({
  chart: {
    type: 'arcdiagram',
    height: '500px',
    backgroundColor: 'white',
    marginTop: 80,
    marginBottom: 80,
  },
  title: {
    text: 'Software Development Dependencies',
    style: {
      fontSize: '24px',
      fontWeight: '600',
    },
  },
  subtitle: {
    text: 'Showing relationships between different components',
    style: {
      fontSize: '16px',
      color: '#666',
    },
  },
  plotOptions: {
    arcdiagram: {
      centeredLinks: true,
    },
  },
  series: [
    {
      type: 'arcdiagram',
      name: 'Dependencies',
      keys: ['from', 'to', 'weight'],
      data: [
        ['Frontend', 'API', 8],
        ['API', 'Database', 10],
        ['Frontend', 'Auth', 6],
        ['Auth', 'Database', 7],
        ['API', 'Cache', 5],
        ['Cache', 'Database', 4],
        ['Frontend', 'Analytics', 3],
        ['Analytics', 'Database', 5],
        ['Auth', 'API', 4],
      ] as any,
      nodes: [
        {
          id: 'Frontend',
          name: 'Frontend',
          color: '#FF6B6B',
        },
        {
          id: 'API',
          name: 'API Layer',
          color: '#4ECDC4',
        },
        {
          id: 'Database',
          name: 'Database',
          color: '#45B7D1',
        },
        {
          id: 'Auth',
          name: 'Authentication',
          color: '#96CEB4',
        },
        {
          id: 'Cache',
          name: 'Cache Layer',
          color: '#FFD93D',
        },
        {
          id: 'Analytics',
          name: 'Analytics',
          color: '#FF9F9F',
        },
      ],
    },
  ],
  tooltip: {
    useHTML: true,
    formatter: function () {
      // @ts-ignore
      const point = this.point;
      if (point.fromNode && point.toNode) {
        return `<b>${point.fromNode.name}</b> → <b>${point.toNode.name}</b><br/>
                Dependency Weight: <b>${point.weight}</b>`;
      }
      return point.name;
    },
    style: {
      fontSize: '14px',
    },
  },
});
