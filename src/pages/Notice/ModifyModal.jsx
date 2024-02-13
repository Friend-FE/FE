import React from 'react';
import styled from 'styled-components';
import CheckMark from '../../images/ModalCheckMark.png'


const DeleteModal = ({ confirmDelete, cancelDelete }) => {
  return (
    <ModalContainer>
      <CheckMarkImg src= {CheckMark}/>
      <ModalText>정말 글을 수정하시겠습니까 ?</ModalText>
      <ButtonContainer>
        <Button cancel onClick={cancelDelete}>취소</Button>
        <Button onClick={confirmDelete}>수정하기</Button>
      </ButtonContainer>
    </ModalContainer>
  );
};

export default DeleteModal;

const ModalContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 3vw 9vw; /* 가로 크기를 2배로 늘리기 위해 2vw 대신에 4vw 사용 */
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center; /* 수평 중앙 정렬 */
`;


const CheckMarkImg = styled.img`
  width: 50%;
  height: 50%;
  object-fit: contain; /* 이미지가 왜곡되지 않고 부모 요소에 맞게 조절됩니다. */
`;


const ModalText = styled.div`
  font-size: 2vw;
  font-weight: bold; /* 볼드체로 변경 */
`;


const ButtonContainer = styled.div`
    margin-top: 2vw;
    display: inline-block;
`;

const Button = styled.button`
    width: 13vw;
    height: 2.5vw;
    margin: 1vw;
    padding: 0.5vw 1vw;
    border: none;
    border-radius: 4px;
    background-color: ${props => props.cancel ? '#FFFFFF' : '#8be3ff'};
    color: ${props => props.cancel ? 'black' : 'white'};
    cursor: pointer;
    font-size: 1vw;
    font-weight: bold;
    box-shadow: -0.13vw 0.55vw 0.41vw 0 rgba(0, 0, 0, 0.25);
    outline: none; /* 버튼의 아웃라인을 제거합니다. */
`;
