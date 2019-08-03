export interface Transform {
  mimeType: string;

  width?: number;
  density?: number;
  url?: string;
}

export interface TransformWithUrl extends Transform {
  url: string;
}

export function isTransformWithUrl(
  candidate: Transform
): candidate is TransformWithUrl {
  return candidate.url !== undefined;
}

export function isTransformWithUrlArray(
  candidates: Transform[]
): candidates is TransformWithUrl[] {
  return candidates.every(isTransformWithUrl);
}
