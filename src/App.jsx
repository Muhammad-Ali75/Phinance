import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard, { dashBoardLoader } from "./pages/Dashboard";
import Error from "./pages/error";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard/>,
    loader: dashBoardLoader,
    errorElement: <Error/>
  },
]);

function App() {
  return (
      <div>
        <RouterProvider router={router}/>
      </div>
  )
}

export default App
