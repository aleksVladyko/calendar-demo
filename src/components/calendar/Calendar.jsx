import { useState } from "react";
import CalendareTitle from "../CalendarTitle/CalendareTitle";
import styled from "styled-components";

const CalendarWraper = styled.div`
    text-align: center;
    max-width: 740px;
    background-color: "#fff";
    margin: auto;
    position: relative;
    box-shadow: inset 0 0 15px gray;
`;
const Calendar = () => {
    const [date, setDate] = useState(new Date());

    const nextWeek = () => {};
    const prewWeek = () => {};

    return (
        <CalendarWraper>
            <CalendareTitle />
        </CalendarWraper>
    );
};
export default Calendar;
