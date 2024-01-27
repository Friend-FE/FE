import React, { useState } from 'react';
import styled from 'styled-components';

const MAX_LENGTH = 110;

const LimitInputForm = () => {
  const [text, setText] = useState('');

  const handleTextChange = (e) => {
    const value = e.target.value;
    if (value.length <= MAX_LENGTH) {
      setText(value);
    }
  };

  return (
    <Container>
      <Textarea value={text} onChange={handleTextChange} placeholder="최대 110자까지 입력할 수 있습니다." />
      <Counter>{`${text.length} / ${MAX_LENGTH}`}</Counter>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Textarea = styled.textarea`
  height: 40px;
  padding: 8px;
  margin-bottom: 10px;
  resize: none;
`;

const Counter = styled.div`
  align-self: flex-end;
  color: gray;
  font-size: 12px;
`;

export default LimitInputForm;