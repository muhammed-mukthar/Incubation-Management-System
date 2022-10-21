import {createContext , useState} from 'react'


export const UserContext= createContext(null)

function User({children})
{
    const user = JSON.parse(localStorage.getItem('user'));
  
    const [userDetails, setUserDetails]=useState(user)
    
   

    return(
        <UserContext.Provider value={{userDetails, setUserDetails}}>
            {children}
        </UserContext.Provider>
    )
}

export default User;