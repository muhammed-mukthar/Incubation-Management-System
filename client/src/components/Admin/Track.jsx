import React from 'react'

function Track() {
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
                  
                    
                        <tr
                     
                          className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                        >
                          <td className="py-4 px-6">user.name</td>
                          <td className="py-4 px-6">user.company</td>
                          <td className="py-4 px-6">user.email</td>
    
                         
                            <td className="py-4 px-6 text-right">
                              <button
                          className=  "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                              >
                                unBlock
                              </button>
                            </td>
                            </tr>
                        
                </tbody>
              </table>
            </div>
          </div>
        </div>
    )
    }
export default Track