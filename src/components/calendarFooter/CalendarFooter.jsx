import styled from "styled-components";

const CalendarFooter = () => {
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
    const FootetDelete = styled.div`
        color: red;
        cursor: pointer;
      
        margin-left: auto;
        padding-right: 50px;
        padding-top: 25px;
    `;
    return (
        <Footer>
            <FooterToday>Today</FooterToday>
            <FootetDelete>Delete</FootetDelete>
        </Footer>
    );
};
export default CalendarFooter;
