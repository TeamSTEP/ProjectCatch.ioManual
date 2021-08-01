import React, { CSSProperties } from 'react';

import { ParallaxBanner, BannerLayer } from 'react-scroll-parallax';

import BannerLayer1 from './keyart-layer-1.svg';
import BannerLayer10 from './keyart-layer-10.svg';
import BannerLayer11 from './keyart-layer-11.svg';
import BannerLayer12 from './keyart-layer-12.svg';
import BannerLayer13 from './keyart-layer-13.svg';
import BannerLayer14 from './keyart-layer-14.svg';
import BannerLayer2 from './keyart-layer-2.svg';
import BannerLayer3 from './keyart-layer-3.svg';
import BannerLayer4 from './keyart-layer-4.svg';
import BannerLayer5 from './keyart-layer-5.svg';
import BannerLayer6 from './keyart-layer-6.svg';
import BannerLayer7 from './keyart-layer-7.svg';
import BannerLayer8 from './keyart-layer-8.svg';
import BannerLayer9 from './keyart-layer-9.svg';

// note: not the best way to organize it, but I'm out of ideas ¯\_(ツ)_/¯

/*
const parallaxBannerLayers = [
  {
    amount: 1.0,
    expanded: false,
    children: (<Image src="/static/keyart/keyart-layer-1.svg" alt="layer-img" />),
  },
  {
    amount: 0.9,
    expanded: false,
    children: React.createElement('img', {
      style: { ...layerStyle, objectFit: 'contain' },
      alt: 'layer-img',
      src: '/static/keyart/keyart-layer-2.svg',
    }),
  },
  {
    amount: 0.8,
    expanded: false,
    children: React.createElement('img', {
      style: layerStyle,
      alt: 'layer-img',
      src: '/static/keyart/keyart-layer-3.svg',
    }),
  },
  {
    amount: 0.6,
    expanded: false,
    children: React.createElement('img', {
      style: layerStyle,
      alt: 'layer-img',
      src: '/static/keyart/keyart-layer-4.svg',
    }),
  },
  {
    amount: 0.6,
    expanded: false,
    children: React.createElement('img', {
      style: layerStyle,
      alt: 'layer-img',
      src: '/static/keyart/keyart-layer-5.svg',
    }),
  },
  {
    amount: 0.5,
    expanded: false,
    children: React.createElement('img', {
      style: layerStyle,
      alt: 'layer-img',
      src: '/static/keyart/keyart-layer-6.svg',
    }),
  },
  {
    amount: 0.4,
    expanded: false,
    children: React.createElement('img', {
      style: layerStyle,
      alt: 'layer-img',
      src: '/static/keyart/keyart-layer-7.svg',
    }),
  },
  {
    amount: 0.3,
    expanded: false,
    children: React.createElement('img', {
      style: layerStyle,
      alt: 'layer-img',
      src: '/static/keyart/keyart-layer-8.svg',
    }),
  },
  {
    amount: 0.2,
    expanded: false,
    children: React.createElement('img', {
      style: layerStyle,
      alt: 'layer-img',
      src: '/static/keyart/keyart-layer-9.svg',
    }),
  },
  {
    amount: 0.2,
    expanded: false,
    children: React.createElement('img', {
      style: layerStyle,
      alt: 'layer-img',
      src: '/static/keyart/keyart-layer-10.svg',
    }),
  },
  {
    amount: 0.1,
    expanded: false,
    children: React.createElement('img', {
      style: layerStyle,
      alt: 'layer-img',
      src: '/static/keyart/keyart-layer-11.svg',
    }),
  },
  {
    amount: 0.1,
    expanded: false,
    children: React.createElement('img', {
      style: layerStyle,
      alt: 'layer-img',
      src: '/static/keyart/keyart-layer-12.svg',
    }),
  },
  {
    amount: 0.1,
    expanded: false,
    children: React.createElement('img', {
      style: layerStyle,
      alt: 'layer-img',
      src: '/static/keyart/keyart-layer-13.svg',
    }),
  },
  {
    amount: 0.01,
    expanded: false,
    children: React.createElement('img', {
      style: layerStyle,
      alt: 'layer-img',
      src: '/static/keyart/keyart-layer-14.svg',
    }),
  },
] as BannerLayer[];
*/

const layerStyle: CSSProperties = {
  width: 'auto',
  minHeight: '100%',
};

const bannerLayerData = [
  {
    amount: 0,
    expanded: true,
    children: (<BannerLayer1 style={layerStyle} />),
  },
  {
    amount: 1.0,
    expanded: true,
    children: (<BannerLayer1 style={layerStyle} />),
  },
  {
    amount: 0.9,
    expanded: false,
    children: (<BannerLayer2 style={layerStyle} />),
  },
  {
    amount: 0.8,
    expanded: false,
    children: (<BannerLayer3 style={layerStyle} />),
  },
  {
    amount: 0.6,
    expanded: false,
    children: (<BannerLayer4 style={layerStyle} />),
  },
  {
    amount: 0.6,
    expanded: false,
    children: (<BannerLayer5 style={layerStyle} />),
  },
  {
    amount: 0.5,
    expanded: false,
    children: (<BannerLayer6 style={layerStyle} />),
  },
  {
    amount: 0.4,
    expanded: false,
    children: (<BannerLayer7 style={layerStyle} />),
  },
  {
    amount: 0.3,
    expanded: false,
    children: (<BannerLayer8 style={layerStyle} />),
  },
  {
    amount: 0.2,
    expanded: false,
    children: (<BannerLayer9 style={layerStyle} />),
  },
  {
    amount: 0.01,
    expanded: false,
    children: (<BannerLayer10 style={layerStyle} />),
  },
  {
    amount: 0.1,
    expanded: false,
    children: (<BannerLayer11 style={layerStyle} />),
  },
  {
    amount: 0.1,
    expanded: false,
    children: (<BannerLayer12 style={layerStyle} />),
  },
  {
    amount: 0.1,
    expanded: false,
    children: (<BannerLayer13 style={layerStyle} />),
  },
  {
    amount: 0.01,
    expanded: false,
    children: (<BannerLayer14 style={layerStyle} />),
  },
] as BannerLayer[];

// export const BannerArtLayers = [
//   <BannerLayer1 />,
//   <BannerLayer2 />,
//   <BannerLayer3 />,
//   <BannerLayer4 />,
//   <BannerLayer5 />,
//   <BannerLayer6 />,
//   <BannerLayer7 />,
//   <BannerLayer8 />,
//   <BannerLayer9 />,
//   <BannerLayer10 />,
//   <BannerLayer11 />,
//   <BannerLayer12 />,
//   <BannerLayer13 />,
//   <BannerLayer14 />,
// ];

const bannerStyle: CSSProperties = {
  margin: '0', top: '50%', left: '50%', transform: 'translate(-50%, 0%)',
};

// const bannerStyle: CSSProperties = {
//   display: 'flex', justifyContent: 'center', justifySelf: 'center', alignItems: 'center',
// };

export const ParallaxArtBackground = () => (
  <>
    <ParallaxBanner
      layers={bannerLayerData}
      className="min-h-screen"
      style={bannerStyle}
    />
  </>
);
