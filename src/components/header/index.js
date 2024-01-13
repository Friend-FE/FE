import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../../images/logo.png"

function Header() {
  return (
    <div>
    <Wrapper/>  
    <HeaderContainer>
      <Link to="/">
        <img
          style={{ width: "111px" }}
          src={logo}
          alt="로고"
        />
      </Link>
      <LinkContainer>
        <Link to="/" style={{ fontWeight:"900", color :"#23CAFF" }}>Friend</Link>
        <Link to="/">솔직후기</Link>
        <Link to="/">매칭신청</Link>
        <Link to="/">Q&A</Link>
        <Link to="/">공지사항</Link>
      </LinkContainer>
    </HeaderContainer>
    </div>
  );
}

const HeaderContainer = styled.div`
  margin: 0;
  padding: 0px;
  
  display: flex;
  position: fixed;
  //top:0px;
  width: 100vw;
  height: 75px;
  background-color: #fff;
  justify-content : space-around;
  gap : 675px;
  align-items : center;
  img {
    
    left: 100px;
  }

`;

const LinkContainer = styled.div`
  display: flex;
  gap:53px;
  
  a {
    text-decoration-line: none;
    color: #000;
    font-weight : 600;
  }
`;
const Wrapper = styled.div`
  width : 100vw;
  height : 32px;
  background-color:rgba(90, 215, 255, 0.16);
`;

export default Header;
