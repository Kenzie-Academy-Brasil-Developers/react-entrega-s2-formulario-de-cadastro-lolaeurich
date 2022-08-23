import "./App.css"
import { Style } from "./components/Styles/ModalStyle"

import { BrowserRouter } from "react-router-dom"
import UserProvider from "./contexts/UserContext"
import { TechsContext } from "./contexts/TechsContext"

import Router from "./Routers"

import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"

import { useContext, useState } from "react"
import { useForm } from "react-hook-form"

import Modal from "react-modal"

Modal.setAppElement('#root')
//coloquei o AuthProvider antes do BrowserRoute pq é de escopo global, mas tmbm não entendi direito.
function App() {

  const {addTech} = useContext(TechsContext)
  const validation = yup.object().shape({title: yup.string().required("Este campo é obrigatório!")})
  const [modalOn, setModalOn] = useState(false)
  const {handleSubmit, register, formState: {errors},} = useForm({resolver: yupResolver(validation)})


  function handleOpenModal(){
    setModalOn(true)
  }
  function handleCloseModal(){
    setModalOn(false)
  }


  return (
    
        <div className="App">
          <UserProvider>   
            <Router handleOpenModal={handleOpenModal}/>
            <Modal isOpen= {modalOn} onRequestClose= {handleCloseModal} style= {Style}>
              <div className="Modal">
                <h2 className="Tittle">Cadastre uma nova tecnologia</h2>
                <button className="CloseBtn" onClick={handleCloseModal}>Close</button>
              </div>

              <form className="Form" onSubmit={handleSubmit(addTech)}>
                <label className="AddTech">Nome<input 
                className="Input" name="title" type="text" placeholder="Qual tecnologia você gostaria de adicionar?" 
                {...register("title")}/>

                <p className="Message">{errors.title?.message}</p>

                </label>

                <label className="AddTechTittle">Selecionar status</label>
                <select
                className="AddTech2"
                name="status"
                {...register("status")}>

                  <option value="Iniciante">Iniciante</option>
                  <option value="Intermediário">Intermediário</option>
                  <option value="Avançado">Avançado</option>
                </select>  

                <button className="Submit">Cadastrar nova tecnologia</button>
              </form>
              </Modal>
              </UserProvider>
              </div>
              
  )
}
export default App


    
        