// 메인 페이지에 쓰이는 Image Box Component

import styled from "styled-components";

const ImageBox = ({ imageUrl, altText, sub }) => {
  return (
    <StyledP>
      <Box>
        <img src={imageUrl} alt={altText} />
      </Box>
      <p>{altText}</p>
      <h5>{sub}</h5>
    </StyledP>
  );
};

export default ImageBox;

const Box = styled.div`
  width: 22vw;
  max-width: 265px;
  height: 22vh;
  border:0.5px solid black ;
  border-radius: 30px;
  flex-shrink: 0.5;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 80%;
    height: 80%;
  }

  p {
    position: relative;
    top: 50px;
    font-size :1.5vw;
    @media screen and (max-width: 700px) {
      font-size :1vw;
    }
  }
  @media screen and (max-width: 700px) {
    width: 40vw;
    height: 35vw;
  }
`;
const StyledP = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-style: normal;
  font-weight: 800;

  h5{
    line-height: 0%;
    margin-top :10px;
    font-size :1.2vw;
    @media screen and (max-width: 700px) {
      font-size :2.7vw;
      margin: 20px;
    }
  }
`;
