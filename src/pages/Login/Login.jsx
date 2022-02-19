import { useState } from "react";
import "./Login.scss";
import openEye from "assets/images/eye-open.svg";
import closedEye from "assets/images/eye-closed.svg";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="Login">
      <form className="form-container" onSubmit={handleSubmit}>
        <div className="form-title">Sign in with your email</div>
        <input
          type="email"
          placeholder="Email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <div className="password-container">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            className="input-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {showPassword ? (
            <img
              onClick={() => setShowPassword(false)}
              src={openEye}
              alt="eye icon"
            />
          ) : (
            <img
              onClick={() => setShowPassword(true)}
              src={closedEye}
              alt="closed eye icon"
            />
          )}
        </div>
        <button>Sign in</button>
      </form>
    </div>
  );
};

export default Login;
