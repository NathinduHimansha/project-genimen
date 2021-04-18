import { BASE_URL } from './env';
import { Http, getToken } from '../common/utils';

// const base = `${BASE_URL}/analytics/pssa3`;
 const base = `${BASE_URL}/ModelSentiment/models`; // This is the real url for backend getting list of models
//const base = `${BASE_URL}/ModelSentiment/analyze; // This is the real url for backend getting sentiment results
const http = Http(base);


// Use this mock data format
const mockData = {
    data: [
        {
            brand: "samsung",
            model: [
                "Galaxy A51",
                "Galaxy A70",
                "Galaxy J3 Prime",
                "Galaxy Note 10 Plus",
                "Galaxy Note 10 Lite",
                "Galaxy Note 5",
                "Note 9",
                "Galaxy s10 Plus",
                "Galaxy S10E",
                "Galaxy S20 Plus",
                "Galaxy S6",
                "Galaxy S7",
                "Galaxy S8 Plus",
                "Galaxy S9 Plus",
                "Galaxy XCover Pro",
                "Galaxy Z Flip",
                "Galaxy A50",
                "Galaxy A20S",
                "Galaxy A21S",
                "Galaxy A30S",
                "Galaxy A31",
                "Galaxy A11",
                "Galaxy A10S",
                "Galaxy A10E",
                "Galaxy A01 Core",
                "Galaxy Note 20",
                "Galaxy S9",
                "Galaxy Note 10",
                "Galaxy S10",
                "Galaxy S20",
                "Galaxy A01",
                "Galaxy S8",
                "Galaxy Note 8"
            ]
        },
        {
            brand: "oneplus",
            model: [
                "OnePlus 7 Pro",
                "OnePlus 7T",
                "OnePlus 6",
                "OnePlus 8 Pro",
                "OnePlus 8T",
                "Nord N100",
                "OnePlus 6T"
            ]
        },
        {
            brand: "pixel",
            model: [
                "Pixel 4 XL",
                "Pixel 3 XL",
                "Pixel 3a",
                "Pixel 4a",
                "Pixel 5",
                "Pixel 2 XL",
                "Pixel 4 ",
                "Pixel 3",
                "Pixel 2"
            ]
        },
        {
            brand: "huwawei",
            model: [
                "Honor 8S",
                "Honor 9X",
                "Huawei P30PRO",
                "Huawei E837",
                "Honor 10 Lite",
                "Huawei Honor 9",
                "Huawei Nova 5T",
                "Huawei P30 Lite",
                "Huawei Y5",
                "Huawei Mate 10 Pro"
            ]
        },
        {
            brand: "realme",
            "model": [
                "Realme 6",
                "Realme 6 Pro"
            ]
        },
        {
            brand: "sony",
            model: [
                "Xperia 10",
                "Xperia 1",
                "Xperia L1",
                "Xperia XZ2",
                "Xperia XZ Premium"
            ]
        },
        {
            brand: "asus",
            model: [
                "ZenFone Max"
            ]
        },
        {
            brand: "htc",
            model: [
                "Desire 530",
                "HTC One M7",
                "HTC One M8",
                "HTC One M9"
            ]
        },
        {
            brand: "lg",
            model: [
                "LG G6",
                "G7 ThinQ",
                "G8S ThinQ",
                "G8 ThinQ",
                "G8X ThinQ",
                "LG K22",
                "LG K40",
                "LG K50",
                "LG Q7 Plus",
                "LG Stylo",
                "LG V30",
                "LG V35 ThinQ",
                "LG V50 ThinQ",
                "LG V60 ThinQ"
            ]
        },
        {
            brand: "nokia",
            model: [
                "Nokia 4.2",
                "Nokia 7.1",
                "Nokia 7.2",
                "Nokia 8.3"
            ]
        },
        {
            brand: "motorola",
            model: [
                "Moto G 5G Plus",
                "Moto G7 Play",
                "Moto G8 Power",
                "Moto G9 Plus",
                "Moto One Hyper",
                "Motorola Edge",
                "Motorola Moto E6 Play",
                "Motorola Moto E7 Plus",
                "Motorola Moto G4 Play",
                "Motorola Moto G5 Plus",
                "Motorola Moto G5S",
                "Motorola Moto G5",
                "Motorola Moto G6 Play",
                "Motorola Moto G7",
                "Motorola Moto G7 Plus",
                "Motorola Moto G7 Power",
                "Motorola Moto G9",
                "Motorola Moto G9 Play",
                "Motorola Moto X4",
                "Motorola Moto Z Play",
                "Motorola One Action",
                "Motorola One Fusion",
                "Motorola One Vision",
                "Motorola One Zoom",
                "Motorola X4"
            ]
        },
        {
            brand: "xiaomi",
            model: [
                "Redmi 9",
                "Redmi 9A",
                "Redmi 9C",
                "Redmi Note 8",
                "Redmi Note 8 Pro",
                "Redmi Note 9",
                "Redmi Note 9 Pro",
                "Redmi Note 9S"
            ]
        },
        {
            brand: "iphone",
            model: [
                "iPhone 11",
                "iPhone 7 Plus",
                "iPhone 7",
                "iPhone 8 Plus",
                "iPhone 8",
                "iPhone SE",
                "iPhone X",
                "iPhone XR",
                "iPhone XS Max",
                "iPhone XS"
            ]
        }
    ],
    status: 1
}

const mockValue={
  data: [
    {
      feature: "battery",
      feature_count: 18,
      feature_neg: 11.11111111111111,
      feature_pol: 77.77777777777779,
      feature_pos: 88.88888888888889,
      model: "iPhone 11"
    },
    {
      feature:"camera",
      feature_count: 10,
      feature_neg: 0.0,
      feature_pol: 100.0,
      feature_pos: 100.0,
      model: "iPhone 11"
    },
    {
      feature: "display",
      feature_count: 30,
      feature_neg: 10.0,
      feature_pol: 80.0,
      feature_pos: 90.0,
      model: "iPhone 11"
    },
    {
      feature: "face recognition",
      feature_count: 0,
      feature_neg: 0,
      feature_pol: 0,
      feature_pos: 0,
      model: "iPhone 11"
    },
    {
      feature: "finger print",
      feature_count: 0,
      feature_neg: 0,
      feature_pol: 0,
      feature_pos: 0,
      model: "iPhone 11"
    },
    {
      feature: "speaker",
      feature_count: 6,
      feature_neg: 66.66666666666666,
      feature_pol: -33.33333333333333,
      feature_pos: 33.33333333333333,
      model: "iPhone 11"
    }
  ],
  status: 1
}

// export const getPhones = async () => mockData;
export const getPhones = async () => http.get(); // real backend data for model list


export const analysePhones = async () => mockValue;
// export const analysePhones = async (data) => { // real backend data for selected model
//     return http.post({ data: data});
// }

