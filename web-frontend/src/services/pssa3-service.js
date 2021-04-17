import { BASE_URL } from './env';
import { Http, getToken } from '../common/utils';

const base = `${BASE_URL}/analytics/pssa3`;
// const base = `${BASE_URL}/hello`;
const http = Http(base);

const mockData ={ "data":[
{
    brand:"asus",
    model: [
      "ZenFone Max"
    ]},{ 
    brand:"htc",
    model: [
      "Desire 530", 
      "HTC One M7", 
      "HTC One M8", 
      "HTC One M9"
    ]},
    { 
    brand:"huwawei",model: [
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
    ]}, 
    {brand:"iphone",
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
    ]}, 
    {brand:"lg",
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
    ]}, 
    {brand:"motorola",model: [
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
    ]}, 
    {brand:"nokia",model: [
      "Nokia 4.2", 
      "Nokia 7.1", 
      "Nokia 7.2", 
      "Nokia 8.3"
    ]}, 
    {brand:"oneplus",model: [
      "OnePlus 7 Pro", 
      "OnePlus 7T", 
      "OnePlus 6", 
      "OnePlus 8 Pro", 
      "OnePlus 8T", 
      "Nord N100", 
      "OnePlus 6T"
    ]}, 
    {brand:"pixel",model: [
      "Pixel 4 XL", 
      "Pixel 3 XL", 
      "Pixel 3a", 
      "Pixel 4a", 
      "Pixel 5", 
      "Pixel 2 XL", 
      "Pixel 4 ", 
      "Pixel 3", 
      "Pixel 2"
    ]}, 
    {brand:"realme",model: [
      "Realme 6", 
      "Realme 6 Pro"
    ]}, 
    {brand:"samsung",model: [
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
    ]}, 
    {brand:"sony",
    model: [
      "Xperia 10", 
      "Xperia 1", 
      "Xperia L1", 
      "Xperia XZ2", 
      "Xperia XZ Premium"
    ]}, 
    {brand:"xiaomi",model: [
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

],}
const mockValue={"data":[
   {
      model:"iphone7",
      feature:"battery",
      feature_count: 17, 
      feature_neg: 17.647058823529413, 
      feature_pol: 64.70588235294117, 
      feature_pos: 82.35294117647058
    }, 
      {model:"iphone7",
        feature:"camera",
        feature_count: 8, 
      feature_neg: 25.0, 
      feature_pol: 50.0, 
      feature_pos: 75.0
    },
      {
        model:"iphone7",
        feature:"display", 
      feature_count: 23, 
      feature_neg: 17.391304347826086, 
      feature_pol: 65.21739130434783, 
      feature_pos: 82.6086956521739
    },
      {
        model:"iphone7",
        feature:"face-recognition", 
      feature_count: 0, 
      feature_neg: 0, 
      feature_pol: 0, 
      feature_pos: 0
    },
      {model:"iphone7",
        feature:"finger-print", 
      feature_count: 0, 
      feature_neg: 0, 
      feature_pol: 0, 
      feature_pos: 0},]}

export const getPhones = async () => mockData;

// export const analyseFeatures = async (data) => {
// const token = getToken();
// http.post({ data, token });
// };
export const analysePhones = async () => mockValue;