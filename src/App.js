import './App.css';
import Balance from './components/Balance';
import Dropdown from './components/Dropdown';
import Userinfo from './components/Userinfo'
import { useState } from 'react';
import Transactions from './components/Transactions';
import ScheduledTransactions from './components/ScheduledTransactions';
import Table from './components/Table';
import Dashboard from './Dashboard';

function App() {

  return (
    <div className="App">
      <Dashboard />
    </div>
  );
}

export default App;