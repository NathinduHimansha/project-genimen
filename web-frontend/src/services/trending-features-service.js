import { BASE_URL } from './env';
import { Http } from '../common/utils';

const base = `${BASE_URL}/analytics/trending-features`;
const http = Http(base);

const features_mock = {
  data: [
    {
      x: 'gorilla screennn',
      y: 100,
    },
    {
      x: 'onscreen fingerprint',
      y: 5,
    },
    {
      x: '1089Mp camera',
      y: 15,
    },
    {
      x: 'facial recognition',
      y: 50,
    },
    {
      x: 'Good Storage',
      y: 41,
    },
    {
      x: 'LCD Display',
      y: 100,
    },
    {
      x: 'Budget',
      y: 98,
    },
    {
      x: 'Snap Dragon chip',
      y: 85,
    },
    {
      x: 'wonderful',
      y: 10,
    },
    {
      x: 'Screen',
      y: 20,
    },
    {
      x: 'great camera',
      y: 200,
    },
    {
      x: 'good storage',
      y: 200,
    },
    {
      x: 'front camera',
      y: 200,
    },
    {
      x: 'long lasting battery',
      y: 200,
    },
    {
      x: 'Multiple windows',
      y: 200,
    },
    {
      x: 'Infrared remote control',
      y: 200,
    },
    {
      x: 'Wireless charging',
      y: 200,
    },
    {
      x: 'NFC',
      y: 200,
    },
    {
      x: 'Notch',
      y: 200,
    },
    {
      x: 'Memory Card Supported',
      y: 200,
    },
  ],

  status: 1,
};

//export const trendingFeaturesData = async () => http.get();
export const trendingFeaturesData = async () => features_mock;
