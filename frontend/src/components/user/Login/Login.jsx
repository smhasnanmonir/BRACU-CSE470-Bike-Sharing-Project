"use client";

import { useAuthContext } from "@/providers/AuthProvider";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

// const {  } = useAuthContext;
const Login = () => {
  const { emailLogin } = useAuthContext(); // Get emailLogin and loading from AuthProvider
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false); // Set loading to false initially
  const router = useRouter();
  const { user } = useAuthContext();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(""); // Clear previous errors
    try {
      await emailLogin(email, password);
      console.log("Login successful");
      router.push("/dashboard");
    } catch (err) {
      // Handle Firebase error codes
      if (err.code === "auth/wrong-password") {
        setError("Incorrect password. Please try again.");
      } else if (err.code === "auth/user-not-found") {
        setError("No user found with this email.");
      } else {
        setError(err.message); // Display the error message for any other cases
      }
    }
  };
  return (
    <>
      {user ? (
        <>
          <div className="h-screen w-full grid place-content-center space-y-[15px]">
            <img
              className="w-[250px] "
              src="https://i.ibb.co.com/WPryCNj/Pngtree-login-account-apps-7902142.png"
              alt=""
              srcset=""
            />
            <h1 className="text-4xl text-gray-900 py-[10px]">
              You are already logged in!
            </h1>
            <Link href="/dashboard" class="relative">
              <span class="absolute top-0 left-0 mt-1 ml-1 h-full w-full rounded bg-gray-700"></span>
              <span class="fold-bold relative inline-block h-full w-full rounded border-2 border-black bg-black px-3 py-1 text-base font-bold text-white transition duration-100 hover:bg-gray-900 hover:text-yellow-500">
                Go to Dashboard
              </span>
            </Link>
          </div>
        </>
      ) : (
        <>
          <div className="flex flex-col items-center py-[10%] h-screen bg-gray-100">
            <h2 className="text-3xl font-semibold mb-6 text-gray-800">Login</h2>
            <form
              onSubmit={handleLogin}
              className="bg-white p-8 rounded-lg shadow-md w-full max-w-md"
            >
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>
              {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
              <div className="flex justify-center">
                <button
                  type="submit"
                  disabled={loading}
                  className={`w-full px-4 py-2 bg-purple-600 text-white font-medium rounded-md shadow-sm hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 ${
                    loading ? "cursor-not-allowed opacity-50" : ""
                  }`}
                >
                  {loading ? "Logging in..." : "Login"}
                </button>
              </div>
            </form>
          </div>
        </>
      )}
    </>
  );
};

export default Login;
