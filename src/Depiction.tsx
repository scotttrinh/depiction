import React from 'react';
import groupBy from 'lodash.groupby';
import toPairs from 'lodash.topairs';
import { useBackend } from './BackendContext';
import { ImageSource } from './Backend';
import { Source } from './Source';
import { Transform } from './Transform';

interface OwnProps {
  className?: string;
  styles?: React.CSSProperties;
  baseUrl: string;
  transforms: Transform[];
  fallback: Transform;
  size?: number;
}

const renderSource = (
  [mimeType, imgSrcs]: [string, ImageSource[]],
  index: number
) => <Source key={index} imgSrcs={imgSrcs} mimeType={mimeType} />;

export function Depiction(props: OwnProps) {
  const backend = useBackend();
  const { fallback, imgSrcs } = backend.parse(
    props.baseUrl,
    props.transforms,
    props.fallback,
    props.size
  );
  const sourcesByMimeType = rankMimeTypes(groupBy(imgSrcs, 'mimeType'));

  return (
    <picture>
      {sourcesByMimeType.map(renderSource)}
      <img
        src={fallback.url}
        className={props.className}
        style={props.styles || {}}
      />
    </picture>
  );
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
