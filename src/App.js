import React from 'react';
import logo from './logo.svg';
import './App.css';
import Funds from './components/funds'
import { DatePicker } from 'antd'
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'


function App() {
  return (
    <div>
      <Funds />
    <DatePicker />
    </div>
  );
}

export default App;
