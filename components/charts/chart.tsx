'use client';

import { useEffect, useState, useRef } from 'react';
import HighchartsReact from 'highcharts-react-official';
import type { Options } from 'highcharts';

const loadHighchartsModules = async () => {
  try {
    // First load the core Highcharts
    const Highcharts = await import(
      'highcharts/es-modules/masters/highcharts.src.js'
    );

    // Then load highcharts-more
    await import('highcharts/es-modules/masters/highcharts-more.src.js');

    // Load series modules
    await import('highcharts/es-modules/masters/modules/series-label.src.js');
    await import(
      'highcharts/es-modules/masters/modules/series-on-point.src.js'
    );

    // Load 3D module before any 3D-dependent modules
    await import('highcharts/es-modules/masters/highcharts-3d.src.js');

    // Then load other modules
    await import(
      'highcharts/es-modules/masters/modules/draggable-points.src.js'
    );
    await import(
      'highcharts/es-modules/masters/modules/histogram-bellcurve.src.js'
    );
    await import('highcharts/es-modules/masters/modules/sankey.src.js');
    await import('highcharts/es-modules/masters/modules/exporting.src.js');
    await import('highcharts/es-modules/masters/modules/heatmap.src.js');
    await import('highcharts/es-modules/masters/modules/accessibility.src.js');
    await import('highcharts/es-modules/masters/modules/bullet.src.js');
    await import('highcharts/es-modules/masters/modules/arc-diagram.src.js');
    await import('highcharts/es-modules/masters/modules/item-series.src.js');
    await import(
      'highcharts/es-modules/masters/modules/dependency-wheel.src.js'
    );
    await import('highcharts/es-modules/masters/modules/dumbbell.src.js');
    await import('highcharts/es-modules/masters/modules/funnel3d.src.js');
    await import('highcharts/es-modules/masters/modules/funnel.src.js');
    await import('highcharts/es-modules/masters/modules/lollipop.src.js');
    await import('highcharts/es-modules/masters/modules/networkgraph.src.js');
    await import('highcharts/es-modules/masters/modules/organization.src.js');
    await import(
      'highcharts/es-modules/masters/modules/parallel-coordinates.src.js'
    );
    await import('highcharts/es-modules/masters/modules/cylinder.src.js');
    await import('highcharts/es-modules/masters/modules/pareto.src.js');
    await import('highcharts/es-modules/masters/modules/pyramid3d.src.js');
    await import('highcharts/es-modules/masters/modules/solid-gauge.src.js');
    await import('highcharts/es-modules/masters/modules/streamgraph.src.js');
    await import('highcharts/es-modules/masters/modules/sunburst.src.js');
    await import('highcharts/es-modules/masters/modules/timeline.src.js');
    await import('highcharts/es-modules/masters/modules/treegraph.src.js');
    await import('highcharts/es-modules/masters/modules/treemap.src.js');
    await import('highcharts/es-modules/masters/modules/variable-pie.src.js');
    await import('highcharts/es-modules/masters/modules/variwide.src.js');
    await import('highcharts/es-modules/masters/modules/vector.src.js');
    await import('highcharts/es-modules/masters/modules/venn.src.js');
    await import('highcharts/es-modules/masters/modules/windbarb.src.js');
    await import('highcharts/es-modules/masters/modules/wordcloud.src.js');
    await import('highcharts/es-modules/masters/modules/xrange.src.js');

    return Highcharts.default;
  } catch (error) {
    console.error('Error loading Highcharts modules:', error);
    throw error;
  }
};

const Chart = ({ options }: { options: Options }) => {
  const [mounted, setMounted] = useState(false);
  const [highchartsInstance, setHighchartsInstance] = useState<any>(null);
  const [chartOptions, setChartOptions] = useState(options);

  // Update chartOptions when options prop changes
  useEffect(() => {
    setChartOptions(options);
  }, [options]);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const init = async () => {
      try {
        const Highcharts = await loadHighchartsModules();

        // Configure colors for 3D scatter
        if (options.chart?.type === 'scatter3d') {
          const colors = Highcharts.getOptions().colors;
          if (colors) {
            const gradientColors = colors.map((color) => {
              // Convert any color to string format
              const baseColor = String(color);
              return {
                radialGradient: {
                  cx: 0.4,
                  cy: 0.3,
                  r: 0.5,
                },
                stops: [
                  [0, baseColor],
                  [1, Highcharts.color(baseColor).brighten(-0.2).get('rgb')],
                ],
              };
            });

            Highcharts.setOptions({
              colors: gradientColors as any,
            });
          }
        }

        setHighchartsInstance(Highcharts);
        setMounted(true);
      } catch (error) {
        console.error('Error initializing Highcharts:', error);
      }
    };

    setMounted(false);
    setHighchartsInstance(null);
    init();
  }, [options.chart?.type]);

  // Add event listeners after chart is mounted
  useEffect(() => {
    if (!mounted || !highchartsInstance || options.chart?.type !== 'scatter3d')
      return;

    const chart = document.querySelector('.highcharts-container');
    if (!chart) {
      console.log('Chart container not found');
      return;
    }

    let isDragging = false;
    let startX = 0;
    let startY = 0;
    let startAlpha = 0;
    let startBeta = 0;

    const handleDragStart = (e: Event) => {
      e.preventDefault();
      isDragging = true;
      const rect = chart.getBoundingClientRect();
      startX =
        'touches' in e
          ? (e as TouchEvent).touches[0].clientX - rect.left
          : (e as MouseEvent).clientX - rect.left;
      startY =
        'touches' in e
          ? (e as TouchEvent).touches[0].clientY - rect.top
          : (e as MouseEvent).clientY - rect.top;
      startAlpha = chartOptions.chart?.options3d?.alpha || 0;
      startBeta = chartOptions.chart?.options3d?.beta || 0;
    };

    const handleDrag = (e: Event) => {
      if (!isDragging) return;
      e.preventDefault();
      const rect = chart.getBoundingClientRect();
      const currentX =
        'touches' in e
          ? (e as TouchEvent).touches[0].clientX - rect.left
          : (e as MouseEvent).clientX - rect.left;
      const currentY =
        'touches' in e
          ? (e as TouchEvent).touches[0].clientY - rect.top
          : (e as MouseEvent).clientY - rect.top;
      const sensitivity = 5;

      const newAlpha = startAlpha + (currentY - startY) / sensitivity;
      const newBeta = startBeta + (startX - currentX) / sensitivity;

      setChartOptions((prevOptions) => ({
        ...prevOptions,
        chart: {
          ...prevOptions.chart,
          options3d: {
            ...prevOptions.chart?.options3d,
            alpha: newAlpha,
            beta: newBeta,
          },
        },
      }));
    };

    const handleDragEnd = () => {
      isDragging = false;
    };

    // Prevent default touch behavior
    const preventDefault = (e: Event) => e.preventDefault();
    chart.addEventListener('touchstart', preventDefault, { passive: false });
    chart.addEventListener('touchmove', preventDefault, { passive: false });

    // Add event listeners
    document.addEventListener('mousedown', handleDragStart);
    document.addEventListener('touchstart', handleDragStart);
    document.addEventListener('mousemove', handleDrag);
    document.addEventListener('touchmove', handleDrag);
    document.addEventListener('mouseup', handleDragEnd);
    document.addEventListener('touchend', handleDragEnd);

    // Cleanup function
    return () => {
      document.removeEventListener('mousedown', handleDragStart);
      document.removeEventListener('touchstart', handleDragStart);
      document.removeEventListener('mousemove', handleDrag);
      document.removeEventListener('touchmove', handleDrag);
      document.removeEventListener('mouseup', handleDragEnd);
      document.removeEventListener('touchend', handleDragEnd);
    };
  }, [
    mounted,
    highchartsInstance,
    options.chart?.type,
    chartOptions.chart?.options3d?.alpha,
    chartOptions.chart?.options3d?.beta,
  ]);

  if (!mounted || !highchartsInstance) {
    return <div>Loading chart...</div>;
  }

  return (
    <HighchartsReact
      key={`${options.chart?.type}-${Date.now()}`}
      highcharts={highchartsInstance}
      options={chartOptions}
    />
  );
};

export default Chart;
