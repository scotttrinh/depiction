import React from 'react';
import groupBy from 'lodash.groupby';
import toPairs from 'lodash.topairs';
import { useBackend } from './BackendContext';
import { ImageSource } from './Backend';
import { Source } from './Source';
import { Transform } from './Transform';

interface OwnProps {
  baseUrl: string;
  transforms: Transform[];
  fallback: Transform;
}

export function Depiction(props: OwnProps) {
  const backend = useBackend();
  const { fallback, imgSrcs } = backend.parse(
    props.baseUrl,
    props.transforms,
    props.fallback
  );
  const sourcesByMimeType = rankMimeTypes(groupBy(imgSrcs, 'mimeType'));

  return (
    <picture>
      {sourcesByMimeType.map(renderSource)}
      <img src={fallback.url} />
    </picture>
  );
}

function renderSource([mimeType, imgSrcs]: [string, ImageSource[]]) {
  return <Source imgSrcs={imgSrcs} mimeType={mimeType} />;
}

const imageMimeTypes = [
  'image/webp',
  'image/jp2',
  'image/jxr',
  'image/png',
  'image/jpg',
  'image/gif'
];

function rankMimeTypes<A>(byMimeType: {
  [mimeType: string]: A;
}): [string, A][] {
  return toPairs(byMimeType).sort(
    ([a], [b]) => imageMimeTypes.indexOf(b) - imageMimeTypes.indexOf(a)
  );
}
