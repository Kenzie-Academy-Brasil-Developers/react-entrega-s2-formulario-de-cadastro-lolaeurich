import { Routes, Route } from "react-router-dom";
import Home from "./components/Home"
import Login from "./components/Login"
import Register from "./components/Register"

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Login />}></Route>
      <Route path="/register" element={<Register />}></Route>
      <Route path="/dashboard" element={<Home />}></Route>
    </Routes>
  );
}