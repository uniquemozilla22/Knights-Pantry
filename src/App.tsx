import "./App.css";
import StepProviders from "./context/StepContext";
import Step from "./pages/Step";

function App() {
  return (
    <StepProviders>
      <Step />
    </StepProviders>
  );
}

export default App;
