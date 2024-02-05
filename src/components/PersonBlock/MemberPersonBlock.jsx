// 회원 목록 보기에 필요한 회원 블록

import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

import * as MAH from '../ManagerPage_Component/MatchingApplicationHistory'

export default function MemberPersonBlock({ info, gender, year, month, day }) {

  // const [checkYear, setCheckYear] = useState(year);
  // const [checkMonth, setCheckMonth] = useState(month);
  // const [checkDay, setCheckDay] = useState(day);

  console.log('블럭 파일에서 props 검사:', year, month, day);

  const navigate = useNavigate();

  const handlePersonDivClick = (item) => {
    // 새로운 페이지로 연결해야 함.
    // navigate(`/ManagerPage/MatchingApplicationHistory/${item.id}`, { state: { item } });
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

  const MatchingDate = (dataString) => {
    const date = new Date(dataString);
    const year = date.getFullYear().toString();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    return [year, month, day];
  }

  return (
    <>
      {info &&
          info.map((item) => {
          const [JoinYear, JoinMonth, JoinDay] = MatchingDate(item.date);
          // console.log('JoinYear :', JoinYear);
          // console.log('year : ', year);
          if(JoinYear === year && JoinMonth === month && JoinDay === day){
            console.log('연도, 달, 일 일치합니다.');
            if (gender === 'all' || gender === item.gender) {
              return (
                <MAH.PersonDiv key={item.id} onClick={() => handlePersonDivClick(item)}>
                  <MAH.NameH5>{item.name} 님</MAH.NameH5>
                  <MAH.P>{formatDate(item.date)}</MAH.P>
                </MAH.PersonDiv>
              );
            }
            return null;
          }
          return null;
        })}
    </>
  );
}