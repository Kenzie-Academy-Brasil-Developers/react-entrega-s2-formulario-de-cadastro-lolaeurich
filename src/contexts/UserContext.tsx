//Usando o context para armazenar minhas informações usadas no Login e no register
import { createContext, ReactNode, useEffect, useState } from "react"
import axios from "axios"

//usado para dar alertas como o toastify
import Swal from "sweetalert2"
import { useNavigate } from "react-router-dom"


interface IUserProviderProps {
  children: ReactNode
}

interface IUserContext {
  addUser: any
  userRegister: (data: any) => Promise<void>
  user: any
} 

export const UserContext = createContext({} as IUserContext)

const UserProvider = ({ children }: IUserProviderProps) => {

  const navigate = useNavigate()
  


  //utilizando o useEffect para montagem e validação do login
  useEffect(() => {
    const token = localStorage.getItem('userToken')
    if(token){
      navigate('/dashboard')
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

  }, [navigate])

  const [user, setUser] = useState({})


  //pega meus dados, dá os alertas necessários e depois, em caso de erro, me mostra os erros e os alertas.
  const userRegister = async (data: any) => {
    axios
      .post("https://kenziehub.herokuapp.com/users", data)
      .then((response) => {
        Swal.fire({
          icon: "success",
          title: "Cadastro feito com sucesso!",
          text: "Estamos quase lá!",
      })

        //mostra para onde a página redireciona
        navigate("/")
      })

      //não redireciona, a menos que a pessoa coloque um e-mail válido
      .catch(
       // Swal.fire({
          //icon: "error",
          //title: "Xiii!",
          //text: "Esse e-mail já foi utilizado antes!",
        //})
      )
  }

  //Usando meu usuário para logar
  const addUser = (data: any) => {
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

        //era: window.localStorage.clear("userId", "userToken")
        window.localStorage.clear()
        //alertas de erro no login
        Swal.fire({
            icon: "error",
            title: "Eita!",
            text: "Você não possui cadastro! =(",
        })
      })
      console.log(data)


  }

  return (
    <UserContext.Provider value={{ addUser, userRegister, user }}>
      {children}
    </UserContext.Provider>
  )
}
export default UserProvider