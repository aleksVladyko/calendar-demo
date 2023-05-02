import { useState } from "react";
import styled from "styled-components";
import arrow from "../../img/arrow.svg"

const HeadContainer = styled.div`
background-color: #eee;
`;
const WeekContainer = styled.div`
display: grid;
grid-template-columns: repeat(7, 1fr);
grid-template-row: repeat(2, 1fr);
min-height: 60px;
margin-left: 60px;
font-size: 20px;
font-weight: bold;

`;
const WeekOfDays = styled.div`
display: flex;
justify-content: center;
align-items: center;

`;
const WeekDayValue = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 50px;
font-size: 26px;
cursor: pointer;
`;
const Month = styled.div`
`;
const Year = styled.div`
`;
// const NavDay = styled.td`
//   cursor: pointer;
// `;

// const NavDayName = styled.div`
//   text-align: center;
//   padding: 7px 0;
//   font-size: 16px;
//   font-weight: bold;
//   @media (max-width: 600px) {
//     font-size: 14px;
//   }
// `;

// const NavDayValue = styled.div`
//   text-align: center;
//   width: 50px;
//   height: 50px;
//   margin: auto;
//   line-height: 50px;
//   font-weight: bold;
//   font-size: 26px;
//   ${({ active }) =>
//     active &&
//     `
//     border-radius:25px;
//     background-color:red;
//     color: #fff;
//   `}
//   @media (max-width: 600px) {
//     width: 40px;
//     height: 40px;
//     line-height: 40px;
//     font-size: 20px;
//   }
// `;

// const NavTd = styled.td`
//   @media (max-width: 600px) {
//     height: 45px;
//   }
// `;

const NavCurrentMonth = styled.div`
display: flex;
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  gap: 10px;
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
  console.log(date.formate);
  const first = date.getDate() - date.getDay(); 
  const arrDays = [];
  for(let day = 1; day <= 7; day++){
    arrDays.push(
      new Date(date.setDate(first + day))
      )}
      
      const getDayOfWeek = arrDays.map((getDay, index) => {
        return <WeekOfDays key={index}>{getDay.toLocaleString('ru', {weekday: 'short'})}</WeekOfDays>
      })
      const getDayOfWeekValue = arrDays.map((getDay, index) => {
        return <WeekDayValue key={index}>{getDay.toLocaleString('ru', {day: 'numeric'})}</WeekDayValue>
      })
      const todayMonth = date.toLocaleString('ru', {month: 'long'});
      const todayYear = date.getFullYear();
    // const todayMy = (todayMonth, todayYear) => {
    //   return (<div>{todayMonth}</div>
    //   <div>{todayYear}</div>
    // )}
   return (
    <HeadContainer>
     <WeekContainer>
      {getDayOfWeek}{getDayOfWeekValue}
     </WeekContainer>

      <NavCurrentMonth>
          <PrevWeek/>
          <Month>
            {todayMonth}
          </Month>
      <Year>
        {todayYear}
      </Year>
      
         <NextWeek/>
      </NavCurrentMonth>
     
    </HeadContainer>
  );
};
export default CalendarHead;