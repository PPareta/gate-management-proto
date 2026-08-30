import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (!formData.email || !formData.password) {
      setError("Please fill in all fields.");
      return;
    }

    console.log("Logging in with:", formData);
    // Add login API integration logic here

    navigate("/dashboard");
  };

  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <div
        className="card p-4 shadow-sm"
        style={{ width: "100%", maxWidth: "600px" }}
      >
        <div className="card-body">
          <h2 className="card-title text-center mb-4">Welcome Back</h2>

          {error && (
            <div className="alert alert-danger py-2" role="alert">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            {/* Email Field */}
            <div className="row mb-3 align-items-center">
              <label
                htmlFor="email"
                className="col-sm-4 col-form-label text-sm-end"
              >
                Email address
              </label>
              <div className="col-sm-8">
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="name@example.com"
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="row mb-3 align-items-center">
              <label
                htmlFor="password"
                className="col-sm-4 col-form-label text-sm-end"
              >
                Password
              </label>
              <div className="col-sm-8">
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="••••••••"
                />
              </div>
            </div>

            {/* Remember Me Checkbox */}
            <div className="row mb-4">
              <div className="col-sm-8 offset-sm-4">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="rememberMe"
                    name="rememberMe"
                    checked={formData.rememberMe}
                    onChange={handleChange}
                  />
                  <label
                    className="form-check-input-label"
                    htmlFor="rememberMe"
                  >
                    Remember me
                  </label>
                </div>
              </div>
            </div>

            {/* Submit Button aligned with inputs */}
            <div className="row">
              <div className="col-sm-8 offset-sm-4">
                <button type="submit" className="btn btn-primary w-100 py-2">
                  Log In
                </button>
              </div>
            </div>
          </form>

          {/* Helper links */}
          <div className="d-flex justify-content-between mt-4 px-2">
            <small className="text-muted">
              Don't have an account?{" "}
              <a href="/singup" className="text-decoration-none">
                Sign up
              </a>
            </small>
            <small>
              <a
                href="/forgot-password"
                className="text-decoration-none text-muted"
              >
                Forgot password?
              </a>
            </small>
          </div>
        </div>
      </div>
    </div>
  );
}
