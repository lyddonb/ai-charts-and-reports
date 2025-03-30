import ThreeDAreaMultipleExample from './3d-area-multiple';
import ThreeDColumnInteractiveExample from './3d-column-interactive';

export const examples = [
  ThreeDAreaMultipleExample,
  ThreeDColumnInteractiveExample,
];

export const getExampleBySlug = (slug: string) => {
  return examples.find((example) => example.slug === slug);
};
