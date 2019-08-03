import { Transform } from './Transform';
import { Descriptor } from './Descriptor';

export interface ImageSource {
  mimeType: string;
  descriptor: Descriptor;
  url: string;
}

export interface Backend {
  parse: (
    baseUrl: string,
    transforms: Transform[],
    fallback: Transform,
    size?: number
  ) => { fallback: ImageSource; imgSrcs: ImageSource[] };
}
