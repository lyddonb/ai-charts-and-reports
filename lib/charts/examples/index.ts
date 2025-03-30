import ThreeDAreaMultipleExample from './3d-area-multiple';
import ThreeDColumnInteractiveExample from './3d-column-interactive';
import ThreeDColumnNullValuesExample from './3d-column-null-values';
import ThreeDColumnStackingGroupingExample from './3d-column-stacking-grouping';
import ThreeDPieDonutExample from './3d-pie-donut';
import ThreeDPieExample from './3d-pie';
import ThreeDScatterDraggableExample from './3d-scatter-draggable';
import AccessibleLineExample from './accessible-line';
import AccessiblePieExample from './accessible-pie';
import AdvancedAccessibleExample from './advanced-accessible';
import AnnotationsExample from './annotations';
import ArcDiagramExample from './arc-diagram';
import AreaChartExample from './area-chart';
import AreaInvertedChartExample from './area-inverted';
import AreaMissingChartExample from './area-missing';
import AreaNegativeChartExample from './area-negative';
import AreaStackedInvertedChartExample from './area-stacked-inverted';
import AreaStackedPercentChartExample from './area-stacked-percent';
import AreaStackedChartExample from './area-stacked';
import AreaRangeLineChartExample from './arearange-line';
import AreaRangeChartExample from './arearange';
import AreaSplineChartExample from './areaspline';
import BarChartExample from './bar-chart';
import BarForceExample from './bar-force';
import BarNegativeStackExample from './bar-negative-stack';

export const examples = [
  ThreeDAreaMultipleExample,
  ThreeDColumnInteractiveExample,
  ThreeDColumnNullValuesExample,
  ThreeDColumnStackingGroupingExample,
  ThreeDPieDonutExample,
  ThreeDPieExample,
  ThreeDScatterDraggableExample,
  AccessibleLineExample,
  AccessiblePieExample,
  AdvancedAccessibleExample,
  AnnotationsExample,
  ArcDiagramExample,
  AreaChartExample,
  AreaInvertedChartExample,
  AreaMissingChartExample,
  AreaNegativeChartExample,
  AreaStackedInvertedChartExample,
  AreaStackedPercentChartExample,
  AreaStackedChartExample,
  AreaRangeLineChartExample,
  AreaRangeChartExample,
  AreaSplineChartExample,
  BarChartExample,
  BarForceExample,
  BarNegativeStackExample,
];

export const getExampleBySlug = (slug: string) => {
  return examples.find((example) => example.slug === slug);
};
