import type { Options, SeriesOptionsType } from 'highcharts';

// Extend the Highcharts types to include our custom chart type
declare module 'highcharts' {
  interface SeriesTypeRegistry {
    lowmedhigh: {
      options: SeriesOptionsType;
      point: any;
    };
  }
}

interface LowMedHighPoint {
  low: number;
  median: number;
  high: number;
  category?: string;
}

export const createLowMedHighOptions = (data: LowMedHighPoint[]): Options => ({
  chart: {
    type: 'lowmedhigh',
  },
  title: {
    text: 'Low-Median-High Chart',
  },
  xAxis: {
    categories: data.map((item) => item.category || ''),
    title: {
      text: 'Categories',
    },
  },
  yAxis: {
    title: {
      text: 'Values',
    },
    min: 0,
  },
  tooltip: {
    shared: true,
    stickOnContact: true,
  },
  plotOptions: {
    series: {
      stickyTracking: true,
    },
  },
  series: [
    {
      type: 'lowmedhigh',
      name: 'Values',
      data: data.map((item) => [item.low, item.median, item.high]),
      keys: ['low', 'median', 'high'],
      tooltip: {
        pointFormat:
          '<span style="color:{point.color}">\u25CF</span> ' +
          '{series.name}: ' +
          'Low <b>{point.low}</b> - Median <b>{point.median}</b> - ' +
          'High <b>{point.high}</b><br/>',
      },
    },
  ] as any,
});

export const registerLowMedHighChart = (Highcharts: any) => {
  Highcharts.seriesType(
    'lowmedhigh',
    'boxplot',
    {
      keys: ['low', 'median', 'high'],
      tooltip: {
        pointFormat:
          '<span style="color:{point.color}">\u25CF</span> ' +
          '{series.name}: ' +
          'Low <b>{point.low} NOK</b> - Median <b>{point.median} NOK</b> - ' +
          'High <b>{point.high} NOK</b><br/>',
      },
    },
    {
      drawPoints: function () {
        const series = this;
        this.points.forEach((point: any) => {
          let graphic = point.graphic;
          const verb = graphic ? 'animate' : 'attr';
          const shapeArgs = point.shapeArgs || {};
          const width = shapeArgs.width || 20; // Default width if not provided
          const left = Math.floor(point.plotX - width / 2) + 0.5;
          const right = left + width;
          const crispX = left + Math.round(width / 2) + 0.5;

          // Convert the raw values to plot coordinates
          const yAxis = series.yAxis;
          const highPlot = Math.floor(yAxis.toPixels(point.high)) + 0.5;
          const medianPlot = Math.floor(yAxis.toPixels(point.median)) + 0.5;
          const lowPlot = Math.floor(yAxis.toPixels(point.low)) + 0.5;

          if (point.isNull) {
            return;
          }

          if (!graphic) {
            point.graphic = graphic = series.chart.renderer
              .path('point')
              .add(series.group);
          }

          graphic.attr({
            stroke: point.color || series.color,
            'stroke-width': 1,
          });

          // Draw the three horizontal lines and the vertical connector
          const path = [
            // High horizontal line
            'M',
            left,
            highPlot,
            'H',
            right,
            // Median horizontal line
            'M',
            left,
            medianPlot,
            'H',
            right,
            // Low horizontal line
            'M',
            left,
            lowPlot,
            'H',
            right,
            // Vertical line connecting high to low
            'M',
            crispX,
            highPlot,
            'V',
            lowPlot,
          ];

          graphic[verb]({ d: path });
        });
      },
    },
  );
};
