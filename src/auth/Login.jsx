import { useState } from "react";

export default function Login({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // TEMP (replace with backend later)
    if (username === "admin") {
      localStorage.setItem("role", "admin");
      onLogin();
    } else {
      localStorage.setItem("role", "viewer");
      onLogin();
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded shadow w-80">
        <h2 className="text-xl font-bold mb-4 text-center">BSP Login</h2>

        <input
          placeholder="Username"
          className="border w-full p-2 mb-3"
          onChange={e => setUsername(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="border w-full p-2 mb-4"
          onChange={e => setPassword(e.target.value)}
        />

        <button
          onClick={handleLogin}
          className="bg-blue-600 text-white w-full py-2 rounded"
        >
          Login
        </button>

        <p className="text-xs text-center mt-2 text-gray-500">
          Admin / Viewer access
        </p>
      </div>
    </div>
  );
}
