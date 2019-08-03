import { Transform } from '../Transform';
import { Descriptor, PixelDensity, Width } from '../Descriptor';

export type DescriptorTransformPair = [Descriptor, Transform];

function hasHiDpiTransform(transform: Transform): boolean {
  return Boolean(transform.density) && transform.density !== 1;
}

function findClosestSize(size: number, transforms: Transform[]): Transform[] {
  if (transforms.length === 0) {
    return transforms;
  }

  if (transforms.length === 1) {
    return transforms;
  }

  const differences = transforms.map((transform: Transform) => ({
    ...transform,
    distance: Math.abs((transform.width || 0) - size)
  })).sort((a, b) => a.distance - b.distance);

  return transforms.filter((transform: Transform) => {
    return transform.width === differences[0].width;
  });
}

function toPixelDensityTransformPair(transform: Transform): DescriptorTransformPair {
  return [new PixelDensity(transform.density || 1), transform];
}

function toWidthTransformPair(transform: Transform): DescriptorTransformPair {
  return [new Width(transform.width || 0), transform];
}

export function getDescriptorTransformPairs(
  transforms: Transform[],
  size?: number
): DescriptorTransformPair[] {
  const someHaveHiDpiTransforms = transforms.some(hasHiDpiTransform);
  if (size !== undefined) {
    return findClosestSize(size, transforms).map(toPixelDensityTransformPair);
  }

  const transformer = someHaveHiDpiTransforms
    ? toPixelDensityTransformPair
    : toWidthTransformPair
  return transforms.map(transformer);
}

