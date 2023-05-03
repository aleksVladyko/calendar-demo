import styled from "styled-components"
import plus from "../../img/plus.svg"


const HeaderWrapper = styled.header`
position: fixed;
  height: 80px;
  max-width: 740px;
  width: 100%;
  z-index: 100;
  background-color: #fff;
`;

const HeaderText = styled.div`
  text-align: left;
  font-size: 24px;
  padding: 25px 0 0 50px;
  float: left;
  @media (max-width: 600px) {
    font-size: 20px;
  }
`;

const HeaderAddWrapper = styled.div`
  text-align: right;
  font-size: 24px;
  padding: 25px 50px 0 0;
  float: right;
`;
const HeaderAdd = styled.div`
  width: 24px;
  height: 24px;
  background-image: url(${plus});
  background-size: contain;
  cursor: pointer;
`;
function createEvent(){

}

const CalendareTitle = () => {
  
   return (
    <HeaderWrapper>
        <HeaderText>Interview Calendar</HeaderText>
        <HeaderAddWrapper>
          <HeaderAdd onClick={() => createEvent()} />
        </HeaderAddWrapper>
      </HeaderWrapper>
    
    
  );
};
export default CalendareTitle;