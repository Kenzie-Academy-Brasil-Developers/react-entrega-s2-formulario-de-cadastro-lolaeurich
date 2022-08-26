import { useContext } from "react"
import { TechsContext } from "../contexts/TechsContext";

import Div from "./Styles/Techs"


interface OpenModalProps {
  handleOpenModal: () => void,
}

interface ITech {
  id: string;
  title: string;
  status: string;
}

function Techs({handleOpenModal}: OpenModalProps) {

  const { techs, deleteTech } = useContext(TechsContext);

  return (
    <Div>
      <div className="Techs">
        <h2 className="TechsTittle">Minhas tecnologias</h2>
        <button className="AddBtn" onClick={handleOpenModal}>Add</button>
      </div>

      <div className="MyMain">
        {techs.length > 0 
        ? 
        (
          techs.map((elem: ITech, index: number) => (

            <div className="Card" key={index}>

              <span className="CardText">
                <h3 className="Text2">{elem.title}</h3>
                <h4 className="Text3">{elem.status}</h4>
              </span>

              <button className="DeleteBtn"
                onClick={() => deleteTech(elem.id)}>
              </button>
            </div>
          ))
        ) 
        : 
        (
          <h3 className="noTech">Você ainda não possui tecnologias adicionadas</h3>
        )}
      </div>
    </Div>
  )
}

export default Techs