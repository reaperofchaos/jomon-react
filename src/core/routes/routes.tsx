import Home from "../components/home";
import ErrorPage from "../components/error";
import ExpertWrapper from "../../expert/components/ExpertWrapper";
import ExpertForm from "../../expert/components/ExpertForm";
import Main from "../components/main";
import ExpertList from "../../expert/components/ExpertList";
import SourceForm from "../../source/components/SourceForm";

export const routes = [
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/Source/",
        children: [
          {
            path: "/Source/",
            element: <ExpertList />,
          },
          {
            path: "/Source/:id",
            element: <ExpertWrapper />,
          },
          {
            path: "/Source/Add",
            element: <SourceForm />,
          },
        ],
      },
      {
        path: "/Expert/",
        children: [
          {
            path: "/Expert/",
            element: <ExpertList />,
          },
          {
            path: "/Expert/:id",
            element: <ExpertWrapper />,
          },
          {
            path: "/Expert/Add",
            element: <ExpertForm />,
          },
        ],
      },
    ],
  },
];
