import styled from "styled-components";
import logo from "../../images/logo.png"

const Footer = ()=>{
    return (
      <Wrapper>
        <img src={logo} alt="로고"></img>
        <div>
            <UlTop>
                <StyledMenuItem >Friend</StyledMenuItem>
                <li>솔직후기</li>
                <li>매칭신청</li>
                <li>Q&A</li>
                <li>공지사항</li>
            </UlTop>
            <section>
            <UlBottom>
                <li>LOGIN</li>
                <li>회원가입</li>
            </UlBottom>                
            </section>

        </div>
      </Wrapper>
    );
  }
  
  const Wrapper = styled.div`
  font-weight : 600;
  width : 100vw;
  height : 18vh;
  background-color : #DAF6FF;
  display : flex;
  font-size : 16px;
  align-items: center;
  justify-content :center;
  gap: 80px;
    img{
        width : 111px;
        height : 39px;
        
    }
    div{
        align-self :center;
        display :flex;
        flex-direction: column;
        width : 65%;
        height : 80%;
        justify-content : space-around;
      
    }
    li{
        list-style: none;
    }
    ul{
        display : flex;
        padding:0;
        margin : 0;
        width : 70%;
    }
    

  `
  const StyledMenuItem = styled.li`
  color: #23CAFF;
  font-weight: bold;
  font-weight: 900;
  `
  const UlBottom = styled.ul`
  justify-content :center;
  gap: 40px;

  `
  const UlTop = styled.ul`
  justify-content : center;
  gap: 40px;
  `
  export default Footer;
  