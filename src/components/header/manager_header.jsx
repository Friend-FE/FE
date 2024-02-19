// Header

import React from "react";
import { Link,NavLink } from "react-router-dom";
import styled from "styled-components";
import logo from "../../images/logo.png"
import { useSelector,useDispatch } from "react-redux";
import { logout } from "../../REDUX/loginCheck";

function ManagerHeader() {
  const dispatch = useDispatch();

  const id = useSelector(state => state.login.id);
  let isManager = false;
  if(id === 47){
    isManager = true;
  }

  const isLoggedIn = useSelector(state => state.login.isLoggedIn); // Redux Store에서 로그인 상태 가져오기
  const handleLogout = () => {
    // 로그아웃 액션 디스패치
    dispatch(logout());
  };
  return (
    <Container>
    <Wrapper>
      <div>사람이 해주는 진심어린 매칭, Friend!</div>
      <div>
          <>
            {isLoggedIn ? (
              <>
                <NavLink to="/" onClick={handleLogout}>LOGOUT</NavLink>
                <NavLink to="/ManagerPage">매니저페이지</NavLink>
              </>
            ) : (
              <>
                <NavLink to="/login">LOGIN</NavLink>
                <NavLink to="/CertifyBeginning">회원가입</NavLink>
              </>
            )}
          </>
      </div>
    </Wrapper>  
    <HeaderContainer>
      <Link to="/">
        <StyledImg
          src={logo}
          alt="로고"
        />
      </Link>
      <LinkContainer>
      <NavLink to="/ManagerPage/ReportReceiptHistory" exact="true" activeclassname="active">
            신고접수
          </NavLink>
          <NavLink to="/ManagerPage/Review" activeclassname="active">
            솔직후기
          </NavLink>
          <NavLink to="/ManagerPage/MatchingApplicationHistoryWoman" activeclassname="active">
            매칭신청내역
          </NavLink>
          <NavLink to="/ManagerPage/QnA" activeclassname="active">
            Q&A
          </NavLink>
          <NavLink to="/ManagerPage/Notices" activeclassname="active">
            공지사항
          </NavLink>
      </LinkContainer>
    </HeaderContainer>
    </Container>
  );
}

const HeaderContainer = styled.div`
  margin: 0px;
  padding: 0px;
  
  display: flex;
  width: 100vw;
  height: 75px;
  background-color: #fff;
  justify-content : space-around;
  gap : 40vw;
  align-items : center;

  @media screen and (max-width: 1070px) {
    font-size : 1.5vw;
    gap : 3vw;
  }
  @media screen and (max-width: 600px) {
    font-size : 10vw;
    gap : 15vw;
    justify-content : center;
  }

`;
const StyledImg = styled.img`
  left: 100px;
  width:111px;
  @media screen and (max-width: 450px) {
    width:70px;
  }
`
const LinkContainer = styled.div`
  display: flex;
  gap:5vw;
  
  
  a {
    text-decoration-line: none;
    color: #000;
    font-weight : 600;
  }
  .active {
    color: #23CAFF;
  }
  @media screen and (max-width: 600px) {
    font-size : 2.2vw;
    gap : 1vw;
  }
`  
const Wrapper = styled.div`
  width : 100vw;
  height : 32px;
  background-color:rgba(90, 215, 255, 0.16);
  display :flex;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;

  justify-content : space-around;
  gap : 58vw;
  align-items : center;

  div{
    display : flex;
    gap : 66px;
    @media screen and (max-width: 500px) {
      font-size : 3vw;
      gap : 2vw;
    }
  }
  a{
    text-decoration-line: none;
    color:black;
  }

  @media screen and (max-width: 1070px) {
    font-size : 1.5vw;
    gap : 1vw;
  }
  @media screen and (max-width: 500px) {
    font-size : 3vw;
    gap : 0.3vw;
  }
`;
const Container = styled.div`
  min-width : 1070px;
    @media screen and (max-width: 1070px) {
      font-size : 1.5vw;
    }
`

export default ManagerHeader;
