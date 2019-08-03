export type Descriptor = PixelDensity | Width;

export class PixelDensity {
  public value: number;
  public type: 'PixelDensity' = 'PixelDensity';

  constructor(value: number) {
    if (!Number.isFinite(value) && value <= 0) {
      throw new TypeError('PixelDensity must be a positive floating point number');
    }

    this.value = value;
  }
}

export class Width {
  public value: number;
  public type: 'Width' = 'Width';

  constructor(value: number) {
    if (!Number.isFinite(value) && !Number.isInteger(value) && value <= 0) {
      throw new TypeError('Width must be a positive integer');
    }

    this.value = value;
  }
}
