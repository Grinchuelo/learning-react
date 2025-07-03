import { useUserContext, useChangeUserContext } from "../UserProvider"

export function Hijo() {
  const user = useUserContext()
  const changeUser = useChangeUserContext()
  
  return (
    <>
      <h1>Hola{ user && ', ' + user.name}</h1>
      <button onClick={changeUser}>Personalizar</button>
    </>
  )
}