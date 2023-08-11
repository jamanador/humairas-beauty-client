import React, { useContext } from "react";
import { authContext } from "../../Context/AuthProvider";

const Dashboard = () => {
  const {user} = useContext(authContext)
  return (
    <div>
        <h3>Welcome Back 👏 <span className="font-bold">{user?.displayName}</span></h3>
    </div>
  );
};

export default Dashboard;
