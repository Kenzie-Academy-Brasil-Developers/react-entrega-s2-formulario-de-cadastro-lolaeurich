//Usando o context para armazenar minhas informações usadas no Login e no register
import { createContext, useEffect, useState } from "react"
import axios from "axios"

//usado para dar alertas como o toastify
import Swal from "sweetalert2"
import { useNavigate } from "react-router-dom"

export const UserContext = createContext({})

const UserProvider = ({ children }) => {

  const navigate = useNavigate()
  


  //utilizando o useEffect para montagem e validação do login
  useEffect(() => {
    const token = localStorage.getItem('userToken')
    if(!token){
      navigate('/')
      return
    }

    async function validateLogin (){    
          const res = await axios.get('https://kenziehub.herokuapp.com/profile', {
            headers: {
              Authorization: `Bearer ${token}`
              }
            })
  
        console.log('effect do context', res.data);
        setUser(res.data)
    }

    if(token){
      validateLogin()
    }

  }, [])

  const [user, setUser] = useState({})

  

  //pega meus dados, dá os alertas necessários e depois, em caso de erro, me mostra os erros e os alertas.
  const userRegister = (data) => {
    axios
      .post("https://kenziehub.herokuapp.com/users", data)
      .then((response) => {
        Swal.fire({
          icon: "success",
          tittle: "Cadastro feito com sucesso!",
          text: "Estamos quase lá!",
      })

        //mostra para onde a página redireciona
        navigate("/")
      })

      //não redireciona, a menos que a pessoa coloque um e-mail válido
      .catch(
        Swal.fire({
          icon: "error",
          title: "Xiii!",
          text: "Esse e-mail já foi utilizado antes!",
        })
      )
  }

  //Usando meu usuário para logar
  const addUser = (data) => {
    axios
      .post("https://kenziehub.herokuapp.com/sessions", data)
      .then((response) => {
        setUser(response)
        window.localStorage.clear()
        window.localStorage.setItem("userToken", response.data.token)
        window.localStorage.setItem("userName", response.data.user.name)

        //alertas dados no login
        Swal.fire({
         icon: "success",
         title: "Redirecionando usuário...",
         text: "Successo!"})

        //quando loga vai direto pro dashboard
        navigate("/dashboard")
      })

      .catch((err) => {
        window.localStorage.clear("userId", "userToken")
        //alertas de erro no login
        Swal.fire({
            icon: "error",
            title: "Eita!",
            text: "Você não possui cadastro! =(",
        })
      })
      console.log(data)


      /*const validToken = (token) => {
      axios.get("https://kenziehub.herokuapp.com/profile", {
        headers: {
          Authorization: `Bearer ${token}` 
        }
      })

      /*const validToken = (data) => {
        axios
        .get("https://kenziehub.herokuapp.com/profile", data)
        .then((response) => {
          setUser(response)
            window.localStorage.clear()
            window.localStorage.setItem("userToken", response.data.token)
            window.localStorage.setItem("userName", response.data.user.name)
        .catch((err) => {
          console.log("ops! ocorreu um erro" + err)
        })  
        }, [])*/

  }

  return (
    <UserContext.Provider value={{ addUser, userRegister, user }}>
      {children}
    </UserContext.Provider>
  )
}
export default UserProvider