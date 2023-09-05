import { useEffect, useState } from "react";
import { getNonStaffUsers } from "../../services/userService";
import "./Customers.css";
import { User } from "../User/User";

export const CustomerList = () => {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    getNonStaffUsers().then((customerArray) => setCustomers(customerArray));
  }, []);

  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Customers</h2>
      <div className="customers">
        {customers.map((customerObj) => {
          return <User user={customerObj} key={customerObj.id} />;
        })}
      </div>
    </div>
  );
};
