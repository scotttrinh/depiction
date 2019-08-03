import * as React from 'react';
import { render, cleanup } from '@testing-library/react';
import { BackendProvider, ImgixBackend, Depiction, Transform } from '../src/index';

function renderWithImgix() {
  const fallback: Transform = {
    width: 500,
    mimeType: 'image/jpeg'
  };
  const transforms: Transform[] = [
    { width: 500, density: 1, mimeType: 'image/jpeg' },
    { width: 500, density: 2, mimeType: 'image/jpeg' },
    { width: 500, density: 3, mimeType: 'image/jpeg' },
    { width: 500, density: 1, mimeType: 'image/webp' },
    { width: 500, density: 2, mimeType: 'image/webp' },
    { width: 500, density: 3, mimeType: 'image/webp' },
    { width: 500, density: 1, mimeType: 'image/jp2' },
    { width: 500, density: 2, mimeType: 'image/jp2' },
    { width: 500, density: 3, mimeType: 'image/jp2' },
  ]
  const utils = render(
    <BackendProvider backend={ImgixBackend}>
      <Depiction baseUrl='//test.com/foo' fallback={fallback} transforms={transforms} />
    </BackendProvider>
  );

  return {
    ...utils
  };
}

afterEach(cleanup);

test('renders the fallback', async () => {
  const utils = renderWithImgix();
});
