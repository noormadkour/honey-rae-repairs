import { getStaffUsers } from "../../services/userService";
import "./Employees.css";
import { useEffect, useState } from "react";
import { User } from "../User/User";

export const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    getStaffUsers().then((staffArray) => setEmployees(staffArray));
  }, []);

  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Employees</h2>
      <div className="employees">
        {employees.map((employeeObj) => {
          return <User user={employeeObj} key={employeeObj.id} />;
        })}
      </div>
    </div>
  );
};
