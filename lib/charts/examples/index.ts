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
];

export const getExampleBySlug = (slug: string) => {
  return examples.find((example) => example.slug === slug);
};
