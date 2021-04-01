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
        neg: 28.634361233480178,
        phone: 'samsung-galaxy-s10+',
        polarity: 12.334801762114537,
        pos: 40.969162995594715,
        'review-count': 5,
      },
      {
        feature: 'fingerprint',
        'feature-type': 'curved',
        neg: 24.166666666666668,
        phone: 'samsung-galaxy-s9+',
        polarity: 16.333333333333332,
        pos: 40.5,
        'review-count': 5,
      },
      {
        feature: 'fingerprint',
        'feature-type': 'curved',
        neg: 24.166666666666668,
        phone: 'samsung-galaxy-s9+',
        polarity: 16.333333333333332,
        pos: 80.5,
        'review-count': 5,
      },
      {
        feature: 'size',
        'feature-type': 'curved',
        neg: 44.44444444444444,
        phone: 'oneplus-7-pro',
        polarity: -5.55555555555555,
        pos: 38.88888888888889,
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
