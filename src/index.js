import React from 'react';
import ReactDOM from 'react-dom/client';

import Clock from './components/Clock';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Clock locale="bn-BD" />
    <Clock locale="en-UK" />
    <Clock locale="en-IN" />
    <Clock locale="ko-KR" />
    <Clock locale="de-DE" />
    <Clock locale="ja-JP" />
  </>
);