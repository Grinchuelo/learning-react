import { useState } from 'react'

import './index.css'
import './TwFollowCard.css'

function TwitterFollowCard({ children, formatUsername, username = 'unknown', initialIsFollowing}) {
    const [isFollowing, setIsFollowing] = useState(initialIsFollowing)

    const text = isFollowing ? 'Siguiendo' : 'Seguir'
    const buttonClassName = isFollowing
        ? 'tw-followCard-followBtn is-following'
        : 'tw-followCard-followBtn'

    const toggleFollow = () => {
        setIsFollowing(!isFollowing)
    }

    return (
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img 
                className='tw-followCard-avatar'
                src={`https://unavatar.io/${username}`}
                alt="Avatar"/>
                <div className='tw-followCard-data'>
                    <strong className='tw-followCard-name'>{children}</strong>
                    <span className='tw-followCard-username'>{formatUsername(username)}</span>
                </div>
            </header>
        
            <aside className='tw-followCard-aside'>
                <button className={buttonClassName} onClick={toggleFollow}>
                    <span className='tw-followCard-followText'>{text}</span>
                    <span className='tw-followCard-unfollow'>Dejar de seguir</span>
                </button>    
            </aside>
        </article>
    )
}

export default TwitterFollowCard