import React, { useState } from 'react';
import styled from 'styled-components';

const MAX_LENGTH = 110;

const LimitInputForm = ({name,value,onChange}) => {

  // const handleTextChange = (e) => {
  //   const inputValue = e.target.value;
  //   if (inputValue.length <= MAX_LENGTH) {
  //     onChange(name,inputValue); // 상위 컴포넌트의 onChange 함수 호출
  //   }
  // };

  return (
    <Container>
      <Textarea value={value} onChange={(e) => onChange({ target: { name, value: e.target.value } })} placeholder="최대 110자까지 입력할 수 있습니다." />
      <Counter>{`${value.length} / ${MAX_LENGTH}`}</Counter>
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