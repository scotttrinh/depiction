import { Transform } from '../Transform';
import { Descriptor, PixelDensity, Width } from '../Descriptor';

export type DescriptorTransformPair = [Descriptor, Transform];

function hasHiDpiTransform(transform: Transform): boolean {
  return Boolean(transform.density) && transform.density !== 1;
}

export function getDescriptorTransformPairs(
  transforms: Transform[]
): DescriptorTransformPair[] {
  const someHaveHiDpiTransforms = transforms.some(hasHiDpiTransform);

  return transforms.map(transform => [
    someHaveHiDpiTransforms
      ? new PixelDensity(transform.density || 1)
      : new Width(transform.width),
    transform
  ]);
}

