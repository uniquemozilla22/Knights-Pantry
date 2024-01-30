import React, { Suspense } from "react";
import "./App.css";
import StepProviders from "./context/StepContext";
import { Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout.tsx";

const Home = React.lazy(() => import("./pages/Home/index.tsx"));
const Step = React.lazy(() => import("./pages/Step/Step.tsx"));

function Loading() {
  return <h1>Loading...</h1>;
}

function App() {
  return (
    <StepProviders>
      <Layout>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path={"/"} element={<Home />} />
            <Route path={"/step/:id"} element={<Step />} />
          </Routes>
        </Suspense>
      </Layout>
    </StepProviders>
  );
}

export default App;
