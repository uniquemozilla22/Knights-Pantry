import { Route, Routes } from "react-router-dom";
import { Admin } from "./Admin";

const Dashboard = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Admin />} />
      </Routes>
    </>
  );
};

export default Dashboard;
