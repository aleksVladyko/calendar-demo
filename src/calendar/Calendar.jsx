import { useState } from "react";
import CalendareTitle from "../components/CalendarTitle/CalendareTitle";
import CalendarFooter from "../components/calendarFooter/CalendarFooter";
import styled from "styled-components";
import CalendarHead from "../components/CalendarHead/CalendarHead";
import CalendarBody from "../components/calendarbody/CalendarBody";

const CalendarWraper = styled.div`
    text-align: center;
    max-width: 740px;
    background-color: #fff;
    margin: auto;
    position: relative;
    // box-shadow: inset 0 0 15px gray;
`;
const Calendar = () => {
    const [date, setDate] = useState(new Date());

    const nextWeek = () => {};
    const prewWeek = () => {};

    return (
        <CalendarWraper>
            <CalendareTitle />
            <CalendarHead/>
            <CalendarBody />
            <CalendarFooter />
        </CalendarWraper>
    );
};
export default Calendar;
