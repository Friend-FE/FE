
import React, { useState } from "react";
import { useNavigate,useLocation } from "react-router-dom";
import Title from "../../components/title";
import CircleCheckbox from "../../components/CircleCheckbox/CircleCheckbox";
import styled from "styled-components";
import ProfileImage from "./ProfileImage";
import Footer from "../../components/footer";
import axios from "axios";
import LimitInputForm from "../../components/LimitInputForm/LimitInputForm";


const SignupInfo = (props) => {
  //로그인 정보 관리
  const navigate = useNavigate();
  const location = useLocation();
  const { agreePrivacy } = location.state;
  const [passwordCheck, setPasswordCheck] = useState("");
  const [wrongPW, setWrongPW] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [values, setValues] = useState({
    email: "",
    password: "",
    role: 0,
    nickname: "",
    phone: "",
    birthday: "",
    gender: 0,
    height: 0,
    region: "",
    department: "",
    distance: 0,
    smoking: 0,
    drinking: 0,
    introduction: "",
    preference: "",
    nonRegion: "",
    nondepartment: "",
    nonstudentid: "",
    nonage: "",
  });

  const handleFileChange = (file) => {
    setSelectedFile(file);
  };

  const checkWrongPW = (e) => {
    setPasswordCheck(e.target.value);
    if (values.password !== passwordCheck) {
      setWrongPW(false);
    } else setWrongPW(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    let formattedValue = value;
  
    // 전화번호 형식으로 변환 (010-0000-0000)
    if (name === "phone" && value.length <= 11) {
      formattedValue = value
        .replace(/[^0-9]/g, "") // 숫자 이외의 문자 제거
        .replace(/(\d{3})(\d{4})(\d{4})/, "$1-$2-$3"); // 전화번호 형식으로 변경
    }
    if (name === "phone"&&formattedValue.length > 13) {
      formattedValue = formattedValue.slice(0, 13);
    }

    setValues((prevValues) => ({
      ...prevValues,
      [name]: formattedValue,
    }));
  };
  console.log(values.phone);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('agreePrivacy:', agreePrivacy);
    console.log("실행");
    alert(JSON.stringify(values, null, 2));
  };

  const handleCancleButton = (event) => {
    //취소 시 이전 페이지로
    navigate(-1);
  };

  const handleSubmitButton = (event) => {
    //console.log(values);
    //가입완료, 정보들 서버로 전송하는 api 필요

    event.preventDefault();
    if (selectedFile) {
      //selectedFile
      const formData = new FormData();
      formData.append("image", selectedFile);

      const json = JSON.stringify(values);

      const blob = new Blob([json], { type: "application/json" });
      formData.append("request", blob);

      axios
        .post(`https://umcfriend.kro.kr/api/v1/users`, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then(function (response) {
          // 성공적으로 응답 받았을 때의 처리
          navigate("/JudgePage");
        })
        .catch(function (error) {
          // 오류 발생 시의 처리
          console.error("오류 발생:", error);
        });
    }
  };

  return (
    <>
      <Title title="회원가입" />
      <Separator />

      <AppContainer>
        <InfoMessage>먼저 프로필 사진을 등록해주세요 &nbsp; <p>*</p> </InfoMessage>
        <LogoContainer>
          <ProfileImage
            onFileChange={handleFileChange}
            selectedFile={selectedFile}
          />
        </LogoContainer>

        <InfoMessage>아이디와 비밀번호를 입력해주세요&nbsp;<p>*</p></InfoMessage>
        <LoginForm onSubmit={handleSubmit}>
          <Input
            type="text"
            name="email"
            value={values.email}
            onChange={handleChange}
            placeholder="이메일"
          />
          <Input
            type="password"
            name="password"
            value={values.password}
            onChange={handleChange}
            placeholder="패스워드"
            autoComplete="new-password"
          />
          <Input
            type="password"
            name="pwck"
            value={values.passwordCheck}
            onBlur={checkWrongPW}
            placeholder="패스워드 확인"
            autoComplete="new-password"
          />
          {wrongPW ? <p>비밀번호가 틀립니다.</p> : ""}
          <InfoMessage>기본 정보를 작성해주세요.&nbsp;<p>*</p></InfoMessage>
          <InfoName>닉네임</InfoName>
          <Input
            type="text"
            name="nickname"
            value={values.nickname}
            onChange={handleChange}
            placeholder="닉네임을 입력해주세요."
          />

          <InfoName>연락처</InfoName>
          <Input
            type="tel"
            name="phone"
            value={values.phone}
            onChange={handleChange}
            placeholder="***-****-****"
          />

          <InfoName>생년월일</InfoName>
          <Input
            type="date"
            name="birthday"
            value={values.birthday}
            onChange={handleChange}
          />

          <InfoName>성별</InfoName>
          <CircleCheckbox
            options={["여성", "남성"]}
            name="gender"
            value={values.gender}
            onChange={handleChange}
          />

          <InfoName>키</InfoName>
          <Input
            type="number"
            name="height"
            value={values.height}
            onChange={handleChange}
            placeholder="***cm"
          />

          <InfoName>지역</InfoName>
          <Input
            type="text"
            name="region"
            value={values.region}
            onChange={handleChange}
            placeholder="대략적인 **구까지만 써주세요."
          />

          <InfoName>장거리 가능 유무</InfoName>
          <CircleCheckbox
            options={["가능", "불가능"]}
            name="distance"
            value={values.distance}
            onChange={handleChange}
          />

          <InfoName>흡연 여부</InfoName>
          <CircleCheckbox
            options={["흡연", "비흡연"]}
            name="smoking"
            value={values.smoking}
            onChange={handleChange}
          />

          <InfoName>음주 여부</InfoName>
          <CircleCheckbox
            options={["음주", "비음주"]}
            name="drinking"
            value={values.drinking}
            onChange={handleChange}
          />

          <InfoName>내가 속한 단과대는?</InfoName>
          <Input
            type="text"
            name="department"
            value={values.department}
            onChange={handleChange}
          />

          <InfoName>자기소개를 입력해주세요.</InfoName>
          <LimitInputForm
            name="introduction"
            value={values.introduction}
            onChange={handleChange}
          />
          <InfoName>나의 이상형에 대해서 알려주세요!</InfoName>
          <LimitInputForm
            name="preference"
            value={values.preference}
            onChange={handleChange}
          />
          <InfoName>
            매칭되고 싶지 않은 학과를 적어주세요! 없으면 없음이라고 적어주세요.
          </InfoName>
          <Input
            type="text"
            name="nondepartment"
            value={values.nondepartment}
            onChange={handleChange}
          />

          <InfoName>
            매칭되고 싶지 않은 학번를 적어주세요! (예, 20학번) 없으면 없음이라고
            적어주세요.
          </InfoName>
          <Input
            type="text"
            name="nonstudentid"
            value={values.nonstudentid}
            onChange={handleChange}
          />

          <InfoName>
            매칭되고 싶지 않은 나이를 적어주세요! (예, 2005년생보다 어린 나이)
            없으면 없음이라고 적어주세요.
          </InfoName>
          <Input
            type="text"
            name="nonage"
            value={values.nonage}
            onChange={handleChange}
          />

          <InfoName>
            매칭되고 싶지 않은 지역 조건을 적어주세요! (예, 부산 외에 지역만
            매칭 원함) 없으면 없음이라고 적어주세요.
          </InfoName>
          <Input
            type="text"
            name="nonRegion"
            value={values.nonRegion}
            onChange={handleChange}
          />
          <ButtonContainer>
            <CancelButton onClick={handleCancleButton}>취소</CancelButton>
            <SubmitButton type="submit" onClick={handleSubmitButton}>
              회원가입 완료하기
            </SubmitButton>
          </ButtonContainer>
        </LoginForm>
      </AppContainer>
      <FooterContainer>
        <Footer />
      </FooterContainer>
    </>
  );
};


export default SignupInfo;

// 전체를 담고 있는 컨테이너
const AppContainer = styled.div`
  justify-content: center;
  width: 40%; /* 원하는 크기로 조정 (가로의 반 정도로 설정) */
  margin: 0 auto; /* 수평 가운데 정렬을 위해 margin을 auto로 설정 */
  @media screen and (max-width: 710px) {
    width: 65vw;
  }
`;

//ProfileBasic 로고 표시를 위한 스타일
const LogoContainer = styled.div`
  display: flex;
  justify-content: center; /* 가로축에서 가운데 정렬 */
`;

//수평선 스타일
const Separator = styled.div`
  height: 1px;
  // width: 60vw;
  background-color: Gray;
  margin: 10vw;

`;

//어떤 정보를 입력해야하는지, 알려주는 텍스트
const InfoMessage = styled.div`
  margin-bottom: 1.5vw;
  align-items:flex-end ;
  justify-content: center;
  font-size: 2vw;
  width: 100%; /* 텍스트가 max-width를 넘어가더라도 크기를 조절할 수 있도록 */
  display:flex;
  p{
    color: #23CAFF;
    margin-bottom: 1vw;
  }
  @media screen and (max-width: 970px) {
    /* font-size:2.5vw; */
  }
`;

// 이메일과 패스워드를 입력할 칸들
const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 2vw;
`;

const Input = styled.input`
  height: 3vw;
  padding: 1vw;
  margin-bottom: 3vw;

  font-size: 1vw;
  @media screen and (max-width: 700px) {
    height: 5vw;
    font-size: 1vw;

  }
`;

// 칸 마다 입력해야하는 정보 알려주는 작은 텍스트
const InfoName = styled.div`
  font-size: 1.5vw;
  margin-bottom: 0.5vw;
`;

//취소, 이어서 가입 버튼
const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap : 2vw;
`;

const CancelButton = styled.button`
  font-weight : 2vw;
  border: none;
  cursor: pointer;
  width: 15vw;
  height : 5vw;
  border :none;
  box-shadow: -2px 8px 6.1px 0px rgba(0, 0, 0, 0.25);
  color: #000;
  background-color: #ffffff;
  @media screen and (max-width: 700px) {
    font-size : 2vw;
    width: 35vw;
    height : 7vw;
    
  }
`;

const SubmitButton = styled.button`
  border: none;
  cursor: pointer;
  font-weight : 1vw;
  width: 15vw;
  height : 5vw;
  border :none;
  box-shadow: -2px 8px 6.1px 0px rgba(0, 0, 0, 0.25);
  color : #ffffff;
  background-color:#8BE3FF;
  text-align:center;

  @media screen and (max-width: 700px) {
    font-size : 2vw;
    width: 35vw;
    height : 7vw;
  }

  /* isFormValid가 언제 false로 설정할지 필요 */
  &:disabled {
    background-color: #b9eeff;
    cursor: not-allowed;
  }
`;

const FooterContainer = styled.div`
  position: relative;
  top: 10vh;
  width: 100%;
`;