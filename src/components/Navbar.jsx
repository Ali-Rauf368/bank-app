
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  background-color: #007bff;
  padding: 1rem;
  display: flex;
  justify-content: center;
`;

const NavLink = styled(Link)`
  margin: 0 1rem;
  color: white;
  text-decoration: none;
  font-size: 1.2rem;

  &:hover {
    text-decoration: underline;
  }
`;

function Navbar() {
  return (
    <Nav>
      <NavLink to="/dashboard">Dashboard</NavLink>
      <NavLink to="/deposit">Deposit</NavLink>
      <NavLink to="/withdraw">Withdraw</NavLink>
      <NavLink to="/">Logout</NavLink>
    </Nav>
  );
}

export default Navbar;
