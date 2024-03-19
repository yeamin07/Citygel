import { createContext, useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import Loading from "components/Loading/Loading";
import { useNavigate } from "react-router-dom";
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

  //   let loginUser = async (e) => {
  //     e.preventDefault();
  //     let response = await fetch("http://127.0.0.1:8000/api/token/", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         username: e.target.username.value,
  //         password: e.target.password.value,
  //       }),
  //     });
  //     let data = await response.json();

  //     if (response.status === 200) {
  //       setAuthTokens(data);
  //       setUser(jwt_decode(data.access));
  //       localStorage.setItem("authTokens", JSON.stringify(data));
  //       history.push("/");
  //     } else {
  //       alert("Something went wrong!");
  //     }
  //   };

  let logoutUser = () => {
    setAuthToken(null);
    setTUser(null);
    localStorage.removeItem(authToken);
    navigate("/login");
  };

  // let updateToken = async ()=> {

  //     let response = await fetch('http://127.0.0.1:8000/api/token/refresh/', {
  //         method:'POST',
  //         headers:{
  //             'Content-Type':'application/json'
  //         },
  //         body:JSON.stringify({'refresh':authTokens?.refresh})
  //     })

  //     let data = await response.json()

  //     if (response.status === 200){
  //         setAuthTokens(data)
  //         setUser(jwt_decode(data.access))
  //         localStorage.setItem('authTokens', JSON.stringify(data))
  //     }else{
  //         logoutUser()
  //     }

  //     if(loading){
  //         setLoading(false)
  //     }
  // }

  let contextData = {
    tuser: tuser,
    authToken: authToken,
    setAuthToken: setAuthToken,
    setTUser: setTUser,

    logoutUser: logoutUser,
  };
  console.log(tuser, authToken);
  useEffect(() => {
    if (authToken) {
      setTUser(jwtDecode(authToken));
    }
    setLoading(false);
  }, [authToken, loading]);
  //   if (loading) {
  //     return <Loading />;
  //   }
  return (
    <AuthContext.Provider value={contextData}>
      {loading ? <Loading /> : children}
    </AuthContext.Provider>
  );
};
