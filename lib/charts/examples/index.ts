import ThreeDAreaMultipleExample from './3d-area-multiple';

export const examples = [ThreeDAreaMultipleExample];

export const getExampleBySlug = (slug: string) => {
  return examples.find((example) => example.slug === slug);
};
