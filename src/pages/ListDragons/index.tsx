import { useEffect, useState } from "react";
import { Dragon } from "../../@types/Dragons";
import api from "../../api/api";
import "./styles.css";
import RowDragon from "./Row/rowIndex";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const ListDragons = () => {
  const [dragons, setDragons] = useState<Dragon[]>([]);
  const navigate = useNavigate();

  const getDragons = async () => {
    try {
      const { data } = await api.listDragons();
      if (!data) {
        Swal.fire({
          icon: "info",
          text: "Não há dragões a serem listados",
        });
        return;
      }
      setDragons(data);
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Erro",
        text: "Algo deu errado ao buscar os dragões.",
      });
    }
  };

  const deleteDragon = async (id: string) => {
    try {
      Swal.fire({
        title: "Tem certeza que deseja deletar este dragão?",
        text: "Essa ação não pode ser desfeita!",
        icon: "warning",
        showCancelButton: true,
        cancelButtonText: "Cancelar",
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Sim, quero deletar!",
      }).then(async (result) => {
        if (result.isConfirmed) {
          await api.deleteDragon(id);
          Swal.fire({
            title: "Deletado!",
            text: "Dragão deletado com sucesso.",
            icon: "success",
          });
          await getDragons();
        }
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Erro",
        text: "Algo deu errado ao deletar este dragão.",
      });
    }
  };

  const handleDetails = (id: string) => {
    navigate(`/details-dragon/${id}`);
  };

  const editDragon = (id: string) => {
    navigate(`/edit-dragon/${id}`);
  };

  useEffect(() => {
    getDragons();
  }, []);

  return (
    <div className="container">
      <div className="container-title">
        <h1 className="title">Listagem de dragões</h1>
        <button
          className="create-button"
          onClick={() => navigate("/create-dragon")}
        >
          Cadastrar dragão
        </button>
      </div>
      <div className="grid">
        {dragons
          .sort((a, b) => a.name.localeCompare(b.name))
          .map((dragon) => (
            <RowDragon
              dragon={dragon}
              deleteDragon={deleteDragon}
              handleDetails={handleDetails}
              editDragon={editDragon}
            />
          ))}
      </div>
    </div>
  );
};

export default ListDragons;
