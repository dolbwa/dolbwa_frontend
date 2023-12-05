'use client';

import styled from 'styled-components';
import palette from './palette';

export const StyledVerificationCodeForm = styled.form`
  .description {
    color: gray;
    font-size: 11px;
  }

  .verificationCodeInput,
  .verificationCodeSubmitButton {
    width: 100%;
    margin: 10px 0;
    padding: 15px 20px;
    border-radius: 5px;
    border: 1px solid lightgray;
    outline: none;
  }

  .verificationCodeInput:focus {
    border: 1px solid black;
  }

  .verificationCodeSubmitButton {
    background-color: ${palette.pink};
    color: white;
    font-weight: 600;
  }

  .verificationCodeSubmitButton:disabled {
    cursor: not-allowed;
    background-color: white;
    border: 1px solid lightgray;
    color: lightgray;
  }
`;
