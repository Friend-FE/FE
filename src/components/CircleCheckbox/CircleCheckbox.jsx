import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const CircleCheckbox = ({ options, name, value, onChange }) => {
  const [selectedIndex, setSelectedIndex] = useState(value);

  useEffect(() => {
    setSelectedIndex(value);
  }, [value]);

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
            checked={selectedIndex === index}
            onChange={() => handleCheckboxChange(index)}
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
  width: 2vw;
  height: 2vw;
  border: 2px solid #3498db;
  border-radius: 50%;
  outline: none;
  position: relative;
  @media screen and (max-width: 768px) {
    font-size: 1vw;
    width: 3vw;
    height: 3vw;
  }
  
  &:checked {
    &::before {
      content: "\\2713"; /* Unicode for checkmark (V) */
      font-size: 1vw;
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
  margin-top: 1vw;
  margin-bottom: 2vw;
  align-items: center;
`;

const CheckboxLabel = styled.label`
  margin-left: 1vw;
`;
