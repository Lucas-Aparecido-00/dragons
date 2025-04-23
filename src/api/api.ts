/* eslint-disable max-len */
import { AxiosPromise } from "axios";
import xhr from "./xhr";
import { Dragon } from "../@types/Dragons";

const listDragons = (): AxiosPromise<Dragon[]> => xhr.get("/dragon");

const getDragonDetails = (id: string): AxiosPromise<Dragon> =>
  xhr.get(`/dragon/${id}`);

const createDragon = (data: Dragon): AxiosPromise<Dragon> =>
  xhr.post("/dragon", data);

const updateDragon = (id: string, data: Dragon): AxiosPromise<Dragon> =>
  xhr.put(`/dragon/${id}`, data);

const deleteDragon = (id: string): AxiosPromise<void> =>
  xhr.delete(`/dragon/${id}`);

export default {
  listDragons,
  getDragonDetails,
  createDragon,
  updateDragon,
  deleteDragon,
};
