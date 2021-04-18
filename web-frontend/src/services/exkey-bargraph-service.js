import { BASE_URL } from './env';
import { Http } from '../common/utils';
import axios from 'axios';


const base = `${BASE_URL}/analytics/exkey`;
// const base = `${BASE_URL}/hello`;
const http = Http(base);

const exkey_mock = {
  "data": {
    "trend": [
      {
        "keyword": "phone",
        "value": 4.432264460956905
      },
      {
        "keyword": "great",
        "value": 0.9543828672124888
      },
      {
        "keyword": "good",
        "value": 0.8036336756107216
      },
      {
        "keyword": "battery",
        "value": 0.7662529209188589
      },
      {
        "keyword": "screen",
        "value": 0.6840643075101335
      },
      {
        "keyword": "like",
        "value": 0.6757963992558883
      },
      {
        "keyword": "new",
        "value": 0.657403806741148
      },
      {
        "keyword": "one",
        "value": 0.5966907346877288
      },
      {
        "keyword": "de",
        "value": 0.5323341776409135
      },
     
    ],
    status:1
  }
}

//export const getTrendingFeatures = async () => http.get();

export const trendz = async () => exkey_mock;
