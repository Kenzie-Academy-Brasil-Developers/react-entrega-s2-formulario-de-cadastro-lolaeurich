import axios from "axios";
import { createContext, useContext } from "react";
import { UserContext } from "./UserContext";

export const TechsContext = createContext({
    addTech: () => null,
    deleteTech: () => null
})

export const TechsContextProvider = ({children}) => {

    const {user} = useContext(UserContext)
    const token = localStorage.getItem('userToken')

    async function addTech(data) {
        try {
            const res = await axios.post('https://kenziehub.herokuapp.com/users/techs', data, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
        }
        catch (error) {
            //notificacao de erro
        }
    }

    async function deleteTech(techId) {
        try {
            const res = await axios.delete(`https://kenziehub.herokuapp.com/users/techs/${techId}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
        }
        catch(error) {
            //mesma coisa
        }
    }

    const value = {addTech, deleteTech}

    return (
        <TechsContext.Provider value={value}>
            {children}
        </TechsContext.Provider>   
    )


}