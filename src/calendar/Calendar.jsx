import { useRef, useState } from "react";
import * as dateFns from "date-fns";
import {
    HeadContainer,
    WeekContainer,
    WeekDayValue,
    WeekOfDays,
    NavCurrentMonth,
    NextWeek,
    PrevWeek,
    Month,
    Year,
} from "../constats";
import { CalendarWraper, Footer, FooterToday, FooterDelete } from "../constats";
import {
    HeaderWrapper,
    HeaderText,
    HeaderAddWrapper,
    HeaderAdd,
} from "../constats";

import { Body, BodyTime, BodyEvent, Event, Time } from "../constats";

const formatOfYear = "yyyy";
const formatOfMonth = "MMMM";
const formatOfWeek = "eeeee";

const Calendar = () => {
    const [date, setDate] = useState(new Date());
    const [state, setState] = useState();
    
    const startWeek = dateFns.startOfWeek(date, { weekStartsOn: 1 });
    const endWeek = dateFns.lastDayOfWeek(date, { weekStartsOn: 1 });

    const startHour = 8;
    const endHour = 21;
    const hour = [];
    for (let getHour = startHour; getHour <= endHour; getHour++) {
        hour.push(getHour.toString().padStart(2, "0") + ":00");
    }
    const event = [];
    for (let divEvent = 1; divEvent <= 98; divEvent++) {
        event.push(divEvent);
    }

    const dayOfWeek = dateFns.eachDayOfInterval(
        {
            start: startWeek,
            end: endWeek,
        },
        { weekStartsOn: 1 }
    );
    

    const changeDay = (event) => {
        setState(event.currentTarget.getAttribute("data-date"));
    };
    const createEvent = () => {
        let inputDate = window.prompt("Enter event time: YYYY-MM-DD HH:mm:ss");
        console.log(inputDate);
    };
    return (
        <CalendarWraper>
            <HeaderWrapper>
                <HeaderText>Interview Calendar</HeaderText>
                <HeaderAddWrapper>
                    <HeaderAdd onClick={() => createEvent()} />
                </HeaderAddWrapper>
            </HeaderWrapper>
            <HeadContainer>
                <WeekContainer>
                    {dayOfWeek.map((dayweek, i) => (
                        <WeekOfDays key={i}>
                            {dateFns.format(dayweek, formatOfWeek)}
                        </WeekOfDays>
                    ))}
                    {dayOfWeek.map((dayvalue, index) => (
                        <WeekDayValue
                            date={date}
                            key={index}
                            active={dateFns.isToday(dayvalue)}
                        >
                            {dayvalue.getDate()}
                        </WeekDayValue>
                    ))}
                </WeekContainer>

                <NavCurrentMonth>
                    <PrevWeek
                        onClick={() =>
                            setDate(dateFns.previousMonday(startWeek))
                        }
                    />
                    <Month>{dateFns.format(date, formatOfMonth)}</Month>
                    <Year>{dateFns.format(date, formatOfYear)}</Year>

                    <NextWeek
                        onClick={() => setDate(dateFns.nextMonday(date))}
                    />
                </NavCurrentMonth>
            </HeadContainer>

            <Body>
                <BodyTime>
                    {hour.map((time, i) => {
                        return <Time key={i}>{time}</Time>;
                    })}
                </BodyTime>
                <BodyEvent>
                    {event.map((div, i) => {
                        return <Event 
                        key={i}
                        
                        ></Event>;
                    })}
                </BodyEvent>
            </Body>
            <Footer>
                <FooterToday onClick={() => setDate(new Date())}>
                    Today
                </FooterToday>
                <FooterDelete>Delete</FooterDelete>
            </Footer>
        </CalendarWraper>
    );
};
export default Calendar;
