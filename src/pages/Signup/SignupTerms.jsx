// 회원가입 - 2

import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import styled from 'styled-components';
import Title from '../../components/title';
import Footer from '../../components/footer';

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
        navigate('/SignupInfo', { state: { agreePrivacy: agreePrivacy } });
      } 
    }; 

    return (
        <>
            <Title title = "회원가입"/>
            <Separator />
            <AppContainer>
                <Checkbox type="checkbox" id="agreeTerms" checked={agreeAllTerms} onChange={() => handleCheckboxChange('agreeAllTerms')}/>
                <BlackLabel htmlFor="agreeAllTerms">이용약관, 개인정보수집 동의에 모두 동의합니다.</BlackLabel>
                <br/>
                <br/>

                <Checkbox type="checkbox" id="agreeTerms" checked={agreeTerms} onChange={() => handleCheckboxChange('agreeTerms')}/>
                <BlackLabel>이용약관 동의 </BlackLabel>
                <RedLabel> (필수)</RedLabel>
                
                <InfoBox>{`서비스 이용 목적 및 범위: 서비스의 목적과 제공되는 서비스의 범위에 대한 설명.

                  이용자의 의무: 이용자가 서비스를 이용함에 있어야 하는 규정. 예를 들어, 회원가입 시 제공하는 정보의 정확성과 개인정보 보호 등.

                  서비스 제공자의 의무: 서비스 제공자가 이용자에게 제공해야 하는 서비스의 범위와 수준에 관한 규정.

                  서비스 이용 시 유의사항: 서비스를 이용함에 있어 이용자가 주의해야 할 사항을 안내하는 부분. 예를 들어, 서비스 이용 시의 주의사항, 금지 행위 등.

                  이용료 및 결제 방법: 유료 서비스의 경우, 이용자가 지불해야 하는 이용료 및 결제 방법에 관한 규정.

                  서비스 이용의 제한 및 중지: 서비스 이용에 제한을 가하거나 중지할 수 있는 사유와 절차에 관한 규정.

                  개인정보 처리 방침: 이용자의 개인정보 수집, 이용, 보호 등에 관한 규정. GDPR 등의 법률을 준수해야 함에 유의해야 합니다.`}
                                  
                </InfoBox>

                
                <Checkbox type="checkbox" id="agreePrivacy" checked={agreePrivacy} onChange={() => handleCheckboxChange('agreePrivacy')}/>
                <BlackLabel htmlFor="agreePrivacy">개인정보 수집 및 이용 동의</BlackLabel>
                <InfoBox>
                    {`수집하는 개인정보 항목: 어떤 종류의 개인정보를 수집하는지를 명시해야 합니다. 예를 들어, 이름, 이메일 주소, 전화번호 등.

                  개인정보 수집 및 이용 목적: 개인정보가 수집되는 목적을 명시해야 합니다. 예를 들어, 서비스 제공을 위한 회원가입, 고객 서비스 제공, 마케팅 및 광고 활동 등.

                  개인정보의 보유 및 이용 기간: 개인정보를 얼마 동안 보유하고 이용할 것인지에 대한 기간을 명시해야 합니다. 법적 요건에 따라 이를 준수해야 합니다.

                  개인정보의 제공 및 공유: 수집한 개인정보를 외부와 공유할 경우에는 그 목적과 공유되는 정보의 종류, 공유되는 대상자 등을 명시해야 합니다.

                  개인정보 처리의 위탁: 개인정보의 처리를 외부 업체에 위탁할 경우에는 그 내용과 위탁 받는 자의 식별 정보 등을 명시해야 합니다.

                  개인정보의 파기: 개인정보 수집 및 이용 목적이 달성된 후에는 어떻게 파기되는지에 대한 절차와 방법을 명시해야 합니다.`}
                </InfoBox>

                <Checkbox type="checkbox" id="ageCheck" checked={ageCheck} onChange={() => handleCheckboxChange('ageCheck')}/>
                <BlackLabel>만 14세 이상입니다.  </BlackLabel>
                <RedLabel> (필수)</RedLabel>


                <ButtonContainer>
                    <CancelButton>취소</CancelButton>
                    <SubmitButton disabled={!(agreeTerms && ageCheck)} onClick={handleClick}>이어서 가입하기</SubmitButton>
                </ButtonContainer>
            </AppContainer>
            <FooterDiv>
                <Footer/>
            </FooterDiv>
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
  // width: 60vw;
  background-color: Gray;
  margin: 10vw;

`;

const Checkbox = styled.input`
  margin-right: 0.3rem;
  width : 2vw;
  height : 2vw;
`;

const BlackLabel = styled.span`
  font-size : 1.5vw;
  color: black;

  position:relative;
  top: -0.5vw;
`;

const RedLabel = styled.span`
  font-size : 1.5vw;
  color: red;

  position:relative;
  top: -0.5vw;
`;

const InfoBox = styled.pre`
  border: 1px solid #333;
  padding: 1.5vw;
  margin: 2vw 0;
  font-size : 1vw;
  white-space: pre-line;
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


const FooterDiv = styled.div`
  position: relative;
  top: 14vw;
  width: 100%;  

  @media (max-width: 768px) {
    top: 30vw;
  }
`;