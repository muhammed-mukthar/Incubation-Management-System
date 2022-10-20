import React,{ createContext, useState} from 'react'

export const ApplicationContext= createContext(null)

function Applications({children}) {
    const [applications, setApplications] = useState('')
  return (
    <ApplicationContext.Provider value={{applications, setApplications}}>
        {children}
    </ApplicationContext.Provider>
  )
}

export default Applications