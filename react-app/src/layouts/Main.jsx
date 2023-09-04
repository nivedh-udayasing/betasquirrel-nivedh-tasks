import AppNavbar from "../components/AppNavbar";
import Sidebar from "../components/Sidebar";

function Main({ children }) {
  return (
    <>
      <AppNavbar />
      <div className="d-flex">
        <Sidebar />
        <div className="container-fluid">{children}</div>
      </div>
    </>
  );
}

export default Main;
