import React from 'react';
import ReactWordcloud from 'react-wordcloud';

const words = [
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
    value: 17,
  },
];

class WordCloud extends React.Component {
  render() {
    return <ReactWordcloud words={words} />;
  }
}

export default WordCloud;
