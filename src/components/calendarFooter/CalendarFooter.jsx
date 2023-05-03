import styled from "styled-components";

const Footer = styled.div`
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

const FooterToday = styled.div`
    color: red;
    cursor: pointer;
    padding-left: 50px;
    padding-top: 25px;
`;
const FooterDelete = styled.div`
    color: red;
    cursor: pointer;
    margin-left: auto;
    padding-right: 50px;
    padding-top: 25px;
`;
const CalendarFooter = () => {
    return (
        <Footer>
            <FooterToday>Today</FooterToday>
            <FooterDelete>Delete</FooterDelete>
        </Footer>
    );
};
export default CalendarFooter;
