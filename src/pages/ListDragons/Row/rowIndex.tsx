import { Dragon } from "../../../@types/Dragons";
import { capitalizeFirstLetter } from "../../../utils/capitalize-first-letter";
import "./rowStyles.css";

interface RowDragonProps {
  dragon: Dragon;
  deleteDragon: (id: string) => void;
  handleDetails: (id: string) => void;
  editDragon: (id: string) => void;
}

const RowDragon = ({
  dragon,
  deleteDragon,
  handleDetails,
  editDragon,
}: RowDragonProps) => {
  return (
    <div key={dragon.id} className="dragon-card">
      <img src={dragon.imageUrl} alt={dragon.name} className="dragon-image" />
      <div className="card-content">
        <h2 className="dragon-name">{capitalizeFirstLetter(dragon.name)}</h2>
        <p className="dragon-type">
          Tipo: {capitalizeFirstLetter(dragon.type)}
        </p>
        <div className="actions">
          <button
            className="btn consult"
            onClick={() => handleDetails(dragon.id)}
          >
            Consultar
          </button>
          <button className="btn edit" onClick={() => editDragon(dragon.id)}>
            Alterar
          </button>
          <button
            className="btn delete"
            onClick={() => deleteDragon(dragon.id)}
          >
            Excluir
          </button>
        </div>
      </div>
    </div>
  );
};

export default RowDragon;
