import * as React from 'react';

import { storiesOf } from '@storybook/react';
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
    url: 'https://assets.imgix.net/examples/pione.jpg?w=500&fm=jpg'
  };
  const transforms: TransformWithUrl[] = [
    {
      width: 500,
      density: 1,
      mimeType: 'image/webp',
      url: 'https://assets.imgix.net/examples/pione.jpg?w=500&fm=webp&dpr=1'
    },
    {
      width: 500,
      density: 2,
      mimeType: 'image/webp',
      url: 'https://assets.imgix.net/examples/pione.jpg?w=500&fm=webp&dpr=2'
    },
    {
      width: 500,
      density: 3,
      mimeType: 'image/webp',
      url: 'https://assets.imgix.net/examples/pione.jpg?w=500&fm=webp&dpr=3'
    },
    {
      width: 500,
      density: 1,
      mimeType: 'image/jp2',
      url: 'https://assets.imgix.net/examples/pione.jpg?w=500&fm=jp2&dpr=1'
    },
    {
      width: 500,
      density: 2,
      mimeType: 'image/jp2',
      url: 'https://assets.imgix.net/examples/pione.jpg?w=500&fm=jp2&dpr=2'
    },
    {
      width: 500,
      density: 3,
      mimeType: 'image/jp2',
      url: 'https://assets.imgix.net/examples/pione.jpg?w=500&fm=jp2&dpr=3'
    },
    {
      width: 500,
      density: 1,
      mimeType: 'image/jpeg',
      url: 'https://assets.imgix.net/examples/pione.jpg?w=500&fm=jpg&dpr=1'
    },
    {
      width: 500,
      density: 2,
      mimeType: 'image/jpeg',
      url: 'https://assets.imgix.net/examples/pione.jpg?w=500&fm=jpg&dpr=2'
    },
    {
      width: 500,
      density: 3,
      mimeType: 'image/jpeg',
      url: 'https://assets.imgix.net/examples/pione.jpg?w=500&fm=jpg&dpr=3'
    }
  ];
  return (
    <BackendProvider backend={PassthroughBackend}>
      <Depiction
        baseUrl='https://assets.imgix.net/examples/pione.jpg'
        fallback={fallback}
        transforms={transforms}
      />
    </BackendProvider>
  );
}

storiesOf('Passthrough', module).add('Thumbnail size', renderWithPassthrough);
