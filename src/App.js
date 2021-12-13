import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import Register from "./pages/register";
import Success from "./pages/success";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Register />}></Route>
        <Route exact path="/success" element={<Success />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
