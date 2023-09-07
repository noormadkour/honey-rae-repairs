import "./App.css";
import { CustomerList } from "./Components/Customer/CustomersList";
import { EmployeeList } from "./Components/Employees/EmployeesList";
import { NavBar } from "./Components/Nav/NavBar";
import { TicketList } from "./Components/Tickets/TicketList";
import { Routes, Route, Outlet } from "react-router-dom";

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
        <Route path="tickets" element={<TicketList />} />
        <Route path="employees" element={<EmployeeList />} />
        <Route path="customers" element={<CustomerList />} />
      </Route>
    </Routes>
  );
};
