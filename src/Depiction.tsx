import React from 'react';
import map from 'lodash.map';
import groupBy from 'lodash.groupby';
import { useBackend } from './BackendContext';
import { ImageSource } from './Backend';
import { Source } from './Source';
import { Transform } from './Transform';

interface OwnProps {
  baseUrl: string;
  transforms: Transform[];
  fallback: Transform;
}

function renderSource(imgSrcs: ImageSource[], mimeType: string) {
  return <Source imgSrcs={imgSrcs} mimeType={mimeType} />;
}

export function Depiction(props: OwnProps) {
  const backend = useBackend();
  const { fallback, imgSrcs } = backend.parse(
    props.baseUrl,
    props.transforms,
    props.fallback
  );

  return (
    <picture>
      {map(groupBy(imgSrcs, 'mimeType'), renderSource)}
      <img src={fallback.url} />
    </picture>
  );
}
