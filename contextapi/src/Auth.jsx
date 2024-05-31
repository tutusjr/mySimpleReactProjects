import { useContext } from "react";
import AuthContext from "./context/auth-context";


export default function Auth() {

    const {status, login} = useContext(AuthContext)
  return (
    <div>
      <h1>giris yaptin mi ?</h1>
      {
        status ? <p>evet</p> : <p>hayir</p>
      }
      <button onClick={login}>giris yap</button>
    </div>
  )
}
