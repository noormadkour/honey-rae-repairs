import { useEffect, useState } from "react";
import { getAllTickets } from "../../services/ticketServices";
import "./Tickets.css"
import { Ticket } from "./Ticket";

export const TicketList = () => {
    const [allTickets, setAllTickets] = useState([]);
    const [showEmergencyOnly, setShowEmergencyOnly] = useState(false);
    const [filteredTickets, setFilteredTickets] = useState([]);
  
    useEffect(() => {
      getAllTickets().then((ticketsArray) => {
        setAllTickets(ticketsArray);
        console.log("tickets set!");
      });
    }, []); //runs on initial render only while the array is empty
  
    useEffect(() => {
      if (showEmergencyOnly) {
        const emergencyTickets = allTickets.filter(
          (ticket) => ticket.emergency === true
        );
        setFilteredTickets(emergencyTickets);
      } else {
        setFilteredTickets(allTickets)
      }
    }, [showEmergencyOnly, allTickets]);
  
    return (
      <div className="tickets-container">
        <h2>Tickets</h2>
        <div>
          <button
            className="filter-btn btn-primary"
            onClick={() => {
              setShowEmergencyOnly(true);
            }}
          >
            Emergency
          </button>
          <button
            className="show-all-btn btn-primary"
            onClick={() => {
              setShowEmergencyOnly(false);
            }}
          >
            Show all
          </button>
        </div>
        <article className="tickets">
          {filteredTickets.map((ticketObj) => {
            return <Ticket ticket={ticketObj} key={ticketObj.id}/>
          })}
        </article>
      </div>
    );
}