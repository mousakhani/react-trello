import App from "./App";
import Board from "./components/Board";
import About from "./components/pages/About";
import PageNotFound from "./components/pages/PageNotFound";
const routes = [
  {
    id: 0,
    name: "App",
    path: "/",
    element: <App />,
  },
  {
    id: 1,
    name: "page not found",
    path: "*",
    element: <PageNotFound />,
  },
  {
    key: 2,
    name: "board",
    path: "/board",
    element: <Board />,
  },
  {
    key: 3,
    name: "about",
    path: "/about",
    element: <About />,
  },
];

export default function GetRoutes() {
  return routes;
}
