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
  width: 20vw;
  max-width: 230px;
  height: 22vh;
  border-radius: 30px;
  background: #fae1e4;
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
  }
  @media screen and (max-width: 700px) {
    width: 40vw;
    height: 80%;
  }
`;
const StyledP = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 20px;
  font-style: normal;
  font-weight: 800;
  p{
    font-size :1.5vw;
    @media screen and (max-width: 700px) {
      font-size :2.5vw;
    }
  }

  h5{
    line-height: 0%;
    margin :3px;
    font-size :1.4vw;
    @media screen and (max-width: 700px) {
      font-size :2.7vw;
    }
  }
`;
