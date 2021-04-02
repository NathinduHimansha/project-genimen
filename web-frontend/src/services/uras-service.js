import { BASE_URL } from './env';
import { Http, getToken } from '../common/utils';

const base = `${BASE_URL}/uras`;
// const base = `${BASE_URL}/hello`;
const http = Http(base);

const mock1 = [
  {
    feature: 'Display',
    types: ['Normal', 'Curved'],
  },
  {
    feature: 'Size',
    types: ['Normal', 'Large'],
  },
  {
    feature: 'Fingerprint',
    types: ['Onscreen', 'Rear'],
  },
  {
    feature: 'Headphone-Jack',
    types: ['Available', 'None'],
  },
];

const mock = {
  data: {
    'feature-sentiment-polarity': [
      {
        feature: 'fingerprint',
        'feature-type': 'onscreen',
        neg: 44.666666666666664,
        polarity: 0.6666666666666657,
        pos: 45.33333333333333,
        'total-review-count': 80,
      },
      {
        feature: 'size',
        'feature-type': 'large',
        neg: 11.76470588235294,
        polarity: 52.94117647058823,
        pos: 64.70588235294117,
        'total-review-count': 30,
      },
    ],
    'phone-feature-polarity': [
      {
        feature: 'size',
        'feature-type': 'curved',
        neg: 44,
        phone: 'oneplus-7-pro',
        polarity: 12,
        pos: 56,
        'review-count': 5,
      },
      {
        feature: 'size',
        'feature-type': 'curved',
        neg: 28,
        phone: 'samsung-galaxy-s10+',
        polarity: 44,
        pos: 72,
        'review-count': 5,
      },
      {
        feature: 'fingerprint',
        'feature-type': 'curved',
        neg: 64,
        phone: 'realme-8-pro',
        polarity: 28,
        pos: 36,
        'review-count': 5,
      },
      {
        feature: 'fingerprint',
        'feature-type': 'curved',
        neg: 14,
        phone: 'iphone-6s',
        polarity: 72,
        pos: 86,
        'review-count': 5,
      },
    ],
  },
  status: 1,
};

// export const getFeatures = async () => http.get();
export const getFeatures = async () => mock1;

// export const analyseFeatures = async (data) => {
// const token = getToken();
// http.post({ data, token });
// };
export const analyseFeatures = async () => mock;
