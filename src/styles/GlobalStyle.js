import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Inter', sans-serif;
    background-color: #f4f6f9;
    color: #333;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    line-height: 1.6;
  }

  a {
    text-decoration: none;
    color: #007bff;
    font-weight: bold;
    transition: color 0.3s ease;
  }

  a:hover {
    color: #0056b3;
  }

  h1, h2, h3 {
    margin-bottom: 1rem;
    color: #222;
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
  }

  input {
    padding: 1rem;
    margin: 0.5rem 0;
    width: 100%;
    max-width: 350px;
    border: 2px solid #ddd;
    border-radius: 8px;
    font-size: 1.1rem;
    transition: border-color 0.3s;

    &:focus {
      border-color: #007bff;
      outline: none;
    }
  }

  button {
    padding: 1rem 1.5rem;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    font-size: 1.1rem;
    transition: background-color 0.3s ease, transform 0.2s ease;

    &:hover {
      background-color: #0056b3;
      transform: translateY(-3px);
    }

    &:active {
      transform: translateY(0);
    }
  }

  .container {
    max-width: 800px;
    width: 100%;
    background-color: white;
    padding: 2rem;
    border-radius: 12px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  }
`;
