import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();

  const handleButtonClick = (actionName) => {
    console.log(`${actionName} button clicked`);
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
            <h1 className="h2">Dashboard Overview</h1>
          </div>

          {/* Six Multi-Colored Buttons Grid */}
          <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-4 mt-2">
            <div className="col">
              <button
                type="button"
                className="btn btn-primary w-100 py-5 fs-5 shadow-sm text-uppercase fw-semibold"
                onClick={() => handleButtonClick("Primary Action")}
              >
                Primary Link
              </button>
            </div>

            <div className="col">
              <button
                type="button"
                className="btn btn-secondary w-100 py-5 fs-5 shadow-sm text-uppercase fw-semibold"
                onClick={() => handleButtonClick("Secondary Action")}
              >
                Secondary Link
              </button>
            </div>

            <div className="col">
              <button
                type="button"
                className="btn btn-success w-100 py-5 fs-5 shadow-sm text-uppercase fw-semibold"
                onClick={() => handleButtonClick("Success Action")}
              >
                Success Link
              </button>
            </div>

            <div className="col">
              <button
                type="button"
                className="btn btn-danger w-100 py-5 fs-5 shadow-sm text-uppercase fw-semibold"
                onClick={() => handleButtonClick("Danger Action")}
              >
                Danger Link
              </button>
            </div>

            <div className="col">
              <button
                type="button"
                className="btn btn-warning w-100 py-5 fs-5 shadow-sm text-uppercase fw-semibold text-dark"
                onClick={() => handleButtonClick("Warning Action")}
              >
                Warning Link
              </button>
            </div>

            <div className="col">
              <button
                type="button"
                className="btn btn-info w-100 py-5 fs-5 shadow-sm text-uppercase fw-semibold text-dark"
                onClick={() => handleButtonClick("Info Action")}
              >
                Info Link
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
