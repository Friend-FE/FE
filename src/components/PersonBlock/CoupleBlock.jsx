// 안 씀. 추후 삭제 예정
// 매칭 완료 내역에 필요한 회원 블록

import React, { useState } from 'react'
import styled from 'styled-components'
// import { useNavigate } from 'react-router-dom';

// import * as MAH from '../ManagerPage_Component/MatchingApplicationHistory'
import * as M from '../ManagerPage_Component/MatchingApplicationHistoryWoman';

export default function CoupleBlock({ info, year, month, day }) {

    // console.log('블럭 파일에서 props 검사:', year, month, day);

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
    };
    
    return (
        <>
            {info &&
                info.map((item) => {
                const [JoinYear, JoinMonth, JoinDay] = MatchingDate(item.ManApplicationDate);
                if(JoinYear === year && JoinMonth === month && JoinDay === day){
                    console.log('연도, 달, 일 일치합니다.');
                    return (
                        <CoupleDiv key={item.id}>
                            <M.PersonDiv>
                                <M.NameH5>{item.ManName} 님</M.NameH5>
                                <M.P>{formatDate(item.ManApplicationDate)}</M.P>
                            </M.PersonDiv>
                            <M.PersonDiv>
                                <M.NameH5>{item.WomanName} 님</M.NameH5>
                                <M.P>{formatDate(item.WomanApplicationDate)}</M.P>
                            </M.PersonDiv>
                        </CoupleDiv>
                    );
                }
                return null;
            })}
        </>
    )
};

const CoupleDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  margin: 1vw 8vw;
`;