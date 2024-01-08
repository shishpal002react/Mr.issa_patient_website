import React from "react";
import "./login.css";
import { Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { login_user } from "../Api_Collection/Api.js";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      email,
      password,
    };
    login_user(data)
      .then(() => {
        const token = localStorage.getItem("token");
        if (token) {
          navigate("/patient_panel");
        }
      })
      .catch(() => navigate("/patient_panel"));
  };
  return (
    <div className="main-div-login">
      <div className="top-div-login">
        <img
          style={{ width: "100%", height: "100%" }}
          src={"login.png"}
          alt="login-banner"
        />
      </div>
      <div className="bottom-div-login">
        <Form className="login-form" onSubmit={handleSubmit}>
          <h2
            style={{ fontWeight: "bold", fontSize: "1.4rem", color: "black" }}
          >
            Enter Your Credentials to Log In
          </h2>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              type="email"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
              placeholder=" Username"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
              type="password"
              value={password}
              required
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
          </Form.Group>
          <button className="login-btn" type="submit">
            Login
          </button>
        </Form>
      </div>
    </div>
  );
};

export default Login;
