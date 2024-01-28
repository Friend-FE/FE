import React, { useState } from "react";
import styled from "styled-components";
import ProfileBasic from "../../images/ProfileBasic.png"
const ProfileImage = ({ onFileChange }) => {
    const [selectedImage, setSelectedImage] = useState(null);

    // const handleImageChange = ({ onFileChange }) => {
    //     const file = event.target.files[0];

    //     if (file) {
    //         const reader = new FileReader();

    //         reader.onloadend = () => {
    //             setSelectedImage(reader.result);
    //         };

    //         reader.readAsDataURL(file);
    //     }
    // };
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
        <Label>
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
    width: 10vw; /* 이미지 크기 조절 */
    height:10vw;
`;

const Image = styled.img`
    width: 10vw; /* 이미지 크기 조절 */
    height:10vw;
`;

const DefaultImage = styled.img`
    width: 10vw; /* 이미지 크기 조절 */
    height:10vw;
    margin-right: 5px; /* 이미지와 텍스트 간격 조절 */
`;

const StyledInput = styled.input`
    display: none; /* input 숨기기 */
`;
export default ProfileImage;