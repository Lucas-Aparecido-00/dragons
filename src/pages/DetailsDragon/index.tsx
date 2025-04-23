import { useEffect, useState } from "react";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import { Dragon } from "../../@types/Dragons";
import api from "../../api/api";
import Swal from "sweetalert2";
import "./styles.css";

const DetailsDragon = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const location = useLocation();
  const isEditMode = location.state?.edit || false;

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

  const handleInputChange = (field: keyof Dragon, value: string | string[]) => {
    setDragon((prev) => ({ ...prev, [field]: value }));
  };

  const saveDragon = async () => {
    try {
      await api.updateDragon(id!, dragon); // Atualiza o dragão na API
      Swal.fire({
        icon: "success",
        title: "Sucesso",
        text: "Dragão atualizado com sucesso!",
      });
      navigate("/list-dragons"); // Redireciona para a lista de dragões
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Erro",
        text: "Não foi possível salvar as alterações.",
      });
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
      <h1 className="details-title">
        {isEditMode ? "Editar Dragão" : "Detalhes do Dragão"}
      </h1>

      <div className="details-group">
        <label className="details-label">Nome:</label>
        {isEditMode ? (
          <input
            type="text"
            className="details-input"
            value={dragon.name}
            onChange={(e) => handleInputChange("name", e.target.value)}
          />
        ) : (
          <span className="details-value">{dragon.name}</span>
        )}
      </div>

      <div className="details-group">
        <label className="details-label">Tipo:</label>
        {isEditMode ? (
          <input
            type="text"
            className="details-input"
            value={dragon.type}
            onChange={(e) => handleInputChange("type", e.target.value)}
          />
        ) : (
          <span className="details-value">{dragon.type}</span>
        )}
      </div>

      <div className="details-group">
        <label className="details-label">Histórias:</label>
        {isEditMode ? (
          <textarea
            className="details-text-area"
            value={dragon.histories?.join("\n") || ""}
            onChange={(e) =>
              handleInputChange("histories", e.target.value.split("\n"))
            }
          />
        ) : dragon.histories && dragon.histories.length > 0 ? (
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
        <label className="details-label">Imagem:</label>
        {isEditMode ? (
          <input
            type="text"
            className="details-input"
            value={dragon.imageUrl || ""}
            onChange={(e) => handleInputChange("imageUrl", e.target.value)}
          />
        ) : dragon.imageUrl ? (
          <img
            src={dragon.imageUrl}
            alt="Imagem do Dragão"
            className="details-image"
          />
        ) : (
          <span className="details-value">Nenhuma imagem disponível.</span>
        )}
      </div>

      <div className="details-actions">
        <button
          className="back-button"
          onClick={() => navigate("/list-dragons")}
        >
          Voltar
        </button>
        {isEditMode && (
          <button className="save-button" onClick={saveDragon}>
            Salvar
          </button>
        )}
      </div>
    </div>
  );
};

export default DetailsDragon;
