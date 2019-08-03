import { Transform } from '../Transform';
import { Backend, ImageSource } from '../Backend';
import { getDescriptorTransformPairs, DescriptorTransformPair } from './utils';
import { PixelDensity } from '../Descriptor';

type ImgixOutputFormat = 'jpg' | 'png' | 'gif' | 'jp2' | 'jxr' | 'webp';

const IMGIX_FORMAT_MAP: {
  [mimeType: string]: ImgixOutputFormat | undefined;
} = {
  'image/jpeg': 'jpg',
  'image/png': 'png',
  'image/gif': 'gif',
  'image/jp2': 'jp2',
  'image/jxr': 'jxr',
  'image/webp': 'webp'
};

function normalizeDensity(transform: Transform): number {
  if (transform.density === undefined) {
    return 1;
  }

  const isWithinRange = transform.density >= 1 && transform.density <= 8;

  return isWithinRange ? transform.density : 1;
}

function imgixQueryFromTransform(transform: Transform): string {
  const fm: ImgixOutputFormat = IMGIX_FORMAT_MAP[transform.mimeType] || 'jpg';
  const density: number = normalizeDensity(transform);
  const width = transform.width;

  const params = new URLSearchParams();
  params.set('fit', 'max');
  params.set('fm', fm);
  params.set('dpr', String(density));
  params.set('width', String(width));

  return '?' + params.toString();
}

function imgixImgSrcFromPairs(
  baseUrl: string,
  [descriptor, transform]: DescriptorTransformPair
): ImageSource {
  return {
    mimeType: transform.mimeType,
    descriptor,
    url: transform.url || baseUrl + imgixQueryFromTransform(transform)
  };
}

export const ImgixBackend: Backend = {
  parse(baseUrl: string, transforms: Transform[], fallback: Transform, size?: number) {
    const descriptorTransformPairs = getDescriptorTransformPairs(transforms, size);

    return {
      fallback: {
        mimeType: fallback.mimeType,
        descriptor: new PixelDensity(1),
        url: fallback.url || baseUrl + imgixQueryFromTransform(fallback)
      },
      imgSrcs: descriptorTransformPairs.map(imgixImgSrcFromPairs.bind(null, baseUrl))
    };
  }
}
