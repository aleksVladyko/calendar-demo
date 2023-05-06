import styled from "styled-components";
import arrow from "./img/arrow.svg";
import plus from "./img/plus.svg"

export const CalendarWraper = styled.div`
    text-align: center;
    max-width: 740px;
    background-color: #fff;
    margin: auto;
    position: relative;
    // box-shadow: inset 0 0 15px gray;
`;
export const HeaderWrapper = styled.header`
position: fixed;
  height: 80px;
  max-width: 740px;
  width: 100%;
  z-index: 100;
  background-color: #fff;
`;

export const HeaderText = styled.div`
  text-align: left;
  font-size: 24px;
  padding: 25px 0 0 50px;
  float: left;
  @media (max-width: 600px) {
    font-size: 20px;
  }
`;

export const HeaderAddWrapper = styled.div`
  text-align: right;
  font-size: 24px;
  padding: 25px 50px 0 0;
  float: right;
`;
export const HeaderAdd = styled.div`
  width: 24px;
  height: 24px;
  background-image: url(${plus});
  background-size: contain;
  cursor: pointer;
`;

export const Footer = styled.div`
    position: fixed;
    display: flex;
    bottom: 10px;
    width: 100%;
    max-width: 740px;
    height: 80px;
    font-size: 2rem;
    z-index: 100;
    background-color: #eee;
    @media (max-width: 600px) {
        margin: auto;
        font-size: 1.5rem;
    }
`;

export const FooterToday = styled.div`
    color: red;
    cursor: pointer;
    padding-left: 50px;
    padding-top: 25px;
`;
export const FooterDelete = styled.div`
    color: red;
    cursor: pointer;
    margin-left: auto;
    padding-right: 50px;
    padding-top: 25px;
`;
export const HeadContainer = styled.div`
    background-color: #eee;
    position: sticky;
    width: 100%;
    top: 80px;
    max-width: 740px;
    z-index: 10;
`;
export const WeekContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    grid-template-row: repeat(2, 1fr);
    min-height: 60px;
    margin-left: 60px;
    font-size: 20px;
    font-weight: bold;
`;
export const WeekOfDays = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40px;
`;
export const WeekDayValue = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40px;
    width: 50px;
    margin: auto;
    font-size: 26px;
    cursor: pointer;
    ${({ active }) =>
        active &&
        `
    border-radius:25px;
    background-color:red;
    color: #fff;
  `}
`;
export const Month = styled.div`
    display: flex;
    align-items: center;
`;
export const Year = styled.div`
    display: flex;
    align-items: center;
`;

export const NavCurrentMonth = styled.div`
    display: flex;
    font-size: 24px;
    font-weight: bold;
    text-align: center;
    gap: 10px;
    @media (max-width: 600px) {
        font-size: 18px;
    }
`;

export const NextWeek = styled.div`
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
export const PrevWeek = styled(NextWeek)`
    transform: rotate(180deg);
`;

export const Body = styled.div`
    margin-top: 80px;
    margin-bottom: 80px;
    display: grid;
    grid-template-columns: 60px 1fr;
`;

export const BodyTime = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-auto-rows: 45px;
`;
export const Time = styled.div`
    margin-top: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`;

export const BodyEvent = styled.div`
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
    
    ${({ active }) =>
        active &&
        `
    
    background-color: blue;
    color: #fff;
  `}
`;
