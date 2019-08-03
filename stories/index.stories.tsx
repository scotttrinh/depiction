import React from 'react';

import { storiesOf } from '@storybook/react';
import {
  BackendProvider,
  PassthroughBackend,
  Depiction,
  TransformWithUrl
} from '../src/index';

function renderWithPassthrough(size?: number) {
  const fallback: TransformWithUrl = {
    width: 500,
    mimeType: 'image/jpeg',
    url: 'https://assets.imgix.net/examples/pione.jpg?w=500&fm=jpg'
  };
  const transforms: TransformWithUrl[] = [
    {
      width: 50,
      density: 1,
      mimeType: 'image/webp',
      url: 'https://assets.imgix.net/examples/pione.jpg?w=50&fm=webp&dpr=1'
    },
    {
      width: 50,
      density: 2,
      mimeType: 'image/webp',
      url: 'https://assets.imgix.net/examples/pione.jpg?w=50&fm=webp&dpr=2'
    },
    {
      width: 50,
      density: 3,
      mimeType: 'image/webp',
      url: 'https://assets.imgix.net/examples/pione.jpg?w=50&fm=webp&dpr=3'
    },
    {
      width: 50,
      density: 1,
      mimeType: 'image/jp2',
      url: 'https://assets.imgix.net/examples/pione.jpg?w=50&fm=jp2&dpr=1'
    },
    {
      width: 50,
      density: 2,
      mimeType: 'image/jp2',
      url: 'https://assets.imgix.net/examples/pione.jpg?w=50&fm=jp2&dpr=2'
    },
    {
      width: 50,
      density: 3,
      mimeType: 'image/jp2',
      url: 'https://assets.imgix.net/examples/pione.jpg?w=50&fm=jp2&dpr=3'
    },
    {
      width: 50,
      density: 1,
      mimeType: 'image/jpeg',
      url: 'https://assets.imgix.net/examples/pione.jpg?w=50&fm=jpg&dpr=1'
    },
    {
      width: 50,
      density: 2,
      mimeType: 'image/jpeg',
      url: 'https://assets.imgix.net/examples/pione.jpg?w=50&fm=jpg&dpr=2'
    },
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
    },
    {
      width: 1200,
      density: 1,
      mimeType: 'image/webp',
      url: 'https://assets.imgix.net/examples/pione.jpg?w=1200&fm=webp&dpr=1'
    },
    {
      width: 1200,
      density: 2,
      mimeType: 'image/webp',
      url: 'https://assets.imgix.net/examples/pione.jpg?w=1200&fm=webp&dpr=2'
    },
    {
      width: 1200,
      density: 3,
      mimeType: 'image/webp',
      url: 'https://assets.imgix.net/examples/pione.jpg?w=1200&fm=webp&dpr=3'
    },
    {
      width: 1200,
      density: 1,
      mimeType: 'image/jp2',
      url: 'https://assets.imgix.net/examples/pione.jpg?w=1200&fm=jp2&dpr=1'
    },
    {
      width: 1200,
      density: 2,
      mimeType: 'image/jp2',
      url: 'https://assets.imgix.net/examples/pione.jpg?w=1200&fm=jp2&dpr=2'
    },
    {
      width: 1200,
      density: 3,
      mimeType: 'image/jp2',
      url: 'https://assets.imgix.net/examples/pione.jpg?w=1200&fm=jp2&dpr=3'
    },
    {
      width: 1200,
      density: 1,
      mimeType: 'image/jpeg',
      url: 'https://assets.imgix.net/examples/pione.jpg?w=1200&fm=jpg&dpr=1'
    },
    {
      width: 1200,
      density: 2,
      mimeType: 'image/jpeg',
      url: 'https://assets.imgix.net/examples/pione.jpg?w=1200&fm=jpg&dpr=2'
    },
    {
      width: 1200,
      density: 3,
      mimeType: 'image/jpeg',
      url: 'https://assets.imgix.net/examples/pione.jpg?w=1200&fm=jpg&dpr=3'
    }
  ];

  const styles: React.CSSProperties = {
    width: size || ''
  };
  return (
    <BackendProvider backend={PassthroughBackend}>
      <Depiction
        baseUrl='https://assets.imgix.net/examples/pione.jpg'
        fallback={fallback}
        transforms={transforms}
        size={size}
        styles={styles}
      />
    </BackendProvider>
  );
}

storiesOf('Passthrough, fixed size', module)
  .add('Thumbnail size', () => renderWithPassthrough(30))
  .add('Medium size', () => renderWithPassthrough(500))
  .add('Large size', () => renderWithPassthrough(1024))
  .add('Extra large size', () => renderWithPassthrough(2048));

storiesOf('Passthrough, unknown size', module)
  .add('Thumbnail size', () => renderWithPassthrough())
  .add('Medium size', () => renderWithPassthrough())
  .add('Large size', () => renderWithPassthrough())
  .add('Extra large size', () => renderWithPassthrough());
