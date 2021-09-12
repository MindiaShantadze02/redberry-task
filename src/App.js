// Importing CSS
import './App.css';

// Importing Hooks
import { useState } from "react";

// Importing components
import Start from "./components/Start";
import Form from "./components/Form";

// importing context provider
import { AppState } from "./context/AppState";

function App() {

  // For changing from state to form component
  const [displayForm, setDisplayForm] = useState(false);
  
  return (
    <AppState>
      <main className="app">
        {displayForm ? <Form /> : <Start setDisplayForm={setDisplayForm} />}
      </main>
    </AppState>
   
  );
}

export default App;
