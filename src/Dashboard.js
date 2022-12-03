import './App.css';
import Balance from './components/Balance';
import Dropdown from './components/Dropdown';
import Userinfo from './components/Userinfo'
import { useState } from 'react';
import Transactions from './components/Transactions';
import ScheduledTransactions from './components/ScheduledTransactions';
import Table from './components/Table';

function Dashboard() {

  return (
    <div>
      <Balance />
      <Dropdown />
      <Userinfo />
    <div className="App" style={{ width: '100%', height: '100%' }}>
      <Table />
    </div>
    </div>
  );
}

export default Dashboard;