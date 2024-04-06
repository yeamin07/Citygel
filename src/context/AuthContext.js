import { createContext, useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import Loading from "components/Loading/Loading";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "config/api/axios";
const AuthContext = createContext();

export default AuthContext;

export const AuthProvider = ({ children }) => {
  let [authToken, setAuthToken] = useState(() =>
    localStorage.getItem("authToken") ? localStorage.getItem("authToken") : "",
  );
  let [tuser, setTUser] = useState(() =>
    localStorage.getItem("authToken")
      ? jwtDecode(localStorage.getItem("authToken"))
      : null,
  );
  let [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  let logoutUser = () => {
    setAuthToken(null);
    setTUser(null);
    localStorage.removeItem("authToken");
    navigate("/login");
  };

  let contextData = {
    tuser: tuser,
    authToken: authToken,
    setAuthToken: setAuthToken,
    setTUser: setTUser,
    logoutUser: logoutUser,
  };

  useEffect(() => {
    const checkTokenExpiration = () => {
      if (!authToken) return;

      const token = jwtDecode(authToken);
      const expirationTimeInSeconds = token.exp - Date.now() / 1000;

      // Token expired or will expire within 60 seconds
      if (expirationTimeInSeconds <= 60) {
        // Regenerate token
        // Implement your token regeneration logic here
        // For simplicity, I'm assuming you have an updateToken function
        updateToken();
      }
    };

    const updateToken = async () => {
      try {
        setLoading(true);

        const refreshTokenFromCookie = document.cookie
          .split("; ")
          .find((row) => row.startsWith("refreshToken"))
          ?.split("=")[1];

        // Send request to refresh token
        const response = await fetch(`${BASE_URL}/auth/refresh-token/`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ refresh: refreshTokenFromCookie }), // Send refresh token from cookie
        });

        if (response.ok) {
          const data = await response.json();
          setAuthToken(data.accessToken);
          setTUser(jwtDecode(data.accessToken));
          localStorage.setItem("authToken", data.accessToken);
        } else {
          logoutUser();
        }
      } catch (error) {
        console.error("Error refreshing token:", error);
        logoutUser();
      } finally {
        setLoading(false);
      }
    };

    checkTokenExpiration();
  }, [authToken]);

  if (loading) {
    return <Loading />;
  }

  return (
    <AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>
  );
};
