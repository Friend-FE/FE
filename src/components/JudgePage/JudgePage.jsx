// 마이페이지 - 심사 중 페이지

import styled from "styled-components";
import Logo from "../../images/logo.png";
import Judge from "../../images/Judge.png";
import Footer from "../footer";
const JudgePage = () => {
  return (
    <div>
      <Wrapper>
        <img src={Logo} alt="logo" />
        <img src={Judge} alt="심사중" />
      </Wrapper>
      <FooterContainer>
        <Footer />
      </FooterContainer>
    </div>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  top: 17vh;
  img {
    width: 30vw;
    min-width : 270px;
  }
`;

const FooterContainer = styled.div`
  position: absolute;
  bottom: 10vh;
  width: 100%;
`;
export default JudgePage;
