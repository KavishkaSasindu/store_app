import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchData } from "../features/userDetailsSlice";

const Create = () => {
  const dispatch = useDispatch();
  const [getUser, setUser] = useState({
    name: "",
    email: "",
    contact: "",
    age: "",
    gender: "",
  });

  const getUserData = (e) => {
    setUser({ ...getUser, [e.target.name]: [e.target.value] });
  };

  const submitData = (e) => {
    e.preventDefault();
    console.log(getUser);
    dispatch(fetchData(getUser));
  };

  return (
    <div className="w-screen">
      <div>
        <div>
          <h1>Create User</h1>
        </div>
        <div className="w-[80%] mx-auto shadow-lg p-5 bg-transparent rounded-lg">
          <form onSubmit={submitData}>
            <div className="relative z-0  mb-6 group">
              <input
                type="id"
                name="floating_id"
                id="floating_id"
                className="block py-2.5 px-0 w-full text-sm  border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                disabled
              />
              <label
                htmlFor="floating_id"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                User ID
              </label>
            </div>
            <div className="relative z-0 w-full mb-6 group">
              <input
                type="text"
                name="name"
                id="name"
                className="block py-2.5 px-0 w-full text-sm  bg-transparent border-0 border-b-2 border-gray-300 appearance-none   focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
                onChange={getUserData}
              />
              <label
                htmlFor="name"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                User Name
              </label>
            </div>
            <div className="relative z-0 w-full mb-6 group">
              <input
                type="text"
                name="email"
                id="email"
                className="block py-2.5 px-0 w-full text-sm t bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
                onChange={getUserData}
              />
              <label
                htmlFor="email"
                className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                User Email
              </label>
            </div>
            <div className="grid md:grid-cols-2 md:gap-6">
              <div className="relative z-0 w-full mb-6 group">
                <input
                  type="text"
                  name="age"
                  id="age"
                  className="block py-2.5 px-0 w-full text-sm  bg-transparent border-0 border-b-2 border-gray-300 appearance-none   focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                  onChange={getUserData}
                />
                <label
                  htmlFor="age"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  User Age
                </label>
              </div>
              <div className="relative z-0 w-full mb-6 group">
                <input
                  type="text"
                  name="contact"
                  id="contact"
                  className="block py-2.5 px-0 w-full text-sm  bg-transparent border-0 border-b-2 border-gray-300 appearance-none   focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                  onChange={getUserData}
                />
                <label
                  htmlFor="contact"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  User Contact
                </label>
              </div>
            </div>
            <div>
              <div className="flex items-center mb-4">
                <input
                  id="default-radio-1"
                  type="radio"
                  value=""
                  name="gender"
                  onChange={getUserData}
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500  focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label htmlFor="gender" className="ml-2 text-sm font-medium  ">
                  Male
                </label>
              </div>
              <div className="flex items-center">
                <input
                  id="gender"
                  type="radio"
                  value=""
                  name="gender"
                  onChange={getUserData}
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label htmlFor="gender" className="ml-2 text-sm font-medium  ">
                  Female
                </label>
              </div>
            </div>

            <button type="button" className="btn-1 bg-slate-700 mt-5">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Create;
