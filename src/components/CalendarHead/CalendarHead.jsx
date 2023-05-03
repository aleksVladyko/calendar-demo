import { useState } from "react";
import styled from "styled-components";
import arrow from "../../img/arrow.svg";
import * as dateFns from "date-fns";
import { Event } from "../calendarbody/CalendarBody";

const HeadContainer = styled.div`
    background-color: #eee;
    position: sticky;
    width: 100%;
    top: 80px;
    max-width: 740px;
    z-index: 10;
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
const Month = styled.div``;
const Year = styled.div``;

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
    const first = date.getDate() - date.getDay();
    const firstDay = dateFns.startOfMonth(date);
    const lastDay = dateFns.lastDayOfMonth(date);
    const startWeek = dateFns.startOfWeek(firstDay, { weekStartsOn: 1 });
    const endWeek = dateFns.lastDayOfWeek(lastDay, { weekStartsOn: 1 });
    const endTodayWeek = dateFns.endOfWeek(firstDay, { weekStartsOn: 1 });

    const allDayOfMonth = dateFns.eachDayOfInterval(
        {
            start: startWeek,
            end: endWeek,
        },
        { weekStartsOn: 1 }
    );

    const dayOfWeek = dateFns.eachDayOfInterval(
        {
            start: startWeek,
            end: endTodayWeek,
        },
        { weekStartsOn: 1 }
    );

  
      console.log(dayOfWeek);
    console.log(allDayOfMonth);

    const arrDays = [];
    for (let day = 1; day <= 7; day++) {
        arrDays.push(new Date(date.setDate(first + day)));
    }

    const getDayOfWeek = arrDays.map((getDay, index) => {
        return (
            <WeekOfDays key={index}>
                {getDay.toLocaleString("ru", { weekday: "short" })}
            </WeekOfDays>
        );
    });
    const getDayOfWeekValue = arrDays.map((getDay, index) => {
        return (
            <WeekDayValue key={index} id="day">
                {getDay.toLocaleString("ru", { day: "numeric" })}
            </WeekDayValue>
        );
    });
    const todayMonth = date.toLocaleString("ru", { month: "long" });
    const todayYear = date.getFullYear();

    return (
        <HeadContainer>
            <WeekContainer>
                {getDayOfWeek}
                {getDayOfWeekValue}
            </WeekContainer>

            <NavCurrentMonth>
                <PrevWeek />
                <Month>{todayMonth}</Month>
                <Year>{todayYear}</Year>

                <NextWeek />
            </NavCurrentMonth>
        </HeadContainer>
    );
};
export default CalendarHead;
