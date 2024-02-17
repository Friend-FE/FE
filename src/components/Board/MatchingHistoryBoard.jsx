import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components'
import { useSelector } from 'react-redux'; 

export default function MatchingHistoryBoard() {

    const id = useSelector(state => state.login.id);

    const navigate = useNavigate();
    const [matchingData, setMatchingData] = useState('');

    const fetchData = async () => {
        const userId = 41; // 현재 user Id 임의로 설정
        // console.log(id);
        const idOrUserId = id ? id : userId;

        try {
            const response = await axios.get(`http://13.209.145.28:8080/api/v1/myPage/matchinglist/${idOrUserId}`, {idOrUserId});
            console.log(response.data.data);
            setMatchingData(response.data.data);
        } catch (error) {
          console.error('오류 발생:', error);
          alert('오류가 발생했습니다. 다시 시도해주세요. 보드 문제.');
          navigate(-1);
        }
    }
    
    useEffect(() => {
        fetchData();
    }, []);

    const editBirthYear = (props) => {
        const year = props.slice(0, 4);
        const yearDigits = year.slice(2);

        return yearDigits;
    }

    const editApplicationDate = (props) => {
        const year = props.slice(0, 4);
        const month = props.slice(5, 7);
        const day = props.slice(8, 10);

        return (year + '.' + month + '.' + day);
    }

    return (
        <>
            {matchingData && matchingData.map((item, index) => (
                <MatchingHistoryP>{item.bithday? editBirthYear(item.bithday) + '년생' : 'None data'}
                {' / '}
                {item.opponent? item.opponent : 'None data'}
                {' / '}
                {item.department? item.department : 'None data'}
                {' / '}
                {item.date? editApplicationDate(item.date) : 'None data'}
                </MatchingHistoryP>
            ))}
        </>
    )
}

const MatchingHistoryP = styled.p`
  font-size: 1.33vw;
  margin: 5.3vw 2.66vw;
`;