import React, { useState } from 'react';
import styled from 'styled-components';

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  background-color: #f8f9fa;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
`;

const Form = styled.form`
  width: 100%;
  max-width: 400px;
  display: flex;
  flex-direction: column;
`;

const InputField = styled.input`
  padding: 1rem;
  margin: 0.75rem 0;
  border: 2px solid #ddd;
  border-radius: 8px;
  font-size: 1.1rem;
`;

const SubmitButton = styled.button`
  margin-top: 1.5rem;
  width: 100%;
  max-width: 400px;
`;

function Withdraw({ balance, onWithdraw }) {
  const [amount, setAmount] = useState('');

  const handleWithdraw = (e) => {
    e.preventDefault();
    onWithdraw(amount);
    setAmount('');
  };

  return (
    <FormWrapper>
      <h1>Withdraw Funds</h1>
      <h2>Current Balance: ${balance.toFixed(2)}</h2> 
      <Form onSubmit={handleWithdraw}>
        <InputField
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Enter withdraw amount"
        />
        <SubmitButton type="submit">Withdraw</SubmitButton>
      </Form>
    </FormWrapper>
  );
}

export default Withdraw;
