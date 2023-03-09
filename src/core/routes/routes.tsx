import { RouteObject } from "react-router-dom";
import App from "../../App";
import SearchResult from "../../components/search-result/search-result";

const Routes: RouteObject[] = [
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/search-result",
    element: <SearchResult />,
  },
  {
    path: "*",
    element: <>Ops...</>,
  },
];
export default Routes;
