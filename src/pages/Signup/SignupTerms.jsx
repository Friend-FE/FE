// 회원가입 - 2

import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import styled from 'styled-components';
import Title from '../../components/title';

const SignupTerms = () => {
  const [agreeAllTerms, setAgreeAllTerms] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [agreePrivacy, setAgreePrivacy] = useState(false);
  const [ageCheck, setAgeCheck] = useState(false);

  const handleCheckboxChange = (checkboxName) => {
        switch (checkboxName) {
        case 'agreeAllTerms':
            const newAgreeAllTermsState = !agreeAllTerms;
            setAgreeAllTerms(newAgreeAllTermsState);
            setAgreeTerms(newAgreeAllTermsState);
            setAgreePrivacy(newAgreeAllTermsState);
            setAgeCheck(newAgreeAllTermsState);
            break;
        case 'agreeTerms':
            const newAgreeTermsState = !agreeTerms;
            setAgreeAllTerms(newAgreeTermsState && agreePrivacy && ageCheck);
            setAgreeTerms(newAgreeTermsState);
            break;
        case 'agreePrivacy':
            const newAgreePrivacyState = !agreePrivacy;
            setAgreeAllTerms(agreeTerms && newAgreePrivacyState && ageCheck);
            setAgreePrivacy(newAgreePrivacyState);
            break;
        case 'ageCheck':
            const newAgeCheckState = !ageCheck;
            setAgreeAllTerms(agreeTerms && agreePrivacy && newAgeCheckState);
            setAgeCheck(newAgeCheckState);
            break;
        default:
            break;
        }
    };

    const navigate = useNavigate();
    const handleClick = (event) => {
        event.preventDefault();
        if(agreeTerms && ageCheck){
            navigate('/SignupInfo');
        } 
    }; 

    return (
        <>
            <Title title = "회원가입"/>
            <Separator />
            <AppContainer>
                <Checkbox type="checkbox" id="agreeTerms" checked={agreeAllTerms} onChange={() => handleCheckboxChange('agreeAllTerms')}/>
                <label htmlFor="agreeAllTerms">이용약관, 개인정보수집 동의에 모두 동의합니다.</label>
                <br/>
                <br/>

                <Checkbox type="checkbox" id="agreeTerms" checked={agreeTerms} onChange={() => handleCheckboxChange('agreeTerms')}/>
                <label htmlFor="agreeTerms">이용약관 동의 (필수)</label>
                <InfoBox>
                    ***** 이용약관 태그가 들어올 자리**** 
                </InfoBox>

                
                <Checkbox type="checkbox" id="agreePrivacy" checked={agreePrivacy} onChange={() => handleCheckboxChange('agreePrivacy')}/>
                <label htmlFor="agreePrivacy">개인정보 수집 및 이용 동의</label>
                <InfoBox>
                    ***** 이용약관 태그가 들어올 자리**** 
                </InfoBox>

                <Checkbox type="checkbox" id="ageCheck" checked={ageCheck} onChange={() => handleCheckboxChange('ageCheck')}/>
                <label htmlFor="ageCheck">만 14세 이상입니다. (필수)</label>
            
                <ButtonContainer>
                    <CancelButton>취소</CancelButton>
                    <SubmitButton disabled={!(agreeTerms && ageCheck)} onClick={handleClick}>이어서 가입하기</SubmitButton>
                </ButtonContainer>
            </AppContainer>
        </>
    )
}

export default SignupTerms;


// 전체를 담고 있는 컨테이너
const AppContainer = styled.div`
    justify-content: center;
    width: 70%; /* 원하는 크기로 조정 (가로의 반 정도로 설정) */
    margin: 0 auto; /* 수평 가운데 정렬을 위해 margin을 auto로 설정 */
`;

//수평선 스타일
const Separator = styled.div`
  height: 1px;
  background-color: Gray;
  margin : 15vw 10vw 5vw 10vw;
`;

const Checkbox = styled.input`
  margin-right: 0.3rem;
`;

const InfoBox = styled.div`
  border: 1px solid #333;
  padding: 1.5vw;
  margin: 2vw 0;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center; /* 가로축에서 가운데 정렬 */
  margin-top : 5vw;
`;

const CancelButton = styled.button`
    background-color: #FFF;
    font-size : 1vw;
    color: black;
    border: none;
    padding: 1.5vw;
    width : 15vw;
    cursor: pointer;
    border-radius: 10px;
    box-shadow: -0.6vw 0.5vw 0.3vw rgba(0, 0, 0, 0.2);
`;

const SubmitButton = styled.button`
  background-color: #23CAFF;
  font-size : 1vw;
  color: white;
  border: none;
  padding: 0.6rem;
  width : 15vw;
  cursor: pointer;
  border-radius: 5px;
  box-shadow: -0.6vw 0.5vw 0.3vw rgba(0, 0, 0, 0.2);

  /* isFormValid가 false일 때 버튼 비활성화 스타일 추가 */
  &:disabled {
    background-color: #B9EEFF;
    cursor: not-allowed;
  }
`;