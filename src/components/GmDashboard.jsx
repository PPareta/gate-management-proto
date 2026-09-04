export default function GmDashboard(props) {
  return (
    <>
      {/* Six Multi-Colored Buttons Grid */}
      <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-4 mt-2">
        <div className="col">
          <button
            type="button"
            className="btn btn-primary w-100 py-5 fs-5 shadow-sm text-uppercase fw-semibold"
            onClick={() => props.onClick("Flat List")}
          >
            Flat List
          </button>
        </div>
        <div className="col">
          <button
            type="button"
            className="btn btn-secondary w-100 py-5 fs-5 shadow-sm text-uppercase fw-semibold"
            onClick={() => props.onClick("Book Party Hall")}
          >
            Book Party Hall
          </button>
        </div>

        <div className="col">
          <button
            type="button"
            className="btn btn-success w-100 py-5 fs-5 shadow-sm text-uppercase fw-semibold"
            onClick={() => props.onClick("Raise a Ticket")}
          >
            Raise a Ticket
          </button>
        </div>

        <div className="col">
          <button
            type="button"
            className="btn btn-danger w-100 py-5 fs-5 shadow-sm text-uppercase fw-semibold"
            onClick={() => props.onClick("Profile")}
          >
            Profile
          </button>
        </div>

        <div className="col">
          <button
            type="button"
            className="btn btn-warning w-100 py-5 fs-5 shadow-sm text-uppercase fw-semibold text-dark"
            onClick={() => props.onClick("Guest Entry")}
          >
            Guest Entry
          </button>
        </div>

        <div className="col">
          <button
            type="button"
            className="btn btn-info w-100 py-5 fs-5 shadow-sm text-uppercase fw-semibold text-dark"
            onClick={() => props.handleClick("Pre Approval")}
          >
            Pre Approval
          </button>
        </div>
      </div>
    </>
  );
}
