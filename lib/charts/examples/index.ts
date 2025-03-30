import ThreeDAreaMultipleExample from './3d-area-multiple';
import ThreeDColumnInteractiveExample from './3d-column-interactive';
import ThreeDColumnNullValuesExample from './3d-column-null-values';
import ThreeDColumnStackingGroupingExample from './3d-column-stacking-grouping';

export const examples = [
  ThreeDAreaMultipleExample,
  ThreeDColumnInteractiveExample,
  ThreeDColumnNullValuesExample,
  ThreeDColumnStackingGroupingExample,
];

export const getExampleBySlug = (slug: string) => {
  return examples.find((example) => example.slug === slug);
};
