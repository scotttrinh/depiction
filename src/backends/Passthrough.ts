import {
  isTransformWithUrl,
  Transform,
  TransformWithUrl,
  isTransformWithUrlArray
} from '../Transform';
import { Backend } from '../Backend';
import { getDescriptorTransformPairs } from './utils';
import { PixelDensity, Descriptor } from '../Descriptor';

function parseWithUrl(
  transforms: TransformWithUrl[],
  fallback: TransformWithUrl,
  size?: number
) {
  const descriptorTransformPairs = getDescriptorTransformPairs(transforms, size) as [
    Descriptor,
    TransformWithUrl
  ][];
  return {
    fallback: {
      mimeType: fallback.mimeType,
      descriptor: new PixelDensity(1),
      url: fallback.url
    },
    imgSrcs: descriptorTransformPairs.map(([descriptor, transform]) => ({
      mimeType: transform.mimeType,
      descriptor,
      url: transform.url
    }))
  };
}

export const PassthroughBackend: Backend = {
  parse(_baseUrl: string, transforms: Transform[], fallback: Transform, size?: number) {
    if (isTransformWithUrl(fallback) && isTransformWithUrlArray(transforms)) {
      return parseWithUrl(transforms, fallback, size);
    }

    throw new TypeError(
      'Must use transforms with `url` property for Passthrough backend'
    );
  }
};
