// 비매너 유저 신고하기
// 해당 유저에게 지금까지 매칭된 유저 중에서만 볼 수 있음

import React, { useState, useEffect, useInsertionEffect } from 'react'
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import { useSelector } from 'react-redux'; 

import * as T from './MyPage'
import styled from 'styled-components'
// import Header from '../header/index'
import Footer from '../footer/index'
import Title from '../title/index'
// import Report from '../../pages/Report/report';

// 하드 코딩으로 형태만 잡음
export default function NonMannerUsers() {

    const navigate = useNavigate();
    const id = useSelector(state => state.login.id);

    const [person, setPerson] = useState([]);
    const [selectedUserInfo, setSelectedUserInfo] = useState('');

    const cancel = () => {
        navigate(-1);
        alert('취소 되었습니다. 이전으로 돌아갑니다');
    };

    const submitForm = () => {
        // 선택된 유저 정보가 있을 경우에만 이동
        if (selectedUserInfo) {
            const { id, opponentNickname } = selectedUserInfo;
            navigate(`/MyPage/NonMannerUsers/Report`, { state: { id, opponentNickname } });
        } else {
            alert('유저를 선택해주세요.'); // 선택된 유저가 없을 경우 알림
        }
    };

    const handleCheckboxChange = (userInfo) => {
        setSelectedUserInfo(userInfo);
    };

    // Date 깔끔하게 보이도록 하는 함수
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const year = date.getFullYear();
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const day = date.getDate().toString().padStart(2, '0');
        return `${year}.${month}.${day}`;
    };

    const fetchData = async () => {
        const userId = 20; // 임의로 값 부여
        const idOrUserId = id ? id : userId;

        try {
          const response = await axios.get(`http://13.209.145.28:8080/api/v1/report/reportList/${idOrUserId}`, {idOrUserId});
          setPerson(response.data.data);
          console.log('연결 성공');

        } catch (error) {
          console.error('오류 발생:', error);
          alert('신고할 수 있는 유저가 없습니다.');
          navigate(-1); 
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    // console.log(person);

    return (
        <>
            <Title title="신고할 유저 선택"/>
            <T.TotalHr></T.TotalHr>
            <T.TotalDiv>
            <Form /* action="제출할 서버 경로" method="post"*/>
                <ul>
                    {person && [...person].reverse().map((item, index) => (
                        <FormLi key={item.id}>
                            <Label htmlFor={item.id}>
                                {item.opponentBirthday} / {item.opponentNickname} / {item.opponentDepartment} / {item.date}
                            </Label>
                            <FormCheckbox
                                type="checkbox"
                                id={item.id}
                                onChange={() => handleCheckboxChange(item)}
                                checked={selectedUserInfo && selectedUserInfo.id === item.id}
                            />
                        </FormLi>
                    ))}
                </ul>
            </Form>
                <div>
                    <CencleBtn type="button" onClick={cancel}>취소</CencleBtn>
                    <SubmitBtn type="button" onClick={submitForm}>선택</SubmitBtn>
                </div>
                <FooterContainer>
                    <Footer/>
                </FooterContainer>
            </T.TotalDiv>
        </>
    )
}

export const Form = styled.form`

    width: 46vw;
    margin: 0 0 5.3vw 0;

    background-color: #DAF6FF;
    border-radius: 1.3vw;
    box-shadow: 0.6vw 1vw 0.3vw rgba(0, 0, 0, 0.2);
`;

export const FormLi = styled.li`
    margin: 5.3vw 2.6vw;
    list-style-type: none;
`;

export const Label = styled.label`
    font-size: 1vw;
`;

export const FormCheckbox = styled.input`
    width: 1.3vw;
    height: 1.3vw;
    margin: 0 0 0 1.3vw;

    position: relative;
    top: 0.33vw;

    appearance: none;
    border: 0.13vw solid black;
    background-color: transparent;
    outline: none;
    cursor: pointer;
    border-radius: 0.13vw;

    &:checked::before {
        content: '\u2713';
        position: absolute;
        left: 0.13vw;
        top: -0.13vw;
        font-size: 1vw;
        font-weight: bold;
    }
`;

export const CencleBtn = styled.button`
    width: 11.8vw;
    height: 3.33vw;

    margin: 0 1.3vw 1.3vw 1.3vw;

    font-size: 1vw;
    font-weight: bold;  

    border:none;
    background-color: white;

    box-shadow: -0.3vw 0.6vw 0.3vw rgba(0, 0, 0, 0.2);
    
    cursor: pointer;
`;

export const SubmitBtn = styled.button`
    width: 11.8vw;
    height: 3.33vw;

    margin: 0 1.3vw 1.3vw 1.3vw;

    font-size: 1vw;
    font-weight: bold; 
    color: white;

    border:none;
    background-color: #8BE3FF;

    box-shadow: -0.3vw 0.6vw 0.3vw rgba(0, 0, 0, 0.2);
    
    cursor: pointer;
`;

export const FooterContainer = styled.div`
    position: relative;
    bottom: -2vw;
    width: 100%;

    @media (max-width: 768px) {
    top: -5vw;
  }
`;