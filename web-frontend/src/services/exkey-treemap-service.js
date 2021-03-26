import { BASE_URL } from './env';
import { Http } from '../common/utils';
import axios from 'axios';


const base = `${BASE_URL}/exkey`;
// const base = `${BASE_URL}/hello`;
const http = Http(base);

const exkey_mock_otherKeywords = {
  data: {
    'otherKeywords': [
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
        value:98,
      },
      {
        keyword:"Snap Dragon chip",
        value:85,
      },  {
        keyword:"wonderful",
        value:10,
      },
      {
        keyword:"gorilla screen2",
        value:10,
      },
      {
        keyword:"onscreen fingerprint2",
        value:5,
      },    
      {
        keyword:"108Mp camera2",
        value:15,
      },
      {
        keyword:"facial recognition2",
        value:50,
      },
      {
        keyword:"Good Storage2",
        value:41,
      },
      {
        keyword:"LCD Display2",
        value:100,
      }, 
      {
        keyword:"Budget2",
        value:98,
      },
      {
        keyword:"Snap Dragon chip2",
        value:85,
      },  {
        keyword:"wonderful2",
        value:10,
      },
    ],

  status: 1,
    },
}

// export const getTrendingFeatures = async () => http.get();

export const trendz = async () => exkey_mock_otherKeywords;
