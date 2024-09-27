import React from 'react';
import styled from 'styled-components';

const DashboardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
`;

function Dashboard({ balance }) {
  return (
    <DashboardWrapper>
      <h1>Bank Dashboard</h1>
      <h2>Current Balance: ${balance.toFixed(2)}</h2>
    </DashboardWrapper>
  );
}

export default Dashboard;
