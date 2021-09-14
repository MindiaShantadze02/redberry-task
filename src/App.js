// Importing CSS
import './App.css';

// Importing Hooks
import { useState } from "react";

// Importing components
import Start from "./components/Start";

// importing context provider
import { AppState } from "./context/AppState";
// Importing components
import Wrapper from './components/Wrapper';
function App() {

  // For changing from state to form component
  const [displayWrapper, setDisplayWrapper] = useState(false);
  
  return (
    <AppState>
      <main className="app">
        {displayWrapper ? <Wrapper /> : <Start setDisplayWrapper={setDisplayWrapper} />}
      </main>
    </AppState>
  );
}

export default App;
