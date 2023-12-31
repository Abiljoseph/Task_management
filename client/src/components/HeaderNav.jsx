import React from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function HeaderNav() {
  const { currentUser } = useSelector((state) => state.user);
  const [searchTerm, setsearchTerm] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    const urlparams = new URLSearchParams(window.location.search);
    const searchTermFromUrl = urlparams.get("searchTerm");
    if (searchTermFromUrl) {
      setsearchTerm(searchTermFromUrl);
    }
  }, [window.location.search]);
  const handleSubmit = (e) => {
    e.preventDefault();
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set("searchTerm", searchTerm);
    const searchQuery = urlParams.toString();
    navigate(`/search?${searchQuery}`);
  };
  return (
    <header className="bg-slate-200 shadow-md sticky">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        <Link to={"/sign-in"}>
          <h1 className="fond-bold text-sm sm:text-xl flex flex-wrap">
            <span className="text-slate-500">Task</span>
            <span className="text-slate-700">Management</span>
          </h1>
        </Link>
        <form
          onSubmit={handleSubmit}
          className="bg-slate-100 p-3 rounded-lg flex items-center"
        >
          <input
            className="bg-transparent focus:outline-none w-24 sm:w-64"
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setsearchTerm(e.target.value)}
          />
          <button>
            <FaSearch className="text-slate-600" />
          </button>
        </form>
        <ul className="flex gap-4">
          <Link to={"/dashboard"}>
            <li className="hidden sm:inline text-slate-700 hover:underline">
              Home
            </li>
          </Link>
          <Link to={"/about"}>
            <li className="hidden sm:inline text-slate-700 hover:underline">
              About
            </li>
          </Link>
          <Link to={"/profile"}>
            {currentUser ? (
              <img
                className="rounded-full h-8 w-8 object-cover "
                src={currentUser.avatar}
                alt="Profile"
              />
            ) : (
              <li className="hidden sm:inline text-slate-700 hover:underline">
                Sign In
              </li>
            )}
          </Link>
        </ul>
      </div>
    </header>
  );
}
