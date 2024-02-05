import {useState, useEffect} from "react";

import {Newspaper, Menu} from "lucide-react";
import {getTopics} from "../../utils/APICalls";

export default function Navbar() {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    const fetchTopics = async () => {
      const data = await getTopics();
      setTopics(data);
    };
    fetchTopics();
  });

  return (
    <>
      <div className="navbar bg-base-300 h-16">
        <div className="navbar-start">
          <a href="#" className="btn btn-ghost text-xl">
            <Newspaper /> NC News
          </a>
        </div>
        <div className="navbar-center hidden md:flex">
          <ul className="menu menu-horizontal">
            <li className="mx-1">
              <a href="#">Home</a>
            </li>
            <li className="mx-1">
              <a href="#">About</a>
            </li>
            <li>
              <details>
                <summary>Topics</summary>
                <ul className="p-2 bg-base-300 rounded-t-none">
                  {topics.map((topic, i) => (
                    <li key={i}>
                      <a href="#">{`${topic[0].toUpperCase()}${topic.slice(1)}`}</a>
                    </li>
                  ))}
                </ul>
              </details>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <div className="dropdown dropdown-end md:hidden">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
              <Menu />
            </div>
            <ul
              tabIndex={0}
              className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-300 rounded-box w-32">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <details>
                  <summary>Topics</summary>
                  <ul className="p-2 bg-base-300 rounded-t-none">
                    {topics.map((topic, i) => (
                      <li key={i}>
                        <a href="#">{`${topic[0].toUpperCase()}${topic.slice(1)}`}</a>
                      </li>
                    ))}
                  </ul>
                </details>
              </li>
            </ul>
          </div>
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img alt="profile photo" src="" />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-300 rounded-box w-32">
              <li>
                <a>Profile</a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
