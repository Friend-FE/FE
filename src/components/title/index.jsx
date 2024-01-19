import styled from "styled-components";
import logo from "../../images/logo.png"

const Title = (props)=>{
  return (
    <Wrapper>
        <p>지인 매칭 100% 방지 와 개인정보 노출 부담없는 교내 매칭 서비스</p>
        <LogoWrapper>
            <img src={logo} alt="logo"/>
            <h3>{props.title}</h3>
        </LogoWrapper>
    </Wrapper>
  );
}

export default Title;

const LogoWrapper = styled.div`
display :flex;
align-items:center;
gap :0.8vw;

`
const Wrapper = styled.div`
display :flex;
flex-direction : column;
align-items:center;
position:relative;
top:5vh;
img{
    width : 16.3vw;
    height : 11vh;

}
h3{
    color : #23CAFF;
    font-size: 40px;
    font-weight: 900;
    margin :0;
    margin-top :2vh;
}
p{
    color: #000;
    text-align: center;
    font-size: 1.8rem;
    font-weight: 800;
}
`