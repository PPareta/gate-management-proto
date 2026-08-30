import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Singup from "./pages/Singup";
import Login from "./pages/login";
import Dashboard from "./pages/Dashboard";

function PageNotFound() {
  return <p> 404 - Page not found. </p>;
}

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/singup" element={<Singup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={PageNotFound} />
      </Routes>
    </>
  );
}

export default App;
