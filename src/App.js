// Importing CSS
import './App.css';

// Importing Hooks
import { useState } from "react";

// Importing components
import ComponentToDisplay from './components/ComponentToDisplay';

// importing context provider
import { AppState } from "./context/AppState";
function App() {

  return (
    <AppState>
      <main className="app">
        <ComponentToDisplay />
      </main>
    </AppState>
  );
}

export default App;
