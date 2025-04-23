import { useEffect, useState } from "react";
import { Dragon } from "../../@types/Dragons";
import { useNavigate, useParams } from "react-router-dom";
import api from "../../api/api";
import Swal from "sweetalert2";
import "./styles.css";

const DetailsDragon = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  const [dragon, setDragon] = useState<Dragon>({} as Dragon);
  const [loading, setLoading] = useState<boolean>(true);

  const getDetailsDragon = async () => {
    try {
      if (!id) {
        Swal.fire({
          icon: "error",
          title: "Erro",
          text: "ID do dragão não encontrado. Não foi possível carregar os detalhes do dragão.",
        });
        return;
      }
      const { data } = await api.getDragonDetails(id);
      setDragon(data);
    } catch (error) {
      Swal.fire(
        "Erro",
        "Não foi possível carregar os detalhes do dragão.",
        "error"
      );
      navigate("/");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getDetailsDragon();
  }, [id]);

  if (loading) {
    return <div className="loading">Carregando detalhes do dragão...</div>;
  }

  return (
    <div className="details-container">
      <h1 className="details-title">Detalhes do Dragão</h1>

      <div className="details-group">
        <label className="details-label">Nome:</label>
        <span className="details-value">{dragon.name}</span>
      </div>

      <div className="details-group">
        <label className="details-label">Tipo:</label>
        <span className="details-value">{dragon.type}</span>
      </div>

      <div className="details-group">
        <label className="details-label">Histórias:</label>
        {dragon.histories && dragon.histories.length > 0 ? (
          <ul className="details-list">
            {dragon.histories.map((history, index) => (
              <li key={index}>{history}</li>
            ))}
          </ul>
        ) : (
          <span className="details-value">Nenhuma história disponível.</span>
        )}
      </div>

      <div className="details-group">
        <label className="details-label">URL da imagem:</label>
        {dragon.imageUrl ? (
          <a href={dragon.imageUrl} target="_blank" rel="noopener noreferrer">
            {dragon.imageUrl}
          </a>
        ) : (
          <span className="details-value">Nenhuma imagem disponível.</span>
        )}
      </div>

      <button className="back-button" onClick={() => navigate("/list-dragons")}>
        Voltar
      </button>
    </div>
  );
};

export default DetailsDragon;
