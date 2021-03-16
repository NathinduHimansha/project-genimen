import React from 'react';
import ReactWordcloud from 'react-wordcloud';

const callbacks = {
  getWordColor: (word) => (word.value > 50 ? ' DarkSlateGray' : 'Black'),
  onWordClick: console.log,
  onWordMouseOver: console.log,
};
const options = {
  rotations: 2,
  rotationAngles: [360, 360, 360],
};
const size = [650, 500];

const words = [
  {
    text: '108mp camera',
    value: 64,
  },
  {
    text: 'Storage',
    value: 150,
  },
  {
    text: 'fingerprint',
    value: 450,
  },
  {
    text: 'good',
    value: 20,
  },
  {
    text: 'bad',
    value: 64,
  },
  {
    text: 'wonderful',
    value: 5,
  },
  {
    text: 'thought',
    value: 100,
  },
  {
    text: 'face recognition',
    value: 365,
  },
  {
    text: 'fine',
    value: 90,
  },
  {
    text: 'mistake',
    value: 23,
  },
  {
    text: 'snap dragon chip',
    value: 1026,
  },
  {
    text: 'bad',
    value: 80,
  },
  {
    text: 'told',
    value: 164,
  },
  {
    text: 'mistake',
    value: 11,
  },
  {
    text: 'thought',
    value: 56,
  },
  {
    text: 'bad',
    value: 22,
  },
  {
    text: 'told',
    value: 64,
  },
  {
    text: 'mistake',
    value: 11,
  },
  {
    text: 'thought',
    value: 206,
  },
  {
    text: 'bad',
    value: 8,
  },
  {
    text: 'told',
    value: 64,
  },
  {
    text: 'mistake',
    value: 451,
  },
  {
    text: 'thought',
    value: 16,
  },
  {
    text: 'bad',
    value: 6,
  },
  {
    text: 'told',
    value: 64,
  },
  {
    text: 'mistake',
    value: 76,
  },
  {
    text: 'thought',
    value: 16,
  },
  {
    text: 'bad',
    value: 17,
  },
  {
    text: 'told',
    value: 64,
  },
  {
    text: 'mistake',
    value: 9,
  },
  {
    text: 'thought',
    value: 16,
  },
  {
    text: 'bad',
    value: 17,
  },
  {
    text: 'told',
    value: 64,
  },
  {
    text: 'mistake',
    value: 11,
  },
  {
    text: 'thought',
    value: 16,
  },
  {
    text: 'bad',
    value: 98,
  },
  {
    text: 'told',
    value: 10,
  },
  {
    text: 'mistake',
    value: 5,
  },
  {
    text: 'thought',
    value: 23,
  },
  {
    text: 'bad',
    value: 14,
  },
  {
    text: 'told',
    value: 16,
  },
  {
    text: 'mistake',
    value: 14,
  },
  {
    text: 'thought',
    value: 78,
  },
  {
    text: 'bad',
    value: 14,
  },
  {
    text: 'told',
    value: 17,
  },
  {
    text: 'mistake',
    value: 19,
  },
  {
    text: 'thought',
    value: 23,
  },
  {
    text: 'bad',
    value: 25,
  },
  {
    text: 'told',
    value: 34,
  },
  {
    text: 'mistake',
    value: 67,
  },
  {
    text: 'thought',
    value: 112,
  },
  {
    text: 'Wonderful',
    value: 890,
  },
];

class WordCloud extends React.Component {
  render() {
    return <ReactWordcloud callbacks={callbacks} options={options} size={size} words={words} />;
  }
}

export default WordCloud;
