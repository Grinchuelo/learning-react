import { UserProvider } from "./UserProvider"
import { Hijo } from "./components/Hijo"

export function App() {
  return (
    <UserProvider>
      <Hijo />
    </UserProvider>
  )
}