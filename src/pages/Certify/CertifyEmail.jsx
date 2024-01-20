import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/header/index";
import Footer from "../../components/footer/index";
import styled from "styled-components";
import Title from "../../components/title";
import axios from "axios";

const CertifyEmail = () => {
  const [email, setEmail] = useState("");
  const [verificationCode, setVerificationCode] = useState(0);

  const isEmailFormValid = email !== "";
  const isVerificationCodeFormValid = verificationCode !== "";

  const handleEmailSubmit = (event) => {
    event.preventDefault();
    console.log("Submitted:", email);
    console.log("Submitted:", typeof(email));

    if (isEmailFormValid) {
      const requestBody = {
        "email": email
      };
  
      axios.post("http://13.209.145.28:8080/api/v1/certify/send",{"email" : email} )
        .then((response) => {
          console.log("POST 응답 데이터:", response.data);
        })
        .catch((error) => {
          console.error("POST 에러:", error);
        });
    } else {
      console.error("이메일 형식이 유효하지 않습니다.");
    }
  };

  const navigate = useNavigate();
  const handleVerificationCodeSubmit = (event) => {
    event.preventDefault();
    console.log("Submitted: 111", typeof(verificationCode));

    //코드가 일치하는 경우 다음페이지로 넘어가는 navigate 코드 필요 (api 호출로 조건문 필요)
    //navigate('/CertifyEnd');
    axios.get(`http://13.209.145.28:8080/api/v1/certify/verify?email=${email}&code=${verificationCode}`)
  .then(function (response) {
    // 성공적으로 응답 받았을 때의 처리
    console.log('응답 데이터:', response.data);
  })
  .catch(function (error) {
    // 오류 발생 시의 처리
    console.error('오류 발생:', error);
  });
  };

  return (
    <>
      <Header />
      <AppContainer>
        <Title title="회원가입" />
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
        </RoundedBox>
      </AppContainer>
      <Footer />
    </>
  );
};
export default CertifyEmail;

// 전체를 담고 있는 컨테이너
const AppContainer = styled.div`
  height: 80vh;
  width: 40%; /* 원하는 크기로 조정 가능 */
  margin: 0 auto; /* 수평 가운데 정렬을 */
`;

// 네모 박스 그리기
const RoundedBox = styled.div`
  border: 2px solid #23caff;
  border-radius: 10px; /* 모서리를 둥글게 */
  padding: 40px; /* 네모박스 내부 여백 */
  margin-top: 100px;
`;

//무엇을 입력해야하는지 설명하는 텍스트
const DiscriptionText = styled.div`
  font-size: 25px;
  margin: 20px;
`;

const InputField = styled.input`
  width: 70%;
  height: 30px;
  padding: 8px;
  margin-right: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

const SubmitButton = styled.button`
  background-color: #23caff;
  width: 20%;
  height: 50px;
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 5px;

  /* 입력 안했을 때 */
  &:disabled {
    background-color: #b9eeff;
    cursor: not-allowed;
  }
`;
