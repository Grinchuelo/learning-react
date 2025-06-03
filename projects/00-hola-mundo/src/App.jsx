import { useState } from 'react'
import TwitterFollowCard from './TwitterFollowCard.jsx'
import './index.css'

const users = [
  {
    username: 'Grinchuelo',
    name: 'Grin',
    isFollowing: false
  },
  {
    username: 'pheralb',
    name: 'Pedrito',
    isFollowing: true
  },
  {
    username: 'Estebanquito',
    name: 'Rulos',
    isFollowing: false
  },

]

const formatUsername = (username) => `@${username}`
function App() {
  return (
    <div className="app">
      {
        users.map(({ username, name, isFollowing }) => (
          <TwitterFollowCard 
            key={username}
            formatUsername={formatUsername} 
            username={username} 
            initialIsFollowing={isFollowing}
          >
            {name}
          </TwitterFollowCard>
        ))
      }
      
    </div>
  )
}

export default App
