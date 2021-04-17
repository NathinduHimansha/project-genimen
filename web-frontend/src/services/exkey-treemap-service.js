import { BASE_URL } from './env';
import { Http } from '../common/utils';
import axios from 'axios';

const base = `${BASE_URL}/analytics/exkey`;
const http = Http(base);

const exkey_mock_otherKeywords = {
  series: [
    {
      data: [
        {
          x: 'Screen',
          y: 200,
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
          x: 'Notch1',
          y: 2002,
        },
      ],
      status: 1,
    },
  ],
};

// export const getTrendingFeatures = async () => http.get();

export const otherKeywordsTrend = async () => exkey_mock_otherKeywords;
