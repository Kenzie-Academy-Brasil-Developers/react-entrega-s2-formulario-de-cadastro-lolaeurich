import { useNavigate } from "react-router-dom"
import { HomeHub } from "./Styles/Home"

function Dashboard() {
  const navigate = useNavigate()
  return (
    <HomeHub>
      <div className="Header">
        <h1 className="Logo">Kenzie Hub</h1>
        <button
          className="BtnSair"
          onClick={() => {window.localStorage.clear()
            navigate("/")}}>Sair</button>
      </div>
      <div className="Dash">
        <h1 className="H1">Olá, {window.localStorage.getItem("userName")}!</h1>
        <p className="P">Primeiro módulo (Introdução ao Frontend)</p>
      </div>
      <h2 className="H2">Que pena! Ainda estamos em desenvolvimento! :|</h2>
      <p className="Quote">
        Nossa aplicação está em desenvolvimento. Mas, muita calma! Em breve teremos novidades!
      </p>
    </HomeHub>
  )
}

export default Dashboard