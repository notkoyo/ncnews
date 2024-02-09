import { Link } from "react-router-dom";
import { MoveLeft } from 'lucide-react';

export default function TopicNav({topic}) {
  const avatar = localStorage.getItem("avatar");
  const auth = localStorage.getItem("auth");

  return (
    <div className="navbar bg-base-100">
        <div className="navbar-start">
          <Link to="/">
            <div className="flex mx-2 motion-safe:animate-bounce">
              <MoveLeft />
              <h6 className="ml-4">
                Return Home
              </h6>
            </div>
          </Link>
        </div>
        <div className="navbar-center">
          <h2 className="text-2xl font-bold">{topic} Articles</h2>
        </div>
        <div className="navbar-end">
          <div className="dropdown dropdown-end">
            <div
              className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full bg-base-200">
                {auth ? <img
                  alt="profile photo"
                  src={avatar}
                /> : null}
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}