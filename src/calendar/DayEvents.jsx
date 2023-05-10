import { useState } from "react";
import * as dateFns from "date-fns";
import { Body, BodyEvent, BodyTime, Event, Time } from "../constats";


const DayEvents = (props) => {

    const [selectedCell, setSelectedCell] = useState(null);
    const {monday, events, setEvent} = props;
   //заполняем массив со значениями часов для левой колонки
   const timeArray = [...Array(24).keys()].map(e => e < 10 ? '0' + e + ':00' : e + ':00')
   timeArray.push('');
 
 
   //массив для сетки событий
   const cellArray = []
   for (let i = 0; i < timeArray.length-1; i++) {
     for (let j = 0; j < 7; j++) {
    //    cellArray.push(addHours(addDays(monday, j), i))
       cellArray.push(dateFns.addHours(dateFns.addDays(monday, j), i))
     }
   }
   const checkInterval = (e, timeStart, timeEnd) => e >= timeStart && e < timeEnd;

   return (
    <Body>
      <BodyTime>
        {timeArray.map((val, i) => <Time key={i}>{val}</Time>)}
      </BodyTime>
      <BodyEvent {...props}>
      {
          //заполняем сетку событий
          cellArray.map((t, i) => 
            <Event {...props}
              time={t}
              event={events.find(e => checkInterval(e, t, dateFns.addHours(t, 1)))}
              key={i} 
              onClick={ () => {
                setSelectedCell(i)
                setEvent(events.findIndex(e => checkInterval(e, t, dateFns.addHours(t, 1))))
              }}
              selected={selectedCell === i}
            />
          )
        }
      </BodyEvent>
    </Body>
  );
};
export default DayEvents;