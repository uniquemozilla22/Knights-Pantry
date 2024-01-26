import React, { Suspense, useContext } from "react";
import "./App.css";
import StepProviders, {
  IStepContext,
  StepContext,
} from "./context/StepContext";
import { Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout.tsx";

const Home = React.lazy(() => import("./pages/Home/index.tsx"));

function Loading() {
  return <h1>Loading...</h1>;
}

function App() {
  return (
    <StepProviders>
      <Layout>
        <Routes>
          <Route
            path={"/"}
            element={
              <Suspense fallback={<Loading />}>
                <Home />
              </Suspense>
            }
          />
        </Routes>
      </Layout>
    </StepProviders>
  );
}

export default App;
