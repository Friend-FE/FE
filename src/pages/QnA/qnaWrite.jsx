// Q&A - 글 작성 (이용자가 질문 남기는 경우)

import React, { useState, useEffect, useRef } from 'react';
import Title from '../../components/title/index';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import Footer from '../../components/footer';
import { useLocation } from 'react-router-dom';

const TitleHR = styled.hr`
  margin-top: 10vh;
  border: 0;
  border-top: 1px solid #B8B8B8;
  width: 80vw; 
`;

const TextInput = styled.input`
  width: 60vw;
  height: 7vh;
  font-weight: bold;
  font-size: 1.1vw;
  padding-left: 1vw;
  border: 0.05vw solid #888;

  @media (max-width: 768px) {
    width: 60vw;
    height: 2vh;
  }
`;

const TextArea = styled.textarea`
  width: 60vw;
  height: 50vh;
  font-weight: bold;
  font-size: 1.1vw;
  resize: none;
  padding-left: 1vw;
  padding-top: 0.5vw;
  border: 0.05vw solid #888;

  @media (max-width: 768px) {
    position: relative;
    top: -6vw;
    width: 60vw;
    height: 10vh;
  }
`;

const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 2vw 0 0 0;
`;

const TitleInPut = styled.div`
  margin-top: 5vh;
  font-size: 1vw;
  font-weight: 400;
`;

const ContentInPut = styled.div`
  margin-top: 5vh;
  font-size: 1vw;
  font-weight: 400;
`;

const SecretContainer = styled.div`
  margin-top: 2.5vh;
  display: flex;
  align-items: center;
  font-size: 1vw;
`;

const Origin = styled.div`
  margin-top: 1.25vw;
  display: flex;
  align-items: center;
`;

const SecretCheckInput = styled.input`
  width: 1vw;
  height: 1vw;
  cursor: pointer;
`;

const After = styled.div`
  display: flex;
  align-items: center;
`;

const PasswordInfo = styled.div`
  display: flex;
  align-items: center;
  margin-right: 1vh;
  margin-left: 10vh;
`;

const CheckBoxText = styled.div`
  display: flex;
  margin-left: 0.5vw;
  cursor: default;
`;

const PasswordInput = styled.input`
  width: 15vw;
  height: 4vh; //
  font-size: 1vw;
  margin-right: 1vw;
  padding-left: 1vw;
  border: 0.05vw solid #888;
`;

const CompleteButton = styled.button`
  width: 5vw;
  height: 2.5vw;
  background: #8be3ff;
  border: none;
  color: #fff;
  font-size: 1vw;
  font-weight: 700;
  cursor: pointer;
  box-shadow: -2px 8px 6.1px 0px rgba(0, 0, 0, 0.25);
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 3vw;
`;

const CancelButton = styled.button`
  width: 13vw;
  height: 2.5vw;
  background: #fff;
  border: none;
  color: #000;
  text-align: center;
  font-size: 1vw;
  font-weight: 700;
  margin-right: 1vw;
  cursor: pointer;
  box-shadow: -2px 8px 6.1px 0px rgba(0, 0, 0, 0.25);
`;

const SubmitButton = styled.button`
  width: 13vw;
  height: 2.5vw;
  background: #8be3ff;
  border: none;
  color: #fff;
  text-align: center;
  font-size: 1vw;
  font-weight: 700;
  margin-left: 1vw;
  cursor: pointer;
  box-shadow: -2px 8px 6.1px 0px rgba(0, 0, 0, 0.25);
`;

const FooterContainer = styled.div`
    position: relative;
    bottom: -5vw;
    width: 100%;

    @media (max-width: 768px) {
        bottom: -10vw;
    }
`;

export default function QuestionWrite() {
  const [id, setId] = useState(null);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const [isChecked, setIsChecked] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [password, setPassword] = useState('');
  const [certainPassword, setCertainPassword] = useState('');
 

  //수정을 하기 위해 이전페이지의 Id를 가져옴 Id가 있다면 수정
  useEffect(() => {
    const postIdToEdit = location.state?.postId;
    if (postIdToEdit) {
      setId(postIdToEdit);
      setIsEditing(true);
    }
  }, [location]);

  const handleComplete = () => {
    if (isChecked && password === ""){
      alert("비밀번호를 입력해주세요.");
      setClicked(false); //클릭 무효
      return; // 함수 종료
    }
    //입력완료버튼을 누르고 난뒤의 비밀번호값
    setCertainPassword(password);
  };
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    // clicked는 한번 이상 클릭했을 때 적용, setClicked는 클릭상태
    if (isChecked && !clicked ) {
      alert("비밀번호 입력 완료 버튼을 눌러주세요.");
      return;
    }
  // 입력확인을 누르고 비밀번호를 다시 지울 수 있으므로(수정은 submit버튼을 누를때 비밀번호값이기 때문에 비어있지 않기만 하면 된다) 위 조건문을 {!clicked || password === ""} 를 써도 되지만
  // 수정했다는 사실을 알릴려면 아래와 같이 완료된 비밀번호로 조건문
    else if(isChecked && clicked && (password=== "" || (certainPassword !== password && clicked)))
    {
      alert("비밀번호 수정 후 비밀번호 입력 완료 버튼을 눌러주세요.");
      return;
    }
    else if(title === ""){
      alert("제목을 입력해주세요.");
      return;
    }
    else if(content === ""){
      alert("내용을 입력해주세요.");
      return; // 함수 종료, 또는 아래부터 else로 감싸도 됨 
    }
  
  
    try {
      const apiUrl = isEditing
        ? `https://umcfriend.kro.kr/api/v1/Qa/${id}`
        : 'https://umcfriend.kro.kr/api/v1/qa';
  
        
      const requestClass = {
        title: title,
        body: content, 
        author: 'author',
        //status는 답변받는 페이지에서 답변이 있으면 나오게 함
       
        // privacy: isChecked ? 'PUBLIC' : 'PRIVACY' 으로 순서를 바꿨을 경우에는 체크되어있을땐 
        // 글작성이 되고 체크를 안했을 때 오류가 난다
        privacy: isChecked ? 'PRIVACY' : 'PUBLIC',

        //password는 애초에 보안상의 이유로 비밀번호는 서버에서 해싱해야 함, 백엔드가 작업하여 콘솔에는 찍히지 않음
        password: password,
      };
      requestClass.time = new Date();
  
  
      const response = await fetch(apiUrl, {
        method: isEditing ? 'PUT' : 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestClass),
      });
  
      const responseJson = await response.json();
      console.log('Server Response Data:', responseJson);
  
      if (response.ok) {
        console.log(isEditing ? '글 수정 완료!' : '글 작성 완료!');
        navigate(-1);
      } else {
        console.error('글 작성/수정 실패:', response.status, response.statusText);
      }
    } catch (error) {
      console.error('글 작성/수정 중 오류 발생:', error);

    }
  };
  
  const handleCancel = () => {
    navigate(-1);
  };
  
  return (
    <>
      <Title title = "글 작성하기"/>
      <TitleHR />
      <TextBox>
        <form onSubmit={handleSubmit}>
        <TitleInPut>
          <TextInput type="text" placeholder='제목을 입력해주세요.' value={title} onChange={e => setTitle(e.target.value)} />
        </TitleInPut>
        <ContentInPut>
          <TextArea type="text" placeholder='글을 입력해주세요.' value={content} onChange={e => setContent(e.target.value)} />
        </ContentInPut>

        <SecretContainer>
          <Origin>
          <SecretCheckInput
              type="checkbox"
              checked={isChecked}
              onChange={() => setIsChecked(!isChecked)}
            />
            <CheckBoxText> 비밀글로 작성</CheckBoxText>
            </Origin>
            {isChecked && (
              <>
              <After>
                <PasswordInfo>비밀번호 </PasswordInfo>
                <PasswordInput
                  type="password"
                  value={password}
                  onChange={(e) => {setPassword(e.target.value);}}
                />
                {/* 조건문이 handleComplete()에 있으므로 setClicked(true)가 먼저 와야한다 */}
                <CompleteButton type="button"  onClick={() => {setClicked(true); handleComplete(); }}> 
               완료
            </CompleteButton>
            </After>
              </>
            )}
          </SecretContainer>

        <ButtonWrapper>      
          <CancelButton type="button" onClick={handleCancel}>취소</CancelButton>
          <SubmitButton type="submit">완료</SubmitButton>
        </ButtonWrapper>
        </form>   
      </TextBox>
      <FooterContainer>
        <Footer/>
      </FooterContainer>
    </>
  );
};