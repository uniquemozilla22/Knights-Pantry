import React, { Suspense } from "react";
import "./App.css";
import StepProviders from "./context/StepContext";
import { Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout.tsx";
import ErrorPage from "./pages/ErrorPage/index.tsx";
import toast from "react-hot-toast";
import Login from "./pages/Admin/Login.tsx";
import Dashboard from "./pages/Admin/Dashboard.tsx";

const Home = React.lazy(() => import("./pages/Home/index.tsx"));
const Step = React.lazy(() => import("./pages/Step/Step.tsx"));

function Loading() {
  return <h1>Loading...</h1>;
}

function App() {
  return (
    <StepProviders>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/step/:id"} element={<Step />} />
          <Route path={"/admin/login"} element={<Login />} />
          <Route path={"/admin"} element={<Dashboard />}></Route>
          <Route path={"*"} element={<ErrorPage />} />
        </Routes>
      </Suspense>
    </StepProviders>
  );
}

export default App;
