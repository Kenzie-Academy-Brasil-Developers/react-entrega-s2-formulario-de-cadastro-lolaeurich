import { Routes, Route} from "react-router-dom"
import Home from "./components/Home"
import Login from "./components/Login"
import Register from "./components/Register"

interface OpenModalProps {
  handleOpenModal: () => void
}

export default function Router({handleOpenModal}: OpenModalProps) {
  return (
    <Routes>
      <Route path="/" element={<Login />}/>
      <Route path="/register" element={<Register />}/>
      <Route path="/dashboard" element={<Home handleOpenModal={handleOpenModal}/>}></Route>
    </Routes>
  )
}

