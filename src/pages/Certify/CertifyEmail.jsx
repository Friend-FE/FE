import React, { useState } from 'react';

import Title from '../../components/title';
import Footer from "../../components/footer/index";
import axios from 'axios'
import styled from 'styled-components';
import {useNavigate} from 'react-router-dom';

const CertifyEmail = () => {
  const [email, setEmail] = useState("");
  const [WrongEmail, setWrongEmail] = useState(false);
  const [WrongCode, setWrongCode] = useState(false);
  const [verificationCode, setVerificationCode] = useState("");

  const isEmailFormValid = email !== "";
  const isVerificationCodeFormValid = verificationCode !== "";

  const handleEmailSubmit = (event) => {
    event.preventDefault();
    console.log("Submitted:", email);
    console.log("Submitted:", typeof email);

    if (isEmailFormValid) {
      axios.post("http://13.209.145.28:8080/api/v1/certify/send", { email: email })
        .then((response) => {
          console.log("POST 응답 데이터:", response.data);
          setWrongEmail(false);
        })
        .catch((error) => {
          console.error("POST 에러:", error);
          setWrongEmail(true);
        });
    } else {
      console.error("이메일 형식이 유효하지 않습니다.");
    }
  };

  const navigate = useNavigate();
  const handleVerificationCodeSubmit = (event) => {
    event.preventDefault();
    axios.get(
        `http://13.209.145.28:8080/api/v1/certify/verify?email=${email}&code=${parseInt(
          verificationCode
        )}`
      )
      .then(function (response) {
        // 성공적으로 응답 받았을 때의 처리
        console.log("응답 데이터:", response.data);
       // navigate('/CertifyEnd');
      })
      .catch(function (error) {
        // 오류 발생 시의 처리
        console.error("오류 발생:", error);
        setWrongCode(true);
      });
  };

  return (
    <>
      {/* <Header /> */}
      <Title title="회원가입" />
      <AppContainer>
        <RoundedBox>
          <DiscriptionText>
            부경대학교 학교 이메일을 입력해주세요.
          </DiscriptionText>
          <InputField
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <SubmitButton
            disabled={!isEmailFormValid}
            onClick={handleEmailSubmit}
          >
            인증번호 전송
          </SubmitButton>
          {WrongEmail && <p>잘못된 이메일 형식입니다</p>}
          <DiscriptionText>
            이메일로 온 인증번호를 입력해주세요.
          </DiscriptionText>
          <InputField
            type="text"
            value={verificationCode}
            onChange={(e) => setVerificationCode(e.target.value)}
          />
          <SubmitButton
            disabled={!isVerificationCodeFormValid}
            onClick={handleVerificationCodeSubmit}
          >
            확인
          </SubmitButton>
          {WrongCode && <p>잘못된 인증번호입니다</p>}
        </RoundedBox>
      </AppContainer>
      <FooterDiv>
        <Footer/>
      </FooterDiv>
    </>
  );
};

export default CertifyEmail;

// 전체를 담고 있는 컨테이너
const AppContainer = styled.div`
    // height: 100vh;
    // width: 40%; 
    // margin: 0 auto; */

    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
`;

// 네모 박스 그리기 
const RoundedBox = styled.div`
  border: 2px solid #23caff;
  border-radius: 10px; /* 모서리를 둥글게 */
  padding: 4vw;
  margin-top: 12vw;
  width: 45vw;
  height: 25vw;

  p {
    color: 		#4169E1;
  }
`;

//무엇을 입력해야하는지 설명하는 텍스트
const DiscriptionText = styled.div`
  /* font-size: 24px; */
  font-size: 1.5vw;
  font-weight: bold;

  margin: 2vw 0 0 7vw;
`;

const InputField = styled.input`
  // height: 30px;
  // padding: 8px;
  // margin-right: 10px;

  width : 50%;
  height : 3vw;
  border: 1px solid #ddd;
  border-radius: 5px;
  margin: 2vw 1vw 5vw 7vw;
`;

const SubmitButton = styled.button`
  background-color: #23caff;
  width: 20%;
  height : 3vw;
  color: white;
  border: none;
  cursor: pointer;
  font-size: 1vw;
  box-shadow: -0.6vw 0.5vw 0.3vw rgba(0, 0, 0, 0.2);

  /* 입력 안했을 때 */
  &:disabled {
    background-color: #b9eeff;
    cursor: not-allowed;
  }
`;

const FooterDiv = styled.div`
  width: 100%;
  position: relative;
  top: 12vw;

  @media (max-width: 768px) {
    top: 22vw;
  }
`;

