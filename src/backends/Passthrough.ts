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
  fallback: TransformWithUrl
) {
  const descriptorTransformPairs = getDescriptorTransformPairs(transforms) as [
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
  parse(_baseUrl: string, transforms: Transform[], fallback: Transform) {
    if (isTransformWithUrl(fallback) && isTransformWithUrlArray(transforms)) {
      return parseWithUrl(transforms, fallback);
    }

    throw new TypeError(
      'Must use transforms with `url` property for Passthrough backend'
    );
  }
};
