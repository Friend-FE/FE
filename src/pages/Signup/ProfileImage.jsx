// 회원가입 - 3 API 연결 (임의로 작성. 수정 바랍니다)에 쓰인 Image 삽입 Component

import React, { useState } from "react";
import styled from "styled-components";
import ProfileBasic from "../../images/ProfileBasic.png"

const ProfileImage = ({ onFileChange }) => {
    const [selectedImage, setSelectedImage] = useState(null);

    const handleImageChange = (event) => {
        const file = event.target.files[0];
    
        if (file) {
          const reader = new FileReader();
    
          reader.onloadend = () => {
            setSelectedImage(reader.result);
            onFileChange(file); // 부모 컴포넌트로 파일 전달 
          };
    
          reader.readAsDataURL(file);
          
        }
      };

    return(
        <Label form="file">
            {selectedImage ? (
                <Image src={selectedImage} alt="선택한 이미지" />
            ) : (
                <>
                    <DefaultImage src={ProfileBasic} alt="기본이미지" />
                </>
            )}
            <StyledInput id="file" type="file" accept="image/*" onChange={handleImageChange} />
        </Label>
    )
}
const Label = styled.label`
    display: inline-block;
    position: relative;
    padding: 10px;
    cursor: pointer;
    width: 13vw;
    height:13vw;
    
    @media screen and (max-width: 500px) {
        width: 25vw;
        height : 25vw;
      }
`;

const Image = styled.img`
    width: 13vw; /* 이미지 크기 조절 */
    height:13vw;
    @media screen and (max-width: 500px) {
        width: 25vw;
        height : 25vw;
      }
`;

const DefaultImage = styled.img`
width: 13vw;
height:13vw;
    margin-right: 5px; /* 이미지와 텍스트 간격 조절 */
    @media screen and (max-width: 500px) {
        width: 25vw;
        height : 25vw;
      }
`;

const StyledInput = styled.input`
    display: none; /* input 숨기기 */
`;
export default ProfileImage;