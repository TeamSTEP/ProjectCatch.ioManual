import React, { CSSProperties } from 'react';

import { ParallaxBanner, BannerLayer } from 'react-scroll-parallax';

import { Button } from '../button/Button';
import { HeroOneButton } from '../hero/HeroOneButton';
import { BannerArtLayers } from '../hero/keyart';
import { Section } from '../layout/Section';

const layerStyle: CSSProperties = {
  minWidth: '100%',
  height: '100%',
  objectFit: 'cover',
};

const keyArtBanner = BannerArtLayers.map((layer) => {
  const artLayer = {
    amount: 1.0,
    expanded: false,
    children: <div style={layerStyle}>{layer}</div>,
  } as BannerLayer;

  return artLayer;
});

/*
const parallaxBannerLayers = [
  {
    amount: 1.0,
    expanded: false,
    children: (<Image src="/assets/images/keyart/keyart-layer-1.svg" alt="layer-img" />),
  },
  {
    amount: 0.9,
    expanded: false,
    children: React.createElement('img', {
      style: { ...layerStyle, objectFit: 'contain' },
      alt: 'layer-img',
      src: '/assets/images/keyart/keyart-layer-2.svg',
    }),
  },
  {
    amount: 0.8,
    expanded: false,
    children: React.createElement('img', {
      style: layerStyle,
      alt: 'layer-img',
      src: '/assets/images/keyart/keyart-layer-3.svg',
    }),
  },
  {
    amount: 0.6,
    expanded: false,
    children: React.createElement('img', {
      style: layerStyle,
      alt: 'layer-img',
      src: '/assets/images/keyart/keyart-layer-4.svg',
    }),
  },
  {
    amount: 0.6,
    expanded: false,
    children: React.createElement('img', {
      style: layerStyle,
      alt: 'layer-img',
      src: '/assets/images/keyart/keyart-layer-5.svg',
    }),
  },
  {
    amount: 0.5,
    expanded: false,
    children: React.createElement('img', {
      style: layerStyle,
      alt: 'layer-img',
      src: '/assets/images/keyart/keyart-layer-6.svg',
    }),
  },
  {
    amount: 0.4,
    expanded: false,
    children: React.createElement('img', {
      style: layerStyle,
      alt: 'layer-img',
      src: '/assets/images/keyart/keyart-layer-7.svg',
    }),
  },
  {
    amount: 0.3,
    expanded: false,
    children: React.createElement('img', {
      style: layerStyle,
      alt: 'layer-img',
      src: '/assets/images/keyart/keyart-layer-8.svg',
    }),
  },
  {
    amount: 0.2,
    expanded: false,
    children: React.createElement('img', {
      style: layerStyle,
      alt: 'layer-img',
      src: '/assets/images/keyart/keyart-layer-9.svg',
    }),
  },
  {
    amount: 0.2,
    expanded: false,
    children: React.createElement('img', {
      style: layerStyle,
      alt: 'layer-img',
      src: '/assets/images/keyart/keyart-layer-10.svg',
    }),
  },
  {
    amount: 0.1,
    expanded: false,
    children: React.createElement('img', {
      style: layerStyle,
      alt: 'layer-img',
      src: '/assets/images/keyart/keyart-layer-11.svg',
    }),
  },
  {
    amount: 0.1,
    expanded: false,
    children: React.createElement('img', {
      style: layerStyle,
      alt: 'layer-img',
      src: '/assets/images/keyart/keyart-layer-12.svg',
    }),
  },
  {
    amount: 0.1,
    expanded: false,
    children: React.createElement('img', {
      style: layerStyle,
      alt: 'layer-img',
      src: '/assets/images/keyart/keyart-layer-13.svg',
    }),
  },
  {
    amount: 0.01,
    expanded: false,
    children: React.createElement('img', {
      style: layerStyle,
      alt: 'layer-img',
      src: '/assets/images/keyart/keyart-layer-14.svg',
    }),
  },
] as BannerLayer[];
*/

const Hero = () => (
  <div className="z-0 static">
    <ParallaxBanner layers={keyArtBanner} className="min-h-screen" />
    <Section yPadding="pt-20 pb-32">
      <HeroOneButton
        title={(
          <>
            {'The best landing page ever made\n'}
            <span className="text-primary-500">Witch One</span>
          </>
                  )}
        description="The Stealthy and Magical Battle-Royal"
        button={(
          <a target="_blank" href="https://teamstep.io/" rel="noopener noreferrer">
            <Button xl>Don&apos;t Pre-order now</Button>
          </a>
                  )}
      />
    </Section>
  </div>
);
export { Hero };
