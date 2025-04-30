import { Route, Routes } from "react-router-dom";
import "./App.css";
import { DashboardPage } from "./pages/DashboardPage";
import { UsersPage } from "./pages/UsersPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<DashboardPage />} />
      <Route path="/users" element={<UsersPage />} />
    </Routes>
  );
}

export default App;
