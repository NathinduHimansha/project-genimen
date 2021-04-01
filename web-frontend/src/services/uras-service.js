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
        feature: 'display',
        type: 'curved',
        neg: 27.616515283397895,
        polarity: 16.698307763182083,
        pos: 44.314823046579974,
      },
      {
        feature: 'no display',
        type: 'curved',
        neg: 27.616515283397895,
        polarity: 16.698307763182083,
        pos: 44.314823046579974,
      },
      {
        feature: 'size',
        type: 'large',
        neg: 11.76470588235294,
        polarity: 52.94117647058823,
        pos: 64.70588235294117,
      },
    ],
    'phone-feature-polarity': [
      {
        feature: 'display',
        type: 'curved',
        neg: 28.634361233480178,
        phone: 'samsung-galaxy-s10+',
        polarity: 12.334801762114537,
        pos: 40.969162995594715,
      },
      {
        feature: 'display',
        featuretype: 'curved',
        neg: 24.166666666666668,
        phone: 'samsung-galaxy-s9+',
        polarity: 16.333333333333332,
        pos: 40.5,
      },
      {
        feature: 'display',
        featuretype: 'curved',
        neg: 44.44444444444444,
        phone: 'oneplus-7-pro',
        polarity: -5.55555555555555,
        pos: 38.88888888888889,
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
