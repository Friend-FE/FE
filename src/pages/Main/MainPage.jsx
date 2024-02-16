// 메인 페이지

import styled from "styled-components";
import mainBg from "../../images/main_bg.png";
import ImageBox from "../../components/ImageBox";
import Footer from "../../components/footer/index"
import Main1 from "../../images/main_1.png"
import Main2 from "../../images/main_2.png";
import Main3 from "../../images/main_3.png";
import Main4 from "../../images/main_4.png";
import Main5 from "../../images/main_5.png";
import Main6 from "../../images/main_6.png";
import { useNavigate } from "react-router-dom";
import { useState,useEffect } from "react";
import { useDispatch  } from 'react-redux';
import { login } from '../../REDUX/loginCheck';

const MainPage = () => {
  const dispatch = useDispatch();
  const [isLogined,setIsLogined] = useState(true); //로그인 여부
  const [isActive,setIsActive] = useState(false); // 승인 완료된 회원인지?
  const navigate = useNavigate();
  const handleStartBtn = ()=>{
    if(!isLogined)
    {
      navigate("/login");
    }
    else if(!isActive){
      navigate("/JudgePage");
    }
    else{
      navigate("/Apply");
    }

  }

  useEffect(() => {
    // 페이지 로드 시에 로컬 스토리지에서 로그인 상태 확인하여 설정
    const serializedState = localStorage.getItem('loginState');
    if (serializedState) {
      const { isLoggedIn } = JSON.parse(serializedState);
      if (isLoggedIn) {
        dispatch(login());
      }
    }
}, [dispatch]);


  return (
    <AppContainer>
      <Img src={mainBg} alt="메인화면bg"></Img>
      <Wrapper>
        <h3>당신의 ‘FRIEND’를 만나보세요!</h3>
        <p>지인 매칭 100% 방지와 개인정보 노출 부담없는 교내 매칭 서비스</p>
        <button onClick={handleStartBtn}>Friend 시작하기</button>
      </Wrapper>

      <Box>
        <TextBox>
          <h5>지인 매칭 100% 방지와 개인정보 노출 부담없는</h5>
          <h5> 교내 매칭 서비스</h5>
        </TextBox>
        <TextBox>
          <p className="blue">FRIEND</p>
          <p>란?</p>
        </TextBox>
        <TextBox>
          <h4>안녕하세요!</h4>
          <h4 className="blue">FRIEND</h4>
          <h4>를 소개합니다!</h4> <br></br>
        </TextBox>
        <TextBox className="style">
          <h4>FRIEND를 한마디로 소개하자면</h4>
          <h4>
            {" "}
            “지인 매칭 100% 방지와 개인정보 노출 부담없는 교내 매칭
            서비스”입니다.
          </h4>
        </TextBox>

        <TextBox className="style">
          <section>
            <h4> 100% 실제 사람이 매칭해주어 당신의 특별한</h4>
            <h4 className="blue">&nbsp;FRIEND</h4>
            <h4>를&nbsp;</h4>
          </section>
          <h4>찾도록 도와주는 프리미엄 교내 소개팅 매칭 서비스입니다.</h4>{" "}
          <br></br>
        </TextBox>
        <TextBox>
          <h1> 100%</h1>
          <h1 className="blue">사람</h1>
          <h1>이 매칭해준다는데 어떻게 매칭 해주나요?</h1> <br></br>
        </TextBox>
      </Box>
      <FlexBox>
        <ImageBox
          imageUrl={Main1}
          altText="1. 회원 가입 & 부경대학교 학생 인증"
        ></ImageBox>
        <ImageBox
          imageUrl={Main2}
          altText="2. 프로필과 나의 이상형 작성"
        ></ImageBox>
        <ImageBox
          imageUrl={Main3}
          altText="3. 담당 매니저 배정 및 설레는 기다림 ♥"
        ></ImageBox>
        <ImageBox
          imageUrl={Main4}
          altText="4. 예비 FRIEND의 프로필 확인 및 결정 및 거절"
          sub="(거절할 시, 3번부터 다시)"
        ></ImageBox>
        <ImageBox imageUrl={Main5} altText="5. 매칭 완료"></ImageBox>
        <ImageBox
          imageUrl={Main6}
          altText="6. 매니저가 알려주는 주의사항 숙지 후 만남!"
        ></ImageBox>
      </FlexBox>
      <FooterContainer>
        <Footer/>
      </FooterContainer>
    </AppContainer>
  );
};

const AppContainer = styled.div`
box-sizing: border-box;
//overflow-y:hidden;
`
const Img = styled.img`
  width: 100vw;
`;
const Wrapper = styled.div`
  position: absolute;
  top: 30vw;
  display: flex;
  width: 100vw;
  flex-direction: column;
  align-items: center;
  @media screen and (max-width: 400px) {
    top: 45vw;

  }



  h3 {
    color: #fff;
    font-family: SUIT;
    font-size: 48px;
    font-style: normal;
    font-weight: 900;
    line-height: normal;
    margin-bottom: 0px;
    @media screen and (max-width: 800px) {
      font-size: 28px;
    }
    @media screen and (max-width: 400px) {
      font-size : 5vw;

    }
  }
  p {
    color: #fff;
    font-family: SUIT;
    font-size: 20px;
    font-style: normal;
    font-weight: 800;
    line-height: normal;
    @media screen and (max-width: 800px) {
      margin-top: 10px;
      font-size : 4vw;
      width: 65vw;
      margin-rigth : 10px;
    }
  }
  button {
    width: 12vw;
    height: 36px;
    flex-shrink: 0;
    position: relative;
    top: 7vh;
    left : 2vw;
    background: #8be3ff;
    box-shadow: -2px 8px 6.1px 0px rgba(0, 0, 0, 0.25);
    border: none;
    color: #fff;
    text-align: center;
    font-size: 13px;
    font-weight: 700;
    @media screen and (max-width: 1010px) {
      top: 5vw;
      width: 20vw;
    }
    @media screen and (max-width: 450px) {
      width: 40vw;
    }
  }

`;
const TextBox = styled.div`
  max-width: 90vw;
  display: flex;
  .blue {
    color: #30cdff;
  }
  section {
    display: flex;
  }

  @media screen and (max-width: 900px) {
    justify-content: flex-start;
    width: 100vw;
  }
  &.style {
    @media screen and (max-width: 980px) {
      display: block;
      margin: 2vh 0 2vh 0;
    }
  }
`;
const Box = styled.div`
  position: relative;
  top: 12vh;
  left: 68px;
  max-width: 1300px;

  @media screen and (max-width: 1030px) {
    left: 5vw;
  }

  h5 {
    color: #000;
    font-size: 14px;
    font-weight: 800;
    max-width: 1300px;
  }

  p {
    font-size: 48px;
    font-style: normal;
    font-weight: 900;
  }

  h4 {
    font-size: 20px;
    font-style: normal;
    font-weight: 800;
    @media screen and (max-width: 800px) {
      margin: 0;
      font-size: 2.7vw;
    }
    @media screen and (max-width: 450px) {
      margin: 0;
      font-size: 4vw;
    }
  }

  h1 {
    font-size: 3.2vw;
    font-weight: 900;
  }
`;
const FlexBox = styled.div`
  position: relative;
  max-width: 80vw;
  top: 22vh;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  flex-wrap: nowrap;
  justify-content: space-around;
  gap: 3vw;
  left: 8vw;
  @media screen and (max-width: 700px) {
    grid-template-columns: repeat(2, 1fr);
    left: 5vw;
    gap: 1vw;
  }
`;
const FooterContainer = styled.div`
  position: relative;
  top: 28vh;
  width: 100%;
`;
export default MainPage;
