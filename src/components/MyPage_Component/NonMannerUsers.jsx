// 비매너 유저 신고하기
// 해당 유저에게 지금까지 매칭된 유저 중에서만 볼 수 있음

import React, { useState, useEffect, useInsertionEffect } from 'react'
// import axios from 'axios';
import {useNavigate} from 'react-router-dom';

import * as T from './MyPage'
import styled from 'styled-components'
// import Header from '../header/index'
import Footer from '../footer/index'
import Title from '../title/index'
// import Report from '../../pages/Report/report';

/* 서버 연동 시 코드. 일단은 주석 처리 */
// export default function NonMannerUsers() {
//     const navigate = useNavigate();

//     // 서버에서 받아온 유저 목록을 저장할 state
//     const [userList, setUserList] = useState([]);

//     // 선택된 유저 목록을 저장할 state
//     const [selectedUsers, setSelectedUsers] = useState([]);

//     const getUserList = async() => {
//         try{
//             // 서버에서 유저 목록 가져오기
//             const response = await axios.get(/* get 서버 주소 */);
//             setUserList(response.data);
//         } catch(error){
//             console.error('유저 목록을 불러오는 중 오류 발생:', error);
//         }
//     };

//     // component가 처음 마운트될 때 유저 목록을 가져옴
//     useEffect(
//         () => {
//             getUserList();
//         }
//         , []);

//     // 신고 버튼을 누를 시
//     const submitForm = async() => {
//         try {
//             // 서버로 선택된 유저 정보 전송
//             const response = await axios.post(/* post 서버 주소 , */ {selectedUsers});
//             if (response.state === 200){
//                 alert('신고가 접수되었습니다.');
//                 navigate(-1);
//             } else {
//                 alert('신고 제출 중 오류가 발생했습니다.');
//             }
//         } catch (error) {
//             console.error('신고 제출 중 오류 발생:', error);
//         }
//     }

//     // 취소 버튼을 누를 시
//     const cancel = () => {
//         navigate(-1);
//     };

//     // 체크박스 변경 시 selectedUsers 리스트 변경
//     const handleCheckboxChange = (userId) => {
//         setSelectedUsers((prevSelectedUsers) => {
//             if (prevSelectedUsers.includes(userId)){
//                 // 기존의 selectedUsers 배열이 해당 아이디를 가지고 있다면
//                 // == 이미 체크박스 취소 상태를 의미
//                 return prevSelectedUsers.filter((id) => id !== userId);
//                 // 해당 아이디를 제외한 배열을 새로 return
//             } else {
//                 // 기존의 selectedUsers 배열이 해당 아이디를 가지고 있지 않다면
//                 // == 이미 체크박스 선택 상태를 의미
//                 return [...prevSelectedUsers, userId];
//                 // 해당 아이디를 포함한 배열을 새로 return
//             }
//         });
//     };
    

//     return (
//         <>
//             <Header/>
//             <Title title="신고할 유저 선택"/>
//             <T.TotalHr></T.TotalHr>
//             <T.TotalDiv>
//                     <form /* action="제출할 서버 경로" method="post"*/>
//                         <ul>
//                             {userList.map((user) => (
//                                 <li key={user.id}>
//                                     <label htmlFor={`user${user.id}`}>{`유저 ${user.id} 정보`}</label>
//                                     <input
//                                     type="checkbox"
//                                     id={`user${user.id}`}
//                                     onChange={/*() => */handleCheckboxChange(user.id)}
//                                     checked={selectedUsers.includes(user.id)}
//                                     />
//                                 </li>
//                             ))}
//                         </ul>
//                         <div>
//                         <button type="button" onClick={cancel}>
//                         취소
//                         </button>
//                         <button type="button" onClick={submitForm}>
//                         선택
//                         </button>
//                         </div>
//                     </form>        
//             </T.TotalDiv>
//         </>
//     )
// }

// 하드 코딩으로 형태만 잡음
export default function NonMannerUsers() {

    const navigate = useNavigate();

    const [selectedUserInfo, setSelectedUserInfo] = useState('');

    const cancel = () => {
        navigate(-1);
        alert('취소 되었습니다. 이전으로 돌아갑니다');
    };

    const submitForm = () => {
        // 선택된 유저 정보가 있을 경우에만 이동
        if (selectedUserInfo) {
            const { id, Nickname } = selectedUserInfo;
            navigate(`/MyPage/NonMannerUsers/Report`, { state: { id, Nickname } });
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

    const person = [
        { id: 1,  Birth: '00년생', Nickname: '김여자', Uvie: '어쩌고 대학',MatchingDate: '2024-01-30T18:14:14.721908' },
        { id: 2,  Birth: '00년생', Nickname: '김여자', Uvie: '어쩌고 대학', MatchingDate: '2024-01-30T18:14:14.721908' },
        { id: 3,  Birth: '00년생', Nickname: '김여자', Uvie: '어쩌고 대학', MatchingDate: '2024-01-30T18:14:14.721908' },
        { id: 4,  Birth: '00년생', Nickname: '김여자', Uvie: '어쩌고 대학', MatchingDate: '2024-01-30T18:14:14.721908' },
        { id: 5,  Birth: '00년생', Nickname: '김여자', Uvie: '어쩌고 대학', MatchingDate: '2024-01-30T18:14:14.721908' },
        { id: 6,  Birth: '00년생', Nickname: '김여자', Uvie: '어쩌고 대학', MatchingDate: '2024-01-30T18:14:14.721908' },
        { id: 7,  Birth: '00년생', Nickname: '김남자', Uvie: '어쩌고 대학', MatchingDate: '2024-01-30T18:14:14.721908' },
        { id: 8,  Birth: '00년생', Nickname: '김남자', Uvie: '어쩌고 대학', MatchingDate: '2024-01-30T18:14:14.721908' },
        { id: 9,  Birth: '00년생', Nickname: '김남자', Uvie: '어쩌고 대학', MatchingDate: '2024-01-30T18:14:14.721908' },
        { id: 10,  Birth: '00년생', Nickname: '김남자', Uvie: '어쩌고 대학', MatchingDate: '2024-01-30T18:14:14.721908' },
        { id: 11,  Birth: '00년생', Nickname: '김남자', Uvie: '어쩌고 대학', MatchingDate: '2024-01-30T18:14:14.721908' },
        { id: 12,  Birth: '00년생', Nickname: '김남자', Uvie: '어쩌고 대학', MatchingDate: '2024-01-30T18:14:14.721908' },
    ];

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
                                {item.Birth} / {item.Nickname} / {item.Uvie} / {formatDate(item.MatchingDate)}
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