import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Login } from "./pages/Login";
import { Hooks } from "./pages/Hooks";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/hooks" element={<Hooks />} />
    </Routes>
  );
}

export default App;
