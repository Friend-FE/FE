// 매칭 신청 내역 모아보기에 필요한 회원 블록

import React from 'react'
import { useNavigate } from 'react-router-dom';

import * as MAH from '../ManagerPage_Component/MatchingApplicationHistoryWoman'

export default function MatchingPersonBlock({ info, gender }) {
    
    const navigate = useNavigate();
  
    const handlePersonDivClick = (item) => {
      if(item.gender === 'FEMALE'){
        navigate(`/ManagerPage/MatchingAHDetailWoman/${item.id}`, { state: { item } });
      }
      if(item.gender === 'MALE'){
        navigate(`/ManagerPage/MatchingAHDetailMan/${item.id}`, { state: { item } });
      }
    };
  
    const formatDate = (dateString) => {
      const date = new Date(dateString);
      const year = date.getFullYear();
      const month = (date.getMonth() + 1).toString().padStart(2, '0');
      const day = date.getDate().toString().padStart(2, '0');
      const hours = date.getHours().toString().padStart(2, '0');
      const minutes = date.getMinutes().toString().padStart(2, '0');
      return `${year}/${month}/${day}  ${hours}:${minutes}`;
    };
  
    return (
      <>
        {info &&
          info.map((item) => {
            if (gender === item.gender) {
              return (
                <MAH.PersonDiv key={item.id} onClick={() => handlePersonDivClick(item)}>
                  <MAH.NameH5>{item.nickname} 님</MAH.NameH5>
                  <MAH.P>{item.date}</MAH.P>
                  {/* 테스트용 */}
                  {/* <MAH.P>{item.id}</MAH.P> */}
                </MAH.PersonDiv>
              );
            }
            return null; // gender가 all이 아니면서 item.gender와 다른 경우, null 반환하여 해당 데이터를 무시
          })}
      </>
    );
  }