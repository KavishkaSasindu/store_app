import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="w-screen bg-slate-50 py-1 md:py-2">
      <div className="w-[95%] mx-auto h-[50px] flex flex-col justify-center">
        <div className="flex justify-between items-center">
          <div>
            <button>
              <h1 className="text-lg md:text-2xl">CRUD</h1>
            </button>
          </div>
          <div>
            <input
              className="px-2 py-1 md:px-4 md:py-2 rounded-lg shadow-md lg:w-[500px] outline-none"
              type="text"
              name="search"
              id="search"
              placeholder="Search..."
            />
          </div>
          <div className="space-x-3">
            <button className="btn-1 bg-red-600">All Posts</button>
            <Link to="/">
              <button className="btn-1 bg-green-600">Create Post</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
