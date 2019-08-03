export interface Transform {
  width: number;
  height?: number;
  density?: number;
  mimeType: string;
  url?: string;
}

export interface TransformWithUrl extends Transform {
  url: string;
}

export function isTransformWithUrl(candidate: Transform): candidate is TransformWithUrl {
  return candidate.url !== undefined;
}


export function isTransformWithUrlArray(candidates: Transform[]): candidates is TransformWithUrl[] {
  return candidates.every(isTransformWithUrl)
}
