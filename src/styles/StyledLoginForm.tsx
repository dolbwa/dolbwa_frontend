'use client';

import styled from 'styled-components';

export const StyledLoginForm = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  max-width: 800px;
  min-width: 300px;
  margin: 0 auto;
  padding: 30px;

  .title {
    font-size: 24px;
    font-weight: 600;
    line-height: 1.5;
  }

  .description {
    margin: 10px 0;
  }

  .phoneNumberInput,
  .phoneNumberSubmitButton {
    width: 100%;
    margin: 10px 0;
    padding: 15px 20px;
    border-radius: 5px;
    border: 1px solid lightgray;
    outline: none;
  }

  .phoneNumberInput:focus {
    border: 1px solid black;
  }

  .phoneNumberSubmitButton {
    background-color: white;
    font-weight: 600;
  }

  .phoneNumberSubmitButton:disabled {
    cursor: not-allowed;
    color: lightgray;
  }
`;
