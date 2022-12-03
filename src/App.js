import './App.css';
import Balance from './components/Balance';
import Dropdown from './components/Dropdown';
import Userinfo from './components/Userinfo'
import { useState } from 'react';
import Transactions from './components/Transactions';
import ScheduledTransactions from './components/ScheduledTransactions';
import Table from './components/Table';

function App() {

  return (
    <div className="App">
      <Balance />
      <Dropdown />
      <Userinfo />
    <div className="App" style={{ width: '100%', height: '100%' }}>
      <Table />
    </div>
  );
}

export default App;