
import "./App.css";
import { CustomerList } from "./Components/Customer/CustomersList";
import { EmployeeList } from "./Components/Employees/EmployeesList";
import { TicketList } from "./Components/Tickets/TicketList";

export const App = () => {
  return <>
    <TicketList />
    <CustomerList />
    <EmployeeList />
  </>
};
