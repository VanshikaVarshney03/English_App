import { useState } from "react";
import { Link } from "react-router-dom";

export default function LoginPage() {
  const [rollNo, setRollNo] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Email validation
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    // Password validation (same as signup)
    const passwordRegex =
      /^(?=.[A-Z])(?=.\d)(?=.[!@#$%^&()_+\-=\[\]{};':"\\|,.<>/?]).{8,}$/;

    if (!passwordRegex.test(password)) {
      setError(
        "Password must have at least 8 characters, 1 uppercase letter, 1 number, and 1 special character."
      );
      return;
    }

    setError("");
    console.log({ rollNo, email, password });
  };

  return (
    <div
      className={`min-h-screen font-[Poppins] transition-colors duration-500 ${
        darkMode
          ? "bg-[#0d1117] text-white"
          : "bg-gradient-to-br from-[#e3f2fd] to-[#bbdefb] text-[#0d47a1]"
      }`}
    >
      {/* Navbar */}
      <header
        className={`fixed top-0 w-full backdrop-blur-lg px-8 md:px-16 py-4 flex justify-between items-center z-50 border-b transition-all duration-500 ${
          darkMode
            ? "bg-[#161b22]/90 border-[#30363d]"
            : "bg-white/80 border-[#90caf9] shadow-[0_4px_12px_rgba(33,150,243,0.1)]"
        }`}
      >
        <h1
          className={`text-2xl font-bold ${
            darkMode ? "text-[#60a5fa]" : "text-[#1976d2]"
          }`}
        >
          PrepTalk
        </h1>

        <div className="flex items-center gap-3">
          {/* Signup Button */}
          <button
            className={`${
              darkMode
                ? "text-[#60a5fa] border-[#60a5fa] hover:bg-[#1e293b]"
                : "text-[#1565c0] border-[#1976d2] hover:bg-[#e3f2fd]"
            } border-2 px-5 py-2 rounded-full transition-all duration-300 font-medium`}
          >
            <Link to="/signup">Signup</Link>
          </button>

          {/* Contact Button */}
          <button
            className={`${
              darkMode
                ? "text-[#60a5fa] border-[#60a5fa] hover:bg-[#1e293b]"
                : "text-[#1565c0] border-[#1976d2] hover:bg-[#e3f2fd]"
            } border-2 px-5 py-2 rounded-full transition-all duration-300 font-medium`}
          >
            Contact Us
          </button>

          {/* Dark Mode Toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`${
              darkMode
                ? "bg-[#60a5fa] hover:bg-[#3b82f6]"
                : "bg-[#1976d2] hover:bg-[#1565c0]"
            } text-white p-2 sm:p-2.5 rounded-full transition-all duration-300 hover:scale-110 shadow-lg`}
            aria-label="Toggle Dark Mode"
          >
            {darkMode ? "☀" : "🌙"}
          </button>
        </div>
      </header>

      {/* Login Form */}
      <section className="flex flex-col justify-center items-center min-h-screen px-4 md:px-20 pt-32">
        <div
          className={`backdrop-blur-sm p-10 rounded-3xl shadow-lg max-w-md w-full transition-all duration-500 ${
            darkMode ? "bg-[#161b22]/90" : "bg-white/90"
          }`}
        >
          <h2
            className={`text-3xl font-bold mb-6 text-center ${
              darkMode ? "text-[#60a5fa]" : "text-[#0d47a1]"
            }`}
          >
            Login
          </h2>

          <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
            {/* Optional Roll Number */}
            <div>
              <label
                className={`block font-medium mb-1 ${
                  darkMode ? "text-[#93c5fd]" : "text-[#1565c0]"
                }`}
                htmlFor="rollNo"
              >
                University Roll No (Optional)
              </label>
              <input
                id="rollNo"
                type="text"
                value={rollNo}
                onChange={(e) => {
                  const val = e.target.value;
                  if (/^\d*$/.test(val)) setRollNo(val);
                }}
                placeholder="Enter roll number (optional)"
                className={`w-full rounded-xl px-4 py-2 focus:outline-none focus:ring-2 transition-all duration-300 ${
                  darkMode
                    ? "bg-[#0d1117] border border-[#30363d] focus:ring-[#60a5fa] text-white"
                    : "border border-[#90caf9] focus:ring-[#1976d2] text-[#0d47a1]"
                }`}
              />
            </div>

            {/* Email Field */}
            <div>
              <label
                className={`block font-medium mb-1 ${
                  darkMode ? "text-[#93c5fd]" : "text-[#1565c0]"
                }`}
                htmlFor="email"
              >
                University Email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className={`w-full rounded-xl px-4 py-2 focus:outline-none focus:ring-2 transition-all duration-300 ${
                  darkMode
                    ? "bg-[#0d1117] border border-[#30363d] focus:ring-[#60a5fa] text-white"
                    : "border border-[#90caf9] focus:ring-[#1976d2] text-[#0d47a1]"
                }`}
                required
              />
            </div>

            {/* Password Field */}
            <div>
              <label
                className={`block font-medium mb-1 ${
                  darkMode ? "text-[#93c5fd]" : "text-[#1565c0]"
                }`}
                htmlFor="password"
              >
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className={`w-full rounded-xl px-4 py-2 focus:outline-none focus:ring-2 transition-all duration-300 ${
                  darkMode
                    ? "bg-[#0d1117] border border-[#30363d] focus:ring-[#60a5fa] text-white"
                    : "border border-[#90caf9] focus:ring-[#1976d2] text-[#0d47a1]"
                }`}
                required
              />
            </div>

            {/* Error Message */}
            {error && (
              <p className="text-red-500 text-sm text-center -mt-2">{error}</p>
            )}

            {/* Login Button */}
            <button
              type="submit"
              className={`px-6 py-3 rounded-full text-lg font-semibold shadow-lg transition-all duration-500 hover:shadow-xl hover:-translate-y-1 hover:scale-105 ${
                darkMode
                  ? "bg-[#60a5fa] hover:bg-[#3b82f6] text-white"
                  : "bg-gradient-to-r from-[#1976d2] to-[#1565c0] text-white hover:from-[#1565c0] hover:to-[#0d47a1]"
              }`}
            >
              Login
            </button>

            {/* Signup Redirect */}
            <p
              className={`text-center mt-2 text-sm ${
                darkMode ? "text-[#93c5fd]" : "text-[#1565c0]"
              }`}
            >
              Not registered yet?{" "}
              <Link
                to="/signup"
                className={`font-semibold hover:underline ${
                  darkMode ? "text-[#60a5fa]" : "text-[#1976d2]"
                }`}
              >
                Sign up here
              </Link>
            </p>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer
        className={`text-center py-6 text-white/90 border-t transition-all duration-500 ${
          darkMode
            ? "bg-[#161b22] border-[#30363d]"
            : "bg-gradient-to-r from-[#1976d2] to-[#1565c0] border-[#42a5f5]"
        }`}
      >
        <p className="text-base">© 2025 PrepTalk. All Rights Reserved.</p>
      </footer>
    </div>
  );
}