import axios from "axios";

//criei a api pra poder acompanhar a demo, mas não sei se é

const api = axios.create({
    baseURL: "https://kenziehub.herokuapp.com/",
    timeout: 5000,
})

export default api