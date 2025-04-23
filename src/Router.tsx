import { lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";

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
          <Route
            path="/list-dragons"
            element={
              <PrivateRoute>
                <ListDragons />
              </PrivateRoute>
            }
          />
          <Route
            path="/create-dragon"
            element={
              <PrivateRoute>
                <CreateDragon />
              </PrivateRoute>
            }
          />
          <Route
            path="/details-dragon/:id"
            element={
              <PrivateRoute>
                <DetailsDragon />
              </PrivateRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};
