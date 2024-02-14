// 회원 목록 보기에 필요한 회원 블록

import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

import * as MAH from '../ManagerPage_Component/MatchingApplicationHistoryWoman'

export default function MemberPersonBlock({ info }) {

  // const [checkYear, setCheckYear] = useState(year);
  // const [checkMonth, setCheckMonth] = useState(month);
  // const [checkDay, setCheckDay] = useState(day);


  const navigate = useNavigate();

  const handlePersonDivClick = (item) => {
    navigate(`/ManagerPage/ViewMembershipList/ViewMembershipDetail/${item.memberId}`, { state: { item } });
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
          info.map((item) => (
            <MAH.PersonDiv key={item.memberId} onClick={() => handlePersonDivClick(item)}>
              <MAH.NameH5>{item.nickname} 님</MAH.NameH5>
              <MAH.P>{formatDate(item.createdAt)}</MAH.P>
            </MAH.PersonDiv>
        ))}
    </>
  );
}