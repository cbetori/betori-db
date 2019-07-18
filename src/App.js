import React from 'react';
import logo from './logo.svg';
import './App.css';
import Funds from './components/funds'
import { DatePicker } from 'antd'


function App() {
  return (
    <div>
      <Funds />
    <DatePicker />
    </div>
  );
}

export default App;
