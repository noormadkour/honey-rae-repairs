import { getStaffUsers } from "../../services/userService";
import "./Employees.css";
import { useEffect, useState } from "react";
import { User } from "../User/User";
import { Link } from "react-router-dom";

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
          return (
            <Link to={`/employees/${employeeObj.id}`}>
              <User user={employeeObj} key={employeeObj.id} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};
