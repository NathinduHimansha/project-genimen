import { BASE_URL } from './env';
import { Http } from '../common/utils';
import axios from 'axios';


const base = `${BASE_URL}/exkey`;
const http = Http(base);

const exkey_mock_otherKeywords = {
  series: [
    {
      data: [
        {
          x: 'Screen',
          y: 218,
        },
        {
          x: 'great camera',
          y: 149,
        },
        {
          x: 'good storage',
          y: 184,
        },
        {
          x: 'front camera',
          y: 55,
        },
        {
          x: 'long lasting battery',
          y: 84,
        },
        {
          x: 'Multiple windows',
          y: 31,
        },
        {
          x: 'Infrared remote control',
          y: 70,
        },
        {
          x: 'Wireless charging',
          y: 30,
        },
        {
          x: 'NFC',
          y: 44,
        },
        {
          x: 'Notch',
          y: 68,
        },
        {
          x: 'Memory Card Supported',
          y: 28,
        },
        {
          x: 'Dual Sim port',
          y: 19,
        },
        {
          x: 'MP Triple Rear camera',
          y: 29,
        },
      ],
    },
  ],

  status: 1,
    
}

// export const getTrendingFeatures = async () => http.get();

export const otherKeywordsTrend = async () => exkey_mock_otherKeywords;
