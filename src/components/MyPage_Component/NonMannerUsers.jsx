// 비매너 유저 신고하기
// 해당 유저에게 지금까지 매칭된 유저 중에서만 볼 수 있음

import React /*, { useState, useEffect, useInsertionEffect }*/ from 'react'
// import axios from 'axios';
import {useNavigate} from 'react-router-dom';

import * as T from './MyPage'
import styled from 'styled-components'
// import Header from '../header/index'
// import Footer from '../footer/index'
import Title from '../title/index'

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

    const cancel = () => {
        navigate(-1);
        alert('취소 되었습니다. 이전으로 돌아갑니다');
    };

    const submitForm = () => {
        navigate(-1);
        alert('신고 접수 되었습니다. 이전으로 돌아갑니다');
    };


    return (
        <>
            {/* <Header/> */}
            <Title title="신고할 유저 선택"/>
            <T.TotalHr></T.TotalHr>
            <T.TotalDiv>
                <Form /* action="제출할 서버 경로" method="post"*/>
                    <ul>
                        <FormLi>
                            <Label htmlFor="user1">00년생 / 부경대최고 / 경영대학 / 2024.01.03</Label>
                            <FormCheckbox type="checkbox" id="user1"/>
                        </FormLi>
                        <FormLi>
                            <Label htmlFor="user2">02년생 / 부경대미남 / 인문사회과학대학 / 2024.01.02</Label>
                            <FormCheckbox type="checkbox" id="user2"/>
                        </FormLi>
                    </ul>
                </Form>
                <div>
                    <CencleBtn type="button" onClick={cancel}>취소</CencleBtn>
                    <SubmitBtn type="button" onClick={submitForm}>선택</SubmitBtn>
                </div>
                {/* <FooterContainer>
                    <Footer/>
                </FooterContainer> */}
            </T.TotalDiv>
        </>
    )
}

const Form = styled.form`

    width: 46vw;
    margin: 0 0 5.3vw 0;

    background-color: #DAF6FF;
    border-radius: 1.3vw;
    box-shadow: 0.6vw 1vw 0.3vw rgba(0, 0, 0, 0.2);
`;

const FormLi = styled.li`
    margin: 5.3vw 2.6vw;
    list-style-type: none;
`;

const Label = styled.label`
    font-size: 1vw;
`;

const FormCheckbox = styled.input`
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

const CencleBtn = styled.button`
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

const SubmitBtn = styled.button`
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

// const FooterContainer = styled.div`
//     position: absolute;
//     bottom: -100px;
//     width: 100%;
// `;