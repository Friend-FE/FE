import React, { useState } from 'react';
import styled from 'styled-components';

const StyledCheckbox = styled.input`
  appearance: none;
  width: 20px;
  height: 20px;
  border: 2px solid #3498db;
  border-radius: 50%;
  outline: none;
  position: relative;
  
  &:checked {
    &::before {
      content: "\\2713"; /* Unicode for checkmark (V) */
      font-size: 16px;
      color: #3498db;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
`;

const CheckboxContainer = styled.div`
  display: flex;
  margin-top: 10px;
  margin-bottom : 20px;
  align-items: center;
`;

const CheckboxLabel = styled.label`
  margin-left: 8px;
`;

const CircleCheckbox = ({ options }) => {
  const [checkedOption, setCheckedOption] = useState(null);

  const handleCheckboxChange = (option) => {
    setCheckedOption(option);
  };

  return (
    <div>
      {options.map((option, index) => (
        <CheckboxContainer key={index}>
          <StyledCheckbox
            type="checkbox"
            checked={checkedOption === option}
            onChange={() => handleCheckboxChange(option)}
          />
          <CheckboxLabel>{option}</CheckboxLabel>
        </CheckboxContainer>
      ))}
    </div>
  );
};

export default CircleCheckbox;
