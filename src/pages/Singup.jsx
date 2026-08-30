import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Signup() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (!formData.username || !formData.email || !formData.password) {
      setError("All fields are required.");
      return;
    }
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    console.log("Form submitted:", formData);
  };

  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <div
        className="card p-4 shadow-sm"
        style={{ width: "100%", maxWidth: "600px" }}
      >
        <div className="card-body">
          <h2 className="card-title text-center mb-4">Create an Account</h2>

          {error && (
            <div className="alert alert-danger py-2" role="alert">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            {/* Username Field */}
            <div className="row mb-3 align-items-center">
              <label
                htmlFor="username"
                className="col-sm-4 col-form-label text-sm-end"
              >
                Username
              </label>
              <div className="col-sm-8">
                <input
                  type="text"
                  className="form-control"
                  id="username"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  placeholder="johndoe"
                />
              </div>
            </div>

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

            {/* Confirm Password Field */}
            <div className="row mb-4 align-items-center">
              <label
                htmlFor="confirmPassword"
                className="col-sm-4 col-form-label text-sm-end"
              >
                Confirm Password
              </label>
              <div className="col-sm-8">
                <input
                  type="password"
                  className="form-control"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="••••••••"
                />
              </div>
            </div>

            {/* Submit Button aligned with fields */}
            <div className="row">
              <div className="col-sm-8 offset-sm-4">
                <button type="submit" className="btn btn-primary w-100 py-2">
                  Sign Up
                </button>
              </div>
            </div>
          </form>

          <div className="text-center mt-4">
            <small className="text-muted">
              Already have an account?{" "}
              <a href="/login" className="text-decoration-none">
                Log in
              </a>
            </small>
          </div>
        </div>
      </div>
    </div>
  );
}
