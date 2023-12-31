import { Routes, Route, Outlet } from "react-router-dom";
import { Welcome } from "../components/Welcome/Welcome";
import { TicketList } from "../components/Tickets/TicketList";
import { EmployeeList } from "../components/Employees/EmployeesList";
import { CustomerList } from "../components/Customer/CustomersList";
import { CustomerDetails } from "../components/Customer/CustomerDetails";
import { NavBar } from "../components/Nav/NavBar";
import { EmployeeDetails } from "../components/Employees/EmployeeDetails";
import { useEffect, useState } from "react";

export const ApplicationViews = () => {
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    const localHoneyUser = localStorage.getItem("honey_user");
    const honeyUserObject = JSON.parse(localHoneyUser);

    setCurrentUser(honeyUserObject);
  }, []);

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
        <Route
          path="tickets"
          element={<TicketList currentUser={currentUser} />}
        />
        <Route path="employees">
          <Route index element={<EmployeeList />} />
          <Route path=":employeeId" element={<EmployeeDetails />} />
        </Route>
        <Route path="customers">
          <Route index element={<CustomerList />} />
          <Route path=":customerId" element={<CustomerDetails />} />
        </Route>
      </Route>
    </Routes>
  );
};
