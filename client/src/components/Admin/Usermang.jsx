import React from "react";
import axios from "axios";
import { useEffect } from "react";
import NavAdmin from "./NavAdmin";
import { userUrl } from "../../constants/constant";
import { useState } from "react";

function Usermang() {
  const [users, Setusers] = useState([]);
  const [status, setStatus] = useState("");

  const [errors, SetError] = useState("");

  function handleunblock(userId) {
    axios.get(`${userUrl}/api/users/unblock/${userId}`).then(({ data }) => {
      if (data.users) {
        setStatus(data.users);
        
      } else {
        SetError(data.err);
      }
    });
  }
  function handleblock(userId) {
    axios.get(`${userUrl}/api/users/block/${userId}`).then(({ data }) => {
      if (data.users) {
        setStatus(data.users);
        
      } else {
        SetError(data.err);
      }
    });
  }

  useEffect(() => {
    axios.get(`${userUrl}/api/users/getusers`).then(({ data }) => {
      if (data.users) {
        Setusers(data.users);
      } else {
        SetError("something is wrong");
      }
    });
  }, [status]);

  return (
    <div>
      <NavAdmin />
      <div className="flex flex-col relative text-white h-screen bg-blue-800 justify-center items-center">
        <h1 className="text-3xl text-center mb-9 ">Users</h1>
        <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="py-3 px-6">
                  User name
                </th>
                <th scope="col" className="py-3 px-6">
                  Company
                </th>
                <th scope="col" className="py-3 px-6">
                  Email
                </th>
                <th scope="col" className="py-3 px-6">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {users &&
                users.map((user, index) => {
                  console.log(user, "fasdjhhjfshkjlfslhkf");
                  return (
                    <tr
                      key={user._id}
                      className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                    >
                      <td className="py-4 px-6">{user.name}</td>
                      <td className="py-4 px-6">{user.company}</td>
                      <td className="py-4 px-6">{user.email}</td>

                      {user.isBlocked ? (
                        <td className="py-4 px-6 text-right">
                          <button
                            onClick={() => {
                              handleunblock(user._id);
                            }}
                            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                          >
                            unBlock
                          </button>
                        </td>
                      ) : (
                        <td className="py-4 px-6 text-right">
                          <button
                            onClick={() => {
                                handleblock(user._id);
                              }}
                            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                          >
                            Block
                          </button>
                        </td>
                      )}
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Usermang;
