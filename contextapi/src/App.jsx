import Auth from "./Auth"
import AuthContext from "./context/auth-context"
import { useState } from "react"

function App() {

  const [status, setStatus] = useState(false)

  const loginAuth = () => {
    setStatus(!status)

  }


  return (
    <>
     <AuthContext.Provider value = {{status: status, login:loginAuth}}>
        <Auth />
     </AuthContext.Provider>
    </>
  )
}

export default App
