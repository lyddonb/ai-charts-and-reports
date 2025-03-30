import type { Options } from 'highcharts';

export const getWordCloudOptions = (): Options => ({
  chart: {
    type: 'wordcloud',
    height: '400px',
  },
  title: {
    text: 'Word Cloud Chart',
  },
  plotOptions: {
    wordcloud: {
      tooltip: {
        pointFormat: '{point.name}: {point.weight}',
      },
    },
  },
  series: [
    {
      type: 'wordcloud',
      name: 'Words',
      data: [
        {
          name: 'Word 1',
          weight: 1,
        },
        {
          name: 'Word 2',
          weight: 2,
        },
        {
          name: 'Word 3',
          weight: 3,
        },
        {
          name: 'Word 4',
          weight: 4,
        },
        {
          name: 'Word 5',
          weight: 5,
        },
      ],
    },
  ],
});
