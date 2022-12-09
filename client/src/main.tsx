import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

// Routes
import Root from "./routes/root";
import Home from "./routes/home";
import Vip from "./routes/vip";
import Plans from "./routes/vip/plans";
import Plan from "./routes/vip/plan";
import NotFound from "./routes/error404";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/vip",
        element: <Vip />,
        children: [
          {
            path: "/vip/plans",
            element: <Plans />,
          },
          {
            path: "/vip/plans/:planId",
            element: <Plan />,
          },
        ],
      },
    ],
  },
]);

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <QueryClientProvider client={queryClient}>
    <RouterProvider router={router} />
  </QueryClientProvider>
);
