// Importing CSS
import './app.css';
// Importing Hooks
import { useState } from "react";
// Importing components
import Start from "./components/Start";
import Form from "./components/Form";
function App() {

  // For changing from state to form component
  const [displayForm, setDisplayForm] = useState(false);
  return (
    <div className="App">
      {displayForm ? <Form /> : <Start setDisplayForm={setDisplayForm} />}
    </div>
  );
}

export default App;
