import "./App.css";
import { CustomerList } from "./Components/Customer/CustomersList";
import { EmployeeList } from "./Components/Employees/EmployeesList";
import { NavBar } from "./Components/Nav/NavBar";
import { TicketList } from "./Components/Tickets/TicketList";
import { Routes, Route, Outlet } from "react-router-dom";
import { Welcome } from "./Components/Welcome/Welcome";
import { CustomerDetails } from "./Components/Customer/CustomerDetails";

export const App = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <NavBar />
            <Outlet />
          </>
        }
      >
        <Route index element={<Welcome />} />
        <Route path="tickets" element={<TicketList />} />
        <Route path="employees" element={<EmployeeList />} />
        <Route path="customers">
          <Route index element={<CustomerList />} />
          <Route path=":customerId" element={<CustomerDetails />} />
        </Route>
      </Route>
    </Routes>
  );
};
