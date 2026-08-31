import { useState } from "react";
import { useNavigate } from "react-router-dom";
import GmDashboard from "../components/GmDashboard";
import GmList from "../components/GmList";
import { ownerList } from "../data/flates";

function ShowUI({ title }) {
  switch (title) {
    case "Flat List":
      //
      return <GmList items={ownerList} />;
    default:
      return <div></div>;
  }
}

export default function Dashboard() {
  const navigate = useNavigate();
  const [title, setTitle] = useState("Dashboard");

  const handleClick = (actionName) => {
    console.log(`${actionName} button clicked`);
    setTitle(actionName);
    // Add your routing or state logic here
  };

  const handleLogout = (e) => {
    e.preventDefault();
    console.log("Logging out...");
    // Add your auth clearing / redirect logic here

    navigate("/");
  };

  return (
    <div className="container-fluid">
      <div className="row min-vh-100">
        {/* --- SIDEBAR --- */}
        <nav className="col-md-3 col-lg-2 d-md-block bg-dark sidebar collapse p-0">
          <div className="position-sticky pt-3 d-flex flex-column justify-content-between h-100 min-vh-100">
            <div>
              <div className="px-3 mb-4">
                <h5 className="text-white m-0">Gate Management</h5>
              </div>
              <ul className="nav flex-column px-2">
                <li className="nav-item mb-2">
                  <a
                    className="nav-link active text-white bg-primary rounded px-3 py-2"
                    href="/dashboard"
                  >
                    <i className="bi bi-speedometer2 me-2"></i> Dashboard
                  </a>
                </li>
              </ul>
            </div>

            {/* Sidebar Bottom Actions */}
            <div className="p-3 border-top border-secondary">
              <ul className="nav flex-column gap-2">
                <li className="nav-item">
                  <a
                    className="nav-link text-white-50 p-2 d-flex align-items-center"
                    href="/settings"
                  >
                    Settings
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link text-danger p-2 d-flex align-items-center"
                    href="#logout"
                    onClick={handleLogout}
                  >
                    Logout
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        {/* --- MAIN CONTENT AREA --- */}
        <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4 py-4 bg-light">
          <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
            <h1 className="h2">{title}</h1>
          </div>
          {title === "Dashboard" ? (
            <GmDashboard onClick={handleClick} />
          ) : (
            <ShowUI title={title} />
          )}
        </main>
      </div>
    </div>
  );
}
