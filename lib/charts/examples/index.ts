import ThreeDAreaMultipleExample from './3d-area-multiple';
import ThreeDColumnInteractiveExample from './3d-column-interactive';
import ThreeDColumnNullValuesExample from './3d-column-null-values';
import ThreeDColumnStackingGroupingExample from './3d-column-stacking-grouping';
import ThreeDPieDonutExample from './3d-pie-donut';
import ThreeDPieExample from './3d-pie';
import ThreeDScatterDraggableExample from './3d-scatter-draggable';

export const examples = [
  ThreeDAreaMultipleExample,
  ThreeDColumnInteractiveExample,
  ThreeDColumnNullValuesExample,
  ThreeDColumnStackingGroupingExample,
  ThreeDPieDonutExample,
  ThreeDPieExample,
  ThreeDScatterDraggableExample,
];

export const getExampleBySlug = (slug: string) => {
  return examples.find((example) => example.slug === slug);
};
