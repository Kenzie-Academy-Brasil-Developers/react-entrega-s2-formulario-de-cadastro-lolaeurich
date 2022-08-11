import { useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form"

import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

//axios serve para a API
import axios from "axios"

//Swal serve para os alertas
import Swal from "sweetalert2"

import { MyLogin } from "./Styles/Login"


function Login() {
  const addUser = (data) => {
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

  const validation = yup.object().shape({
    email: yup.string().required("Este campo é obrigatório!"),
    password: yup.string().required("Este campo é obrigatório!")})

  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validation)})

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
          onClick={() => navigate("/register")}
        >
          Cadastre-se agora!
        </button>
      </form>
    </MyLogin>
  )
}

export default Login