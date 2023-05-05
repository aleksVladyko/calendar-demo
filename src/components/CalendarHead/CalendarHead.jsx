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
    width: 50px;
    margin: auto;
    font-size: 26px;
    cursor: pointer;
    border-radius: 50%;
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


const CalendarHead = () => {
    const [date, setDate] = useState(new Date());
    const startWeek = dateFns.startOfWeek(date, { weekStartsOn: 1 });
    const endWeek = dateFns.lastDayOfWeek(date, { weekStartsOn: 1 });
    const dayOfWeek = dateFns.eachDayOfInterval(
        {
            start: startWeek,
            end: endWeek,
        },
        { weekStartsOn: 1 }
    );
    return (
        <HeadContainer>
            <WeekContainer>
                {dayOfWeek.map((dayweek, i) => (
                    <WeekOfDays key={i}>
                        {dateFns.format(dayweek, formatOfWeek)}
                    </WeekOfDays>
                ))}
                {dayOfWeek.map((dayvalue, index) => (
                    <WeekDayValue key={index} style={{color: 'white', background: 'red'}}>
                        {dayvalue.getDate()}
                    </WeekDayValue>
                ))}
            </WeekContainer>

            <NavCurrentMonth>
                <PrevWeek
                    onClick={() => setDate(dateFns.previousMonday(date))}
                />
                <Month>{dateFns.format(date, formatOfMonth)}</Month>
                <Year>{dateFns.format(date, formatOfYear)}</Year>

                <NextWeek onClick={() => setDate(dateFns.nextMonday(date))} />
            </NavCurrentMonth>
        </HeadContainer>
    );
};
export default CalendarHead;
