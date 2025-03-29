'use client';

import { useEffect, useState } from 'react';
// import Highcharts from 'highcharts';
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

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const init = async () => {
      try {
        const Highcharts = await loadHighchartsModules();
        setHighchartsInstance(Highcharts);
        setMounted(true);
      } catch (error) {
        console.error('Error initializing Highcharts:', error);
      }
    };

    setMounted(false);
    setHighchartsInstance(null);
    init();
  }, []);

  if (!mounted || !highchartsInstance) {
    return <div>Loading chart...</div>;
  }

  console.log(options);

  return <HighchartsReact highcharts={highchartsInstance} options={options} />;
};

export default Chart;
