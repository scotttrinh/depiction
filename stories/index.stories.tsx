import React from 'react';

import { storiesOf } from '@storybook/react';
import {
  BackendProvider,
  PassthroughBackend,
  Depiction,
  TransformWithUrl
} from '../src/index';

const withSize = {
  fallback: {
    width: 500,
    mimeType: 'image/jpeg',
    url: 'https://assets.imgix.net/examples/pione.jpg?w=500&fm=jpg'
  },
  transforms: [
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
  ]
};

const withoutSize = {
  fallback: {
    width: 500,
    mimeType: 'image/jpeg',
    url: 'https://assets.imgix.net/examples/pione.jpg?w=500&fm=jpg'
  },
  transforms: [
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
  ]
};

const render = (
  width: number,
  withSize: boolean,
  fallback: TransformWithUrl,
  transforms: TransformWithUrl[]
) => {
  const styles: React.CSSProperties = { width };
  return (
    <BackendProvider backend={PassthroughBackend}>
      <Depiction
        baseUrl='https://assets.imgix.net/examples/pione.jpg'
        fallback={fallback}
        transforms={transforms}
        size={withSize ? width : undefined}
        styles={styles}
      />
    </BackendProvider>
  );
};

storiesOf('Passthrough, fixed size', module)
  .add('Thumbnail size', () =>
    render(30, true, withSize.fallback, withSize.transforms)
  )
  .add('Medium size', () =>
    render(500, true, withSize.fallback, withSize.transforms)
  )
  .add('Large size', () =>
    render(1024, true, withSize.fallback, withSize.transforms)
  )
  .add('Extra large size', () =>
    render(2048, true, withSize.fallback, withSize.transforms)
  );

storiesOf('Passthrough, unknown size', module)
  .add('Thumbnail size', () =>
    render(30, false, withoutSize.fallback, withoutSize.transforms)
  )
  .add('Medium size', () =>
    render(500, false, withoutSize.fallback, withoutSize.transforms)
  )
  .add('Large size', () =>
    render(1024, false, withoutSize.fallback, withoutSize.transforms)
  )
  .add('Extra large size', () =>
    render(2048, false, withoutSize.fallback, withoutSize.transforms)
  );
