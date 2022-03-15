import { useRef, useState, useEffect, useContext } from "react";
import AuthContext from "../context/AuthProvider";

import axios from "../api/axios";
const LOGIN_URL = "/login";

const Login = () => {
  const { setAuth } = useContext(AuthContext);
  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [user, pwd]);

  const handleLogout = () => {
    localStorage.clear();
    window.location.pathname = "/";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        LOGIN_URL,
        JSON.stringify({ email: user, password: pwd }),
        {
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Credentials": true,
          },
          withCredentials: true,
        }
      );
      // console.log(JSON.stringify(response?.data));

      const accessToken = response?.data?.accessToken;
      // const roles = response?.data?.roles;
      setAuth({ user, pwd, accessToken });
      setUser("");
      setPwd("");
      setSuccess(true);
    } catch (err) {
      if (!err.response) {
        setErrMsg("Keine Verbindung zum Server");
      } else if (err.response?.status === 400) {
        setErrMsg("Benutzername oder Passwort falsch");
      } else if (err.response?.status === 401) {
        setErrMsg("Nicht angemeldet");
      } else {
        setErrMsg("Anmeldung fehlgeschlagen");
      }
      errRef.current.focus();
    }
  };

  return (
    <>
      {success ? (
        <section>
          <h1>Du bist angemeldet</h1>
          <button onClick={handleLogout}>Abmelden</button>
        </section>
      ) : (
        <section>
          <p
            ref={errRef}
            className={errMsg ? "errmsg" : "offscreen"}
            aria-live="assertive"
          >
            {errMsg}
          </p>
          <h1>Login</h1>
          <form onSubmit={handleSubmit}>
            <label htmlFor="email">Benutzername:</label>
            <input
              ref={userRef}
              type="email"
              id="email"
              autoComplete="off"
              onChange={(e) => setUser(e.target.value)}
              value={user}
              required
            />
            <label htmlFor="password">Passwort:</label>
            <input
              type="password"
              id="password"
              onChange={(e) => setPwd(e.target.value)}
              value={pwd}
              required
            />
            <button>Anmelden</button>
          </form>
        </section>
      )}
    </>
  );
};

export default Login;
