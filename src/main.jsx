import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import TaskPage from "./pages/TaskPage.jsx";  // Adicionando a importação de TaskPage
import Login from "./pages/Login.jsx";  // Adicionando a importação de Login
import Cadastro from "./pages/Cadastro.jsx";  // Adicionando a importação de Cadastro

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/task",
    element: <TaskPage />,  // Definindo o caminho para renderizar TaskPage
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/cadastro",
    element: <Cadastro />
  }
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
