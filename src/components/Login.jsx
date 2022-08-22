
import { useForm } from "react-hook-form"

import {useContext} from "react"

import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

//usado para colocar o navigate dentro do useEffect
import { useRef } from "react"

import { MyLogin } from "./Styles/Login"
import { UserContext } from "../contexts/UserContext"



function Login() {

  //novo navigate para clicar no botão de REGISTRAR e voltar para o LOGIN. 
  //tive que referenciar para poder utilizar dentro do useEffect
  //useRef retorna apenas um item. Nesse caso, meu useNavigate, que é o valor inicial dele.
  const navigation = useRef(useNavigate())

  
  useEffect(() => {
    const token = localStorage.getItem("authToken")
    
    //se foi autentificado, vamos para a dashboard
    if (token) {
      //meu useRef retorna um object, que é o current
      navigation.current.navigate("/dashboard")
    }
  }, [])

  const { addUser } = useContext(UserContext)

  //usando o YUP para definir meu formulário e os campos obrigatórios. 
  const validation = yup.object().shape({
    email: yup.string().required("Campo obrigatório"),
    password: yup.string().required("Campo obrigatório"),})

  //const que gera alerta de errors quando o form não cumpre os requisitos. puxa a função Validation.
  const {register, handleSubmit, formState: { errors },} = useForm({resolver: yupResolver(validation),})
  


//cheguei a trocar o addUser pelo "signIn" que está lá embaixo. Mas deu tudo errado e retornei.
//pega meus dados, dá os alertas necessários e depois, em caso de erro, me mostra os erros e os alertas.
  /*const addUser = (data) => {
    axios
      .post("https://kenziehub.herokuapp.com/sessions", data)
      .then((response) => {
        window.localStorage.clear();
        window.localStorage.setItem("authToken", response.data.token)
        window.localStorage.setItem("userName", response.data.user.name)
        Swal.fire("Você entrou com sucesso!",
        "Redirecionando usuário...",
        "Successo!")
        navigate("/dashboard")
        console.log(response)})

      .catch((err) => {
        console.log(err)
        Swal.fire({
          icon: "error",
          title: "Eita!",
          text: "Você não possui cadastro! =(",
        })
      })
    console.log(data)}

  usando o YUP para definir meu formulário e os campos obrigatórios.  
  const validation = yup.object().shape({
    email: yup.string().required("Este campo é obrigatório!"),
    password: yup.string().required("Este campo é obrigatório!")})


  //novo navigate para clicar no botão de REGISTRAR e voltar para o LOGIN.  
  const navigate = useNavigate()

  //const que gera alerta de errors quando o form não cumpre os requisitos. puxa a função Validation.
  const {register, handleSubmit, formState: { errors }} = useForm({resolver: yupResolver(validation)})


  //tentando usar o useContext.
  const {signIn} = useContext(AuthContext)*/
  
  
  return (
    <MyLogin>
      <h1 className="Logo">Kenzie Hub</h1>
      <form className="Form" onSubmit={handleSubmit(addUser)}>
        <h2 className="Tittle">Login</h2>
        <label className="Email">
          E-mail
          <input
            type="email"
            className="Input1"
            placeholder="E-mail"
            name="email"
            {...register("email")}
          />
          <p className="Error2">{errors.email?.message}</p>
        </label>
        <label className="Password">
          Senha
          <input
            type="password"
            className="Input2"
            placeholder="Senha"
            name="password"
            {...register("password")}
          />
          <p className="Error">{errors.password?.message}</p>
        </label>
        <button type="submit" className="LoginBtn">
          Entrar
        </button>
        <h4 className="Quote">Ainda não possui uma conta conosco?</h4>
        <button
          type="button"
          className="RegisterBtn"
          onClick={() => navigation("/register")}
        >
          Cadastre-se agora!
        </button>
      </form>
    </MyLogin>
  )
}

export default Login