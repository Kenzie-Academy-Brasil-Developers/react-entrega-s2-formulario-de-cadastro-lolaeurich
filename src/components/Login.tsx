
import { useForm } from "react-hook-form"

import {useContext} from "react"

import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
//import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

//usado para colocar o navigate dentro do useEffect
//import { useRef } from "react"

import { MyLogin } from "./Styles/Login"
import { UserContext } from "../contexts/UserContext"

export interface ILoginForm {
  email: string
  password: string
}

function Login() {
  const navigate = useNavigate()

  function goRegister() {
    console.log('oi');
    
    navigate("/register");
  }



  const { addUser } = useContext(UserContext)

  //usando o YUP para definir meu formulário e os campos obrigatórios. 
  const validation = yup.object().shape({
    email: yup.string().required("Campo obrigatório"),
    password: yup.string().required("Campo obrigatório"),})

  //const que gera alerta de errors quando o form não cumpre os requisitos. puxa a função Validation.
  const {register, handleSubmit, formState: { errors },} = useForm<ILoginForm>({resolver: yupResolver(validation),})
  
  
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
            {...register("email")}
            name="email"
          />
          <p className="Error2">{(errors.email as any)?.message}</p>
        </label>
        <label className="Password">
          Senha
          <input
            type="password"
            className="Input2"
            placeholder="Senha"            
            {...register("password")}
            name="password"
          />
          <p className="Error">{(errors.password as any)?.message}</p>
        </label>
        <button type="submit" className="LoginBtn">
          Entrar
        </button>
        <h4 className="Quote">Ainda não possui uma conta conosco?</h4>
        
        <button
          type="button"
          className="RegisterBtn"
          onClick={goRegister}>Cadastre-se agora!
        </button>
      </form>
    </MyLogin>
  )
}

export default Login