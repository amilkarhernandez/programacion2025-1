import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Screem } from "./pages/Screem";
import { Hooks } from "./pages/Hooks";
import { Login } from "./pages/Login";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Screem />} />
      <Route path="/login" element={<Login />} />
      <Route path="/hooks" element={<Hooks />} />
    </Routes>
  );
}

export default App;
