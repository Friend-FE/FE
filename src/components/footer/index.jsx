// Footer
import styled from "styled-components";
import logo from "../../images/logo.png";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { useSelector,useDispatch } from "react-redux";
import { logout } from "../../REDUX/loginCheck";

const Footer = () => {
  const dispatch = useDispatch();

  const isLoggedIn = useSelector(state => state.login.isLoggedIn); // Redux Store에서 로그인 상태 가져오기

  const handleLogout = () => {
    // 로그아웃 액션 디스패치
    dispatch(logout());
  };
  return (
    <Wrapper>
      <img src={logo} alt="로고"></img>
      <div>
        <Top>
          <NavLink to="/" exact="true" activeclassname="active">
            Friend
          </NavLink>
          <NavLink to="/reviews" activeclassname="active">
            솔직후기
          </NavLink>

          <NavLink to={isLoggedIn? "/Apply" : "login"} active ClassName="active">
            매칭신청
          </NavLink>
          <NavLink to="/QnA" activeclassname="active">
            Q&A
          </NavLink>
          <NavLink to="/notice" activeclassname="active">
            공지사항
          </NavLink>
        </Top>
        <section>
          <Bottom>
            {isLoggedIn ? (
              <>
                <NavLink to="/" onClick={handleLogout}>LOGOUT</NavLink>
                <NavLink to="/mypage">마이페이지</NavLink>
              </>
            ) : (
              <>
                <NavLink to="/login">LOGIN</NavLink>
                <NavLink to="/CertifyBeginning">회원가입</NavLink>
              </>
            )}
          </Bottom>
        </section>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position :relative;
  top : 10vh;
  font-weight: 600;
  width: 100vw;
  height: 18vh;
  background-color: #daf6ff;
  display: flex;
  font-size: 16px;
  align-items: center;
  justify-content: center;
  gap: 239px;
  img {
    width: 111px;
    height: 39px;  
    @media screen and (max-width: 500px) {
      width: 70px;
      //height: 39px;  
    }
  }
  div {
    width: 65%;
    height: 60%;
  }
  a {
    text-decoration-line: none;
    color: #000;
    font-weight: 600;
  }
  .active {
    font-weight: 900;
  }

  @media screen and (max-width: 1070px) {
    font-size : 1.5vw;
    gap : 110px;
  }
  @media screen and (max-width: 500px) {
    font-size : 1.5em;
    gap : 30px;
  }
`;

const Bottom = styled.div`
  display: flex;
  justify-content: center;
  gap: 100px;
  @media screen and (max-width: 1070px) {
    font-size : 1.5vw;
    gap : 20px;
  }
`;
const Top = styled.div`
  display: flex;
  justify-content: center;
  gap: 40px;
  @media screen and (max-width: 1070px) {
    font-size : 1.5vw;
    gap : 13px;
  }
  @media screen and (max-width: 500px) {
    font-size : 2vw;
    gap : 5px;
    justify-content: space-around;
  }
`;
export default Footer;
