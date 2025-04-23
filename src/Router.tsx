import { lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const Login = lazy(() => import("./pages/Login"));
const ListDragons = lazy(() => import("./pages/ListDragons"));
const CreateDragon = lazy(() => import("./pages/CreateDragon"));
const DetailsDragon = lazy(() => import("./pages/DetailsDragon"));

export const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/list-dragons" element={<ListDragons />} />
          <Route path="/create-dragon" element={<CreateDragon />} />
          <Route path="/details-dragon/:id" element={<DetailsDragon />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
