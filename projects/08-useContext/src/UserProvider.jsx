import { createContext, useContext, useState } from "react"

// Crea contextos
const userContext = createContext()
const changeUserContext = createContext()

// Hooks para usar los contextos en componentes hijos
export function useUserContext() {
  return useContext(userContext)
}
export function useChangeUserContext() {
  return useContext(changeUserContext)
}

// Provider
export function UserProvider({ children }) {
  const [user, setUser] = useState(null)

  const changeUser = () => {
    if (user) {
      setUser(null)
    } else {
      setUser({
        name: 'Teo'
      })
    }
  }

  return (
    <userContext.Provider value={user}>
      <changeUserContext.Provider value={changeUser}>
        { children }
      </changeUserContext.Provider>
    </userContext.Provider>
  )
}