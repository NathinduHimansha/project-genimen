import { BASE_URL } from './env';
import { Http } from '../common/utils';
import axios from 'axios';

const base = `${BASE_URL}/uras`;
// const base = `${BASE_URL}/hello`;
const http = Http(base);

const mock = {
  data: {
    'feature-sentiment-polarity': [
      {
        feature: 'display',
        'feature-type': 'curved',
        neg: 27.616515283397895,
        polarity: 16.698307763182083,
        pos: 44.314823046579974,
      },
      {
        feature: 'size',
        'feature-type': 'large',
        neg: 11.76470588235294,
        polarity: 52.94117647058823,
        pos: 64.70588235294117,
      },
    ],
    'phone-feature-polarity': [
      {
        feature: 'display',
        'feature-type': 'curved',
        neg: 28.634361233480178,
        phone: 'samsung-galaxy-s10+',
        polarity: 12.334801762114537,
        pos: 40.969162995594715,
      },
      {
        feature: 'display',
        'feature-type': 'curved',
        neg: 24.166666666666668,
        phone: 'samsung-galaxy-s9+',
        polarity: 16.333333333333332,
        pos: 40.5,
      },
      {
        feature: 'display',
        'feature-type': 'curved',
        neg: 44.44444444444444,
        phone: 'oneplus-7-pro',
        polarity: -5.55555555555555,
        pos: 38.88888888888889,
      },
    ],
  },
  status: 1,
};

export const getFeatures = async () => http.get();
// export const getFeatures = async () => http.post({ display: 'curved', fingerprint: 'onscreen' });

// export const analyseFeatures = async (data) => http.post(data);
export const analyseFeatures = async () => mock;
