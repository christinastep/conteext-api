// javais commence comme ca mais le truc de pierre etait completement different


// import React from 'react';
// import './App.css';

// import AuthContext from './context/AuthContext';
// import Box from './componets/Box';

// function App() {
//   return (
//     <div className="App">
//      <AuthContext.Provider value="{ isAuth:false}">
//       <Box />
//     </AuthContext.Provider>
//     </div>
//   );
// }

// export default App;

import React, { useContext } from 'react'

const CurrentRoute = React.createContext({ path: '/welcome' })
const CurrentUser = React.createContext(undefined)
const IsAuth = React.createContext(false)

export default () =>
{
  let currentRoute = useContext(CurrentRoute)
  let currentUser = useContext(CurrentUser)
  let isAuth = useContext(IsAuth)

  return (
    // !isAuth &&
    // currentRoute.path === '/welcome' &&
    // (currentUser
    //   ? `Welcome back, ${currentUser.name}!`
    //   : 'Welcome!'
    // )
    <div>
      
      <p>{isAuth ? 'true' : 'false'}</p>
      <button onClick={!isAuth}>
        {isAuth ? 'ON' : 'OFF'}
      </button>
    </div>
  )
}
