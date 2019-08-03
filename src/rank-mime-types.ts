import groupBy from 'lodash.groupby';
import toPairs from 'lodash.topairs';
import { ImageSource } from './Backend';

const imageMimeTypes = [
  'image/webp',
  'image/jp2',
  'image/jxr',
  'image/png',
  'image/jpg',
  'image/gif'
];

export function rankMimeTypes(
  sourceSets: ImageSource[]
): [string, ImageSource[]][] {
  return toPairs(groupBy(sourceSets, 'mimeType')).sort(
    ([a], [b]) => imageMimeTypes.indexOf(b) - imageMimeTypes.indexOf(a)
  );
}
