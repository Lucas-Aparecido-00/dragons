import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Dragon } from "../../@types/Dragons";
import api from "../../api/api";
import Swal from "sweetalert2";
import "./styles.css";

const CreateDragon = () => {
  const navigate = useNavigate();

  const [dragon, setDragon] = useState<Dragon>({
    createdAt: new Date().toISOString(),
    name: "",
    type: "",
    histories: [],
    id: "",
    imageUrl: "",
  });

  const handleChange = (field: keyof Dragon, value: string) => {
    if (field === "histories") {
      setDragon((prev) => ({ ...prev, histories: value.split("\n") }));
    } else {
      setDragon((prev) => ({ ...prev, [field]: value }));
    }
  };

  const handleSubmit = async () => {
    if (!dragon.name.trim() || !dragon.type.trim()) {
      Swal.fire(
        "Atenção",
        "Os campos Nome e Tipo são obrigatórios.",
        "warning"
      );
      return;
    }

    try {
      await api.createDragon(dragon);
      Swal.fire("Sucesso", "Dragão cadastrado com sucesso!", "success");
      navigate("/list-dragons");
    } catch (error) {
      Swal.fire("Erro", "Não foi possível cadastrar o dragão.", "error");
    }
  };

  return (
    <div className="form-container">
      <h1 className="form-title">Cadastrar novo dragão</h1>

      <div className="form-group">
        <label className="form-label">
          Nome <span className="required">*</span>
        </label>
        <input
          className="form-input"
          value={dragon.name}
          onChange={(e) => handleChange("name", e.target.value)}
        />
      </div>

      <div className="form-group">
        <label className="form-label">
          Tipo <span className="required">*</span>
        </label>
        <input
          className="form-input"
          value={dragon.type}
          onChange={(e) => handleChange("type", e.target.value)}
        />
      </div>

      <div className="form-group">
        <label className="form-label">Histórias (uma por linha)</label>
        <textarea
          className="form-textarea"
          value={dragon.histories.join("\n")}
          onChange={(e) => handleChange("histories", e.target.value)}
        />
      </div>

      <div className="form-group">
        <label className="form-label">URL da imagem</label>
        <input
          className="form-input"
          value={dragon.imageUrl}
          onChange={(e) => handleChange("imageUrl", e.target.value)}
        />
      </div>

      <button className="submit-button" onClick={handleSubmit}>
        Criar Dragão
      </button>
    </div>
  );
};

export default CreateDragon;
