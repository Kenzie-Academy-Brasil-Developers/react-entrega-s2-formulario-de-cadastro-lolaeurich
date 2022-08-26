//import { useContext } from "react"
import { useNavigate } from "react-router-dom"
//import { TechsContext } from "../contexts/TechsContext"
//import { UserContext } from "../contexts/UserContext"
import { HomeHub } from "./Styles/Home"


import Techs from "./Techs"


interface OpenModalProps {
  handleOpenModal: () => void
}

//página com o usuário logado

function Dashboard({handleOpenModal}: OpenModalProps) {

  //const { user } = useContext(UserContext)


  //o useNavigate serve para navegar entre páginas, para frente ou para trás. Aqui, uso ele para voltar
  //ao login quando clico em "sair"
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
      <Techs handleOpenModal={handleOpenModal}/>
    </HomeHub>
  )
}

export default Dashboard