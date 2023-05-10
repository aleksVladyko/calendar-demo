import { useState } from "react";
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
import DayEvents from "./DayEvents";

const formatOfYear = "yyyy";
const formatOfMonth = "MMMM";
const formatOfWeek = "eeeee";

const Calendar = (props) => {
    const [date, setDate] = useState(new Date());
    const [myId, setMyId] = useState(1);
    const [events, setEvents] = useState([]);
    const [event, setEvent] = useState(-1);
    const startWeek = dateFns.startOfWeek(date, { weekStartsOn: 1 });
    const endWeek = dateFns.lastDayOfWeek(date, { weekStartsOn: 1 });

    const dayOfWeek = dateFns.eachDayOfInterval(
        {
            start: startWeek,
            end: endWeek,
        },
        { weekStartsOn: 1 }
    );

    const createEvent = () => {
        let inputDate = window.prompt("Enter event time: YYYY-MM-DD HH:mm:ss");
        let eventStr = dateFns.isMatch(inputDate, "yyyy-MM-dd HH:mm:ss");
        if (eventStr) {
            let newIventDate = dateFns.lightFormat(
                new Date(inputDate),
                "yyyy-MM-dd HH:mm:ss"
            );
            const newEvent = {
                id: myId,
                startEvent: dateFns.subHours(new Date(newIventDate), 1),
                endEvent: dateFns.addHours(new Date(newIventDate), 1),
                description: "addEvent",
            };
            setMyId(myId + 1);
            setEvents([...events, newEvent]);
        } else {
            alert("Date is invalid");
        }
    };

    return (
        <CalendarWraper>
            <HeaderWrapper>
                <HeaderText>Interview Calendar</HeaderText>
                <HeaderAddWrapper>
                    <HeaderAdd onClick={createEvent} />
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

            <DayEvents
                monday={startWeek}
                events={events}
                event={event}
                setEvent={setEvent}
            />
            <Footer>
                <FooterToday onClick={() => setDate(new Date())}>
                    Today
                </FooterToday>
                <FooterDelete
                    visible={events.length}
                    onClick={() => {
                        const del = [...events];
                        del.splice(event, 1);
                        setEvents(del);
                        setEvent(-1);
                    }}
                >
                    Delete
                </FooterDelete>
            </Footer>
        </CalendarWraper>
    );
};
export default Calendar;
