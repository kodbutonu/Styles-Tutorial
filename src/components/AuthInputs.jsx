import { useState } from 'react';
import styled from 'styled-components';

const ControlContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  background-color:${({invalid})=>invalid?"#f87171":"#6b7280"}
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color:${({invalid})=>invalid?"#f87171":"#6b7280"};
`;

const Input = styled.input`
  padding: 0.5rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;

  &.invalid {
    border-color: red;
  }
`;

const Paragraph = styled.p`
  margin: 0;
`;

export default function AuthInputs() {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');
  const [submitted, setSubmitted] = useState(false);

  function handleInputChange(identifier, value) {
    if (identifier === 'email') {
      setEnteredEmail(value);
    } else {
      setEnteredPassword(value);
    }
  }

  function handleLogin() {
    setSubmitted(true);
  }

  const emailNotValid = submitted && !enteredEmail.includes('@');
  const passwordNotValid = submitted && enteredPassword.trim().length < 6;

  return (
    <div id="auth-inputs">
      <ControlContainer>
        <div className="controls">
          <Paragraph className='paragraph'>
            <Label className={emailNotValid ? 'invalid' : ''}>Email</Label>
            <Input
              type="email"
              className={emailNotValid ? 'invalid' : undefined}
              onChange={(event) => handleInputChange('email', event.target.value)}
            />
          </Paragraph>
          <Paragraph className='paragraph'>
            <Label className={passwordNotValid ? 'invalid' : ''}>Password</Label>
            <Input
              type="password"
              className={passwordNotValid ? 'invalid' : undefined}
              onChange={(event) =>
                handleInputChange('password', event.target.value)
              }
            />
          </Paragraph>
        </div>
        <div className="actions">
          <button type="button" className="text-button">
            Create a new account
          </button>
          <button className='button' onClick={handleLogin}>Sign In</button>
        </div>
      </ControlContainer>
    </div>
  );
}
