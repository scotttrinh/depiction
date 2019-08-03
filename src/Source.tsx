import * as React from 'react';

import { ImageSource } from './Backend';

interface OwnProps {
  imgSrcs: ImageSource[];
  mimeType: string;
}

function generateSrcsetFrom(
  imgSrcs: ImageSource[]
): string {
  return imgSrcs.map((imgSrc: ImageSource): string => {
    const descriptorSuffix =
      imgSrc.descriptor.type === 'PixelDensity' ? 'x' : 'w';
    return `${imgSrc.url} ${imgSrc.descriptor.value}${descriptorSuffix}`;
  }).join(', ');
}

export function Source({ imgSrcs, mimeType }: OwnProps) {
  const srcset = generateSrcsetFrom(imgSrcs);
  return <source type={mimeType} srcSet={srcset} />;
}
