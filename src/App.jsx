import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Deposit from './components/Deposit';
import Withdraw from './components/Withdraw';

function App() {
  const [balance, setBalance] = useState(1000); // Initial balance

  const handleDeposit = (amount) => {
    setBalance(balance + parseFloat(amount));
  };

  const handleWithdraw = (amount) => {
    if (amount <= balance) {
      setBalance(balance - parseFloat(amount));
    } else {
      alert("Insufficient funds");
    }
  };

  return (
    <Router>
      <Navbar /> 
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard balance={balance} />} />
        <Route path="/deposit" element={<Deposit balance={balance} onDeposit={handleDeposit} />} />
        <Route path="/withdraw" element={<Withdraw balance={balance} onWithdraw={handleWithdraw} />} />
      </Routes>
    </Router>
  );
}

export default App;
