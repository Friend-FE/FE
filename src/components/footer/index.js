import styled from "styled-components";
import logo from "../../images/logo.png";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const Footer = () => {
  const [isLogined, setLogin] = useState(false);
  return (
    <Wrapper>
      <img src={logo} alt="로고"></img>
      <div>
        <Top>
          <NavLink to="/" exact active ClassName="active">
            Friend
          </NavLink>
          <NavLink to="/review" active ClassName="active">
            솔직후기
          </NavLink>
          <NavLink to="/apply" active ClassName="active">
            매칭신청
          </NavLink>
          <NavLink to="/QnA" active ClassName="active">
            Q&A
          </NavLink>
          <NavLink to="/notice" active ClassName="active">
            공지사항
          </NavLink>
        </Top>
        <section>
          <Bottom>
            {isLogined ? (
              <>
                <NavLink to="/logout">LOGOUT</NavLink>
                <NavLink to="/mypage">마이페이지</NavLink>
              </>
            ) : (
              <>
                <NavLink to="/login">LOGIN</NavLink>
                <NavLink to="/join">회원가입</NavLink>
              </>
            )}
          </Bottom>
        </section>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  font-weight: 600;
  width: 100vw;
  height: 18vh;
  background-color: #daf6ff;
  display: flex;
  font-size: 16px;
  align-items: center;
  justify-content: center;
  gap: 80px;
  img {
    width: 111px;
    height: 39px;
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
`;

const Bottom = styled.div`
  display: flex;
  justify-content: center;
  gap: 40px;
`;
const Top = styled.div`
  display: flex;
  justify-content: center;
  gap: 40px;
`;
export default Footer;
