import React from 'react';
import { useBackend } from './BackendContext';
import { ImageSource } from './Backend';
import { Source } from './Source';
import { Transform } from './Transform';
import { rankMimeTypes } from './rank-mime-types';

interface OwnProps {
  baseUrl: string;
  transforms: Transform[];
  fallback: Transform;

  className?: string;
  styles?: React.CSSProperties;
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
  const sourcesByMimeType = rankMimeTypes(imgSrcs);

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

