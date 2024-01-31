// Footer
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
          <NavLink to="/" exact="true" activeclassname="active">
            Friend
          </NavLink>
          <NavLink to="/reviews" activeclassname="active">
            솔직후기
          </NavLink>

          <NavLink to="/Apply" active ClassName="active">
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
            {isLogined ? (
              <>
                <NavLink to="/logout">LOGOUT</NavLink>
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
`;
export default Footer;
