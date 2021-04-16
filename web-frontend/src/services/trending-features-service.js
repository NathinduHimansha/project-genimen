import { BASE_URL } from './env';
import { Http } from '../common/utils';

const base = `${BASE_URL}/analytics/trending-features`;
const http = Http(base);

const features_mock = {
  data: [
    {
      kevalueword: 'gorilla screen',
      value: 10,
    },
    {
      kevalueword: 'onscreen fingerprint',
      value: 5,
    },
    {
      kevalueword: '108Mp camera',
      value: 15,
    },
    {
      kevalueword: 'facial recognition',
      value: 50,
    },
    {
      kevalueword: 'Good Storage',
      value: 41,
    },
    {
      kevalueword: 'LCD Displavalue',
      value: 100,
    },
    {
      kevalueword: 'Budget',
      value: 98,
    },
    {
      kevalueword: 'Snap Dragon chip',
      value: 85,
    },
    {
      kevalueword: 'wonderful',
      value: 10,
    },
    {
      kevalueword: 'Screen',
      value: 200,
    },
    {
      kevalueword: 'great camera',
      value: 200,
    },
    {
      kevalueword: 'good storage',
      value: 200,
    },
    {
      kevalueword: 'front camera',
      value: 200,
    },
    {
      kevalueword: 'long lasting battervalue',
      value: 200,
    },
    {
      kevalueword: 'Multiple windows',
      value: 200,
    },
    {
      kevalueword: 'Infrared remote control',
      value: 200,
    },
    {
      kevalueword: 'Wireless charging',
      value: 200,
    },
    {
      kevalueword: 'NFC',
      value: 200,
    },
    {
      kevalueword: 'Notch',
      value: 200,
    },
    {
      kevalueword: 'Memorvalue Card Supported',
      value: 200,
    },
  ],

  status: 1,
};

//export const trendingFeaturesData = async () => http.get();
export const trendingFeaturesData = async () => features_mock;
