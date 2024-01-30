// 회원가입 - 3에 쓰이는 원형 체크박스

import React, { useState } from 'react';
import styled from 'styled-components';

const CircleCheckbox = ({ options, name, value, onChange }) => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const handleCheckboxChange = (index) => {
    setSelectedIndex(index);
    onChange({ target: { name, value: index } });
  };

  return (
    <div>
      {options.map((option, index) => (
        <CheckboxContainer key={index}>
          <StyledCheckbox
            type="checkbox"
            checked={selectedIndex  === index}
            onChange={() =>handleCheckboxChange(index)}
          />
          <CheckboxLabel>{option}</CheckboxLabel>
        </CheckboxContainer>
      ))}
    </div>
  );
};

export default CircleCheckbox;

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
