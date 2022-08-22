import axios from "axios"

import { createContext, useContext } from "react"
import { UserContext } from "./UserContext"
import { useState } from "react"
import { useEffect } from "react"

import Swal from "sweetalert2"

//tive que fazer a exportação assim, já que dizia que não eram suportadas multiplas exportações. 
//LEMBRETE: procurar o motivo deste erro depois!!!
export const TechsContext = createContext({
    addTech: () => null,
    deleteTech: () => null
})

export const TechsContextProvider = ({children}) => {

    const {user} = useContext(UserContext)
    const [techs, setTechs] = useState([])
    const token = localStorage.getItem('userToken')
    const res = {
        headers: {
          Authorization: `Bearer ${token}`,
        }
      }
    
      //não entendi como resolver a questão do array com as techs. VER DEPOIS!!!
      useEffect(() => {
        axios
          .get("https://kenziehub.herokuapp.com/profile", res)
          .then((response) => setTechs(response.data.techs))
          .catch((err) => console.log(err))
      }, [techs])


    function addTech(data) {
           axios
           .post('https://kenziehub.herokuapp.com/users/techs', data, {
                headers: {
                    Authorization: `Bearer ${token}`
                },
           })    
            .then((response) => {
                Swal.showLoading();
                setTimeout(() => {
                  Swal.fire({
                    icon: "success", 
                    tittle: "Tecnologia adicionada com sucesso!!", 
                    text: "Boa!!"})

            axios
                .get("https://kenziehub.herokuapp.com/profile", res)
                .then((response) => setTechs(response.data.techs))
                .catch((err) => console.log(err))
                }, "3000")
              })    
               .catch ((err) => {
                Swal.fire({
                    icon: "error",
                    title: "Eita!",
                    text: "Essa tecnologia já foi add por você antes.",
                  })
                })
    }

    function deleteTech(id) {
        axios
          .delete(`https://kenziehub.herokuapp.com/users/techs/${id}`, res)
          .then(
            Swal.fire({
                incon: "success",
                tittle: "Tecnologia excluida com sucesso",
                text: "A tecnologia selecionada foi exluida",
            })
          )
          
          axios
          .get("https://kenziehub.herokuapp.com/profile", res)
          .then((response) => setTechs(response.data.techs))
          .catch((err) => console.log(err));
      }



    return (
        <TechsContext.Provider value={{techs, addTech, deleteTech}}>
            {children}
        </TechsContext.Provider>   
    )
}
