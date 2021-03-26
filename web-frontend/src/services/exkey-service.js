import { BASE_URL } from './env';
import { Http } from '../common/utils';
import axios from 'axios';

const base = `${BASE_URL}/exkey`;
// const base = `${BASE_URL}/hello`;
const http = Http(base);

const exkey_mock = {
  data: {
    'trend': [
      {
        keyword:"gorilla screen",
        value:10,
      },
      {
        keyword:"onscreen fingerprint",
        value:5,
      },    
      {
        keyword:"108Mp camera",
        value:15,
      },
      {
        keyword:"facial recognition",
        value:50,
      },
      {
        keyword:"Good Storage",
        value:41,
      },
      {
        keyword:"LCD Display",
        value:100,
      }, 
      {
        keyword:"Budget",
        value:250,
      },
      {
        keyword:"Snap Dragon chip",
        value:135,
      },  {
        keyword:"wonderful",
        value:10,
      },
    ],

  status: 1,
    },
}

export const getFeatures = async () => http.get();
// export const getFeatures = async () => http.post({ display: 'curved', fingerprint: 'onscreen' });

// export const analyseFeatures = async (data) => http.post(data);
export const analyseFeatures = async () => exkey_mock;
