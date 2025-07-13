import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const UserLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // 🔐 Dummy login check (replace with real API later)
    if (email === "user@example.com" && password === "user123") {
      alert("Login successful!");
      localStorage.setItem("isLoggedIn", "true");
      navigate("/");
    } else {
      alert("Invalid email or password");
    }
  };

  return (
    <div style={styles.container}>
      <h2>User Login</h2>
      <form onSubmit={handleLogin} style={styles.form}>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={styles.input}
        />
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={styles.input}
        />
        <button type="submit" style={styles.button}>Login</button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "400px",
    margin: "80px auto",
    padding: "2rem",
    border: "1px solid #ddd",
    borderRadius: "10px",
    backgroundColor: "#f8f8f8",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  input: {
    padding: "12px",
    marginBottom: "16px",
    fontSize: "1rem",
    borderRadius: "6px",
    border: "1px solid #ccc",
  },
  button: {
    padding: "12px",
    backgroundColor: "#333",
    color: "#fff",
    fontSize: "1rem",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  },
};

export default UserLogin;
