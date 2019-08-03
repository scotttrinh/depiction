import * as React from 'react';
import { render, cleanup } from '@testing-library/react';
import {
  BackendProvider,
  PassthroughBackend,
  Depiction,
  TransformWithUrl
} from '../src/index';

function renderWithPassthrough() {
  const fallback: TransformWithUrl = {
    width: 500,
    mimeType: 'image/jpeg',
    url: '//test.com/foo?width=500&fm=jpg'
  };
  const transforms: TransformWithUrl[] = [
    {
      width: 500,
      density: 1,
      mimeType: 'image/jpeg',
      url: '//test.com/foo?width=500&fm=jpg&dpr=1'
    },
    {
      width: 500,
      density: 2,
      mimeType: 'image/jpeg',
      url: '//test.com/foo?width=500&fm=jpg&dpr=2'
    },
    {
      width: 500,
      density: 3,
      mimeType: 'image/jpeg',
      url: '//test.com/foo?width=500&fm=jpg&dpr=3'
    },
    {
      width: 500,
      density: 1,
      mimeType: 'image/webp',
      url: '//test.com/foo?width=500&fm=webp&dpr=1'
    },
    {
      width: 500,
      density: 2,
      mimeType: 'image/webp',
      url: '//test.com/foo?width=500&fm=webp&dpr=2'
    },
    {
      width: 500,
      density: 3,
      mimeType: 'image/webp',
      url: '//test.com/foo?width=500&fm=webp&dpr=3'
    },
    {
      width: 500,
      density: 1,
      mimeType: 'image/jp2',
      url: '//test.com/foo?width=500&fm=jp2&dpr=1'
    },
    {
      width: 500,
      density: 2,
      mimeType: 'image/jp2',
      url: '//test.com/foo?width=500&fm=jp2&dpr=2'
    },
    {
      width: 500,
      density: 3,
      mimeType: 'image/jp2',
      url: '//test.com/foo?width=500&fm=jp2&dpr=3'
    }
  ];
  const utils = render(
    <BackendProvider backend={PassthroughBackend}>
      <Depiction
        baseUrl='//test.com/foo'
        fallback={fallback}
        transforms={transforms}
      />
    </BackendProvider>
  );

  return {
    ...utils
  };
}

afterEach(cleanup);

test('renders the fallback', async () => {
  const utils = renderWithPassthrough();
});
