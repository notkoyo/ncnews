import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getUsers } from "../utils/AuthUser";


export default function LoginPage() {
  const nav = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [username, setUsername] = useState("");
  const [auth, setAuth] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    setIsLoading(true);
    getUsers().then((data) => {
      const account = data.find((user) => user.username === username);
      if (account) {
        setAuth(true);
        localStorage.setItem("auth", true);
        localStorage.setItem("user", username);
        localStorage.setItem("avatar", account.avatar_url);
        setIsLoading(false);
        nav("/");
      } else {
        setIsLoading(false);
        setAuth(false);
      }
    })
  }

  return (
    <>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col">
          <div className="m-20">
            <h1 className="font-bold text-6xl">NC News</h1>
          </div>
          <div className="card shrink-0 w-full lg:w-screen max-w-lg shadow-2xl bg-base-100">
            <form className="card-body">
              <div className="form-control">
                <input
                  type="text"
                  placeholder="username"
                  className={`input ${auth ? "input-success" : "input-error"}`}
                  required
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-accent" onClick={handleClick}>{isLoading ? <span className="loading loading-dots loading-md"></span> : "Login"}</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
