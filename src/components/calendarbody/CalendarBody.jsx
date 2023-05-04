import styled from "styled-components";

const Body = styled.div`
    margin-top: 80px;
    margin-bottom: 80px;
    display: grid;
    grid-template-columns: 60px 1fr;
`;

const BodyTime = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-auto-rows: 45px;
`;
const Time = styled.div`
    margin-top: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`;

const BodyEvent = styled.div`
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    grid-auto-rows: 45px;
`;

export const Event = styled.div`
    bottom: -12px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-right: 2px solid #e6e6e6;
    border-bottom: 2px solid #e6e6e6;
    cursor: pointer;
`;
const CalendarBody = () => {
    const startHour = 8;
    const endHour = 21;
    const hour = [];
    for (let getHour = startHour; getHour <= endHour; getHour++) {
        hour.push(getHour.toString().padStart(2, "0") + ":00");
    }
    const getTime = hour.map((time, i) => {
        return <Time key={i}>{time}</Time>;
    });

    return (
        <Body>
            <BodyTime>{getTime}</BodyTime>
            <BodyEvent></BodyEvent>
        </Body>
    );
};
export default CalendarBody;
