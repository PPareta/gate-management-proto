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
            onClick={() => props.onClick("Secondary Action")}
          >
            Secondary Link
          </button>
        </div>

        <div className="col">
          <button
            type="button"
            className="btn btn-success w-100 py-5 fs-5 shadow-sm text-uppercase fw-semibold"
            onClick={() => props.onClick("Success Action")}
          >
            Success Link
          </button>
        </div>

        <div className="col">
          <button
            type="button"
            className="btn btn-danger w-100 py-5 fs-5 shadow-sm text-uppercase fw-semibold"
            onClick={() => props.onClick("Danger Action")}
          >
            Danger Link
          </button>
        </div>

        <div className="col">
          <button
            type="button"
            className="btn btn-warning w-100 py-5 fs-5 shadow-sm text-uppercase fw-semibold text-dark"
            onClick={() => props.onClick("Warning Action")}
          >
            Warning Link
          </button>
        </div>

        <div className="col">
          <button
            type="button"
            className="btn btn-info w-100 py-5 fs-5 shadow-sm text-uppercase fw-semibold text-dark"
            onClick={() => props.handleClick("Info Action")}
          >
            Info Link
          </button>
        </div>
      </div>
    </>
  );
}
