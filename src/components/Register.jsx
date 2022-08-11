import { useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form"

import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

//Axios para a API
import axios from "axios"

//Swal para os alerts
import Swal from "sweetalert2"

import { MyRegister } from "./Styles/Register"


function Register() {
  const navigate = useNavigate()

  const userRegister = (data) => {
    axios
      .post("https://kenziehub.herokuapp.com/users", data)
      .then((response) => {

      //configurando os alertas da página  
      Swal.fire(
          "Cadastro feito com sucesso!",
          "Estamos quase lá!",
          "Sucesso!"
        )
        navigate("/")})

      .catch(
        Swal.fire({
          icon: "error",
          title: "Xiii!",
          text: "Seu e-mail já foi usado anteriormente!"})
      )}

      //A senha precisa ter letras maiúsculas e minpusculas, um número e um caracter especial, além de ser de pelo menos 8 dígitos
  const validation = yup.object().shape({
    email: yup.string().required("Este campo é obrigatório!"),
    password: yup
      .string()
      .required("Campo obrigatório")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
        "Sua senha é muito fraca. Se esfoce mais!"),
    bio: yup.string().required("Este campo é obrigatório!"),
    contact: yup.string().required("Este campo é obrigatório!"),
    course_module: yup.string().required("Este campo é obrigatório!"),
    name: yup.string().required("Este campo é obrigatório!")})

  const {
    register,
    handleSubmit,
    formState: { errors }} = useForm({resolver: yupResolver(validation)})

  return (
    <MyRegister>
      <span className="SpanRegister">
        <h1 className="Logo">Kenzie Hub</h1>
        <button className="LoginBtn"
          onClick={() => {navigate("/")}}>Voltar</button>
      </span>
      <form className="MyForm" onSubmit={handleSubmit(userRegister)}>
        <h2 className="Tittle">Crie sua conta com a gente. É rápidinho, juro!</h2>
        <label className="Tittles">
          Nome
          <input
            type="text"
            className="Space"
            placeholder="Digite aqui seu nome"
            name="name"
            {...register("name")}
          />
          <p className="errorMessage">{errors.name?.message}</p>
        </label>
        <label className="Tittles">
          E-mail
          <input
            type="email"
            className="Space"
            placeholder="Digite aqui seu e-mail"
            name="email"
            {...register("email")}
          />
          <p className="errorMessage">{errors.email?.message}</p>
        </label>

        <label className="Tittles">
          Senha
          <input
            type="password"
            className="Space"
            placeholder="Digite aqui sua senha"
            name="password"
            {...register("password")}
          />
          <p className="errorMessage">{errors.password?.message}</p>
        </label>
        <label className="Tittles">
          Confimar Senha
          <input
            type="password"
            className="Space"
            placeholder="Confirme aqui sua senha"
          />
          <p className="errorMessage">{errors.password?.message}</p>
        </label>
        <label className="Tittles">
          Bio
          <input
            type=""
            className="Space"
            placeholder="Digite aqui sua biografia"
            name="bio"
            {...register("bio")}
          />
          <p className="errorMessage">{errors.bio?.message}</p>
        </label>
        <label className="Tittles">
          Contato
          <input
            type="text"
            className="Space"
            placeholder="Digite aqui seu contato"
            name="contact"
            {...register("contact")}
          />
          <p className="errorMessage">{errors.contact?.message}</p>
        </label>
        <label className="Tittles">
          Selecionar módulo
          <select
            className="Space"
            placeholder="Módulos"
            name="course_module"
            {...register("course_module")}
          >
            <option value="Primeiro-módulo">
              Primeiro módulo (Introdução ao Frontend)
            </option>
            <option value="Segundo-módulo">
              Segundo módulo (Frontend Avançado)
            </option>
            <option value="Terceiro-módulo">
              Terceiro módulo (Introdução ao Backend)
            </option>
            <option value="Quarto-módulo">
              Quarto módulo (Backend Avançado)
            </option>
          </select>
        </label>
        <button className="SubmitBtn">Cadastrar</button>
      </form>
    </MyRegister>
  )
}

export default Register