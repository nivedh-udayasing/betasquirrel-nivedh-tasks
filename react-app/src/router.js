import { createBrowserRouter } from "react-router-dom";
import Dashboard from "./views/Dashboard";
import Student from "./views/Student";
import Staff from "./views/Staff";
import Accounts from "./views/Accounts";
import Library from "./views/Library";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "/student",
    element: <Student />,
  },
  {
    path: "/staff",
    element: <Staff />,
  },
  {
    path: "/accounts",
    element: <Accounts />,
  },
  {
    path: "/library",
    element: <Library />,
  },
]);

export default router;
