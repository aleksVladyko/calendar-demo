import { useState } from "react";
import styled from "styled-components";
import arrow from "../../img/arrow.svg";
import * as dateFns from "date-fns";


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
    height: 40px;
`;
const WeekDayValue = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40px;
    font-size: 26px;
    cursor: pointer;
`;
const Month = styled.div`
    display: flex;
    align-items: center;
`;
const Year = styled.div`
    display: flex;
    align-items: center;
`;

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
const formatOfYear = "yyyy";
const formatOfMonth = "MMMM";
const formatOfWeek = "eeeee";
const formatOfDay = "d";

const CalendarHead = () => {
    const [date, setDate] = useState(new Date());
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
   
    const weeks = dateFns.eachWeekOfInterval(
        {
            start: firstDay,
            end: lastDay,
        },
        { weekStartsOn: 1 }
    );
   
console.log(weeks);
    // const arrDays = [];
    // for (let day = 1; day <= 7; day++) {
    //     arrDays.push(new Date(date.setDate(first + day)));
    // }

    // const getDayOfWeek = arrDays.map((getDay, index) => {
    //     return (
    //         <WeekOfDays key={index}>
    //             {getDay.toLocaleString("ru", { weekday: "short" })}
    //         </WeekOfDays>
    //     );
    // });
    // const getDayOfWeekValue = arrDays.map((getDay, index) => {
    //     return (
    //         <WeekDayValue key={index} id="day">
    //             {getDay.toLocaleString("ru", { day: "numeric" })}
    //         </WeekDayValue>
    //     );
    // });
    

    return (
        <HeadContainer>
            <WeekContainer>
                {dayOfWeek.map((dayweek) => (
                    <WeekOfDays key={dayweek}>
                        {dateFns.format(dayweek, formatOfWeek)}
                    </WeekOfDays>
                ))}
                {dayOfWeek.map((dayvalue, index) => (
                    <WeekDayValue key={index}>
                        {dateFns.format(dayvalue, formatOfDay)}
                    </WeekDayValue>
                ))}
            </WeekContainer>

            <NavCurrentMonth>
                <PrevWeek />
                <Month>{dateFns.format(date, formatOfMonth)}</Month>
                <Year>{dateFns.format(date, formatOfYear)}</Year>

                <NextWeek onClick={() => setDate(dateFns.addDays(firstDay, 7))} />
            </NavCurrentMonth>
        </HeadContainer>
    );
};
export default CalendarHead;
