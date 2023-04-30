import { useState } from "react";
import styled from "styled-components";
import arrow from "../../img/arrow.svg"

const HeadContainer = styled.div`
background-color: #eee;

`;
const NavDay = styled.td`
  cursor: pointer;
`;

const NavDayName = styled.div`
  text-align: center;
  padding: 7px 0;
  font-size: 16px;
  font-weight: bold;
  @media (max-width: 600px) {
    font-size: 14px;
  }
`;

const NavDayValue = styled.div`
  text-align: center;
  width: 50px;
  height: 50px;
  margin: auto;
  line-height: 50px;
  font-weight: bold;
  font-size: 26px;
  ${({ active }) =>
    active &&
    `
    border-radius:25px;
    background-color:red;
    color: #fff;
  `}
  @media (max-width: 600px) {
    width: 40px;
    height: 40px;
    line-height: 40px;
    font-size: 20px;
  }
`;

const NavTd = styled.td`
  @media (max-width: 600px) {
    height: 45px;
  }
`;

const NavCurrentMonth = styled.td`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  @media (max-width: 600px) {
    font-size: 18px;
  }
`;

const NextWeek = styled.div`
  background-image: url(${arrow});
  background-size: 25px 25px;
  background-repeat: no-repeat;
  background-position: 50%;
  width: 40px;
  height: 40px;
  margin: auto;
  cursor: pointer;
  @media (max-width: 600px) {
    background-size: 20px 20px;
    width: 30px;
    height: 30px;
  }
`;
const PrevWeek = styled(NextWeek)`
  transform: rotate(180deg);
`;

const CalendarHead = () => {
  const [date, setDate] = useState(new Date());
  const dayOfWeek = [];
  const day = {
    stringDay: null,
    numberDay: null,
  }
  const first = date.getDate() - date.getDay() + 1;
  const nextDay = first;
  const firstDayofWeek = new Date(date.setDate(first )).toLocaleString('ru', {weekday: 'short'});
     const lastDayofWeek = new Date(date.setDate(first + 6)).toLocaleString('ru', {weekday: 'short'});

   return (
    <HeadContainer>
      <NextWeek/>
      <PrevWeek/>
    </HeadContainer>
  );
};
export default CalendarHead;