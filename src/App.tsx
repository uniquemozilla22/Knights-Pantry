import React, { Suspense } from "react";
import StepProviders from "./context/StepContext";
import { Route, Routes } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage/index.tsx";
import { AuthContextProvider } from "./context/AuthContext.tsx";
import { Layout } from "./components/Layout.tsx";
import useAuth from "./hooks/useAuth.ts";

const Home = React.lazy(() => import("./pages/Home/index.tsx"));
const Step = React.lazy(() => import("./pages/Step/Step.tsx"));
const Login = React.lazy(() => import("./pages/Admin/Login.tsx"));
const Dashboard = React.lazy(() => import("./pages/Admin/Dashboard.tsx"));

function Loading() {
  return <h1>Loading...</h1>;
}

function App() {
  return (
    <Layout>
      <AuthContextProvider>
        <StepProviders>
          <Suspense fallback={<Loading />}>
            <Routes>
              <Route path={"/"} element={<Home />} />
              <Route path={"/step/:id"} element={<Step />} />
              <Route path={"/login"} element={<Login />} />
              <Route path={"/admin"} element={<Dashboard />}></Route>
              <Route path={"*"} element={<ErrorPage />} />
            </Routes>
          </Suspense>
        </StepProviders>
      </AuthContextProvider>
    </Layout>
  );
}

export default App;
