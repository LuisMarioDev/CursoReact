<<<<<<< HEAD
/* eslint-disable react/prop-types */
import { useState } from "react"

export function TwitterFollowCard ({children, userName}) {
    const [isFollowing, setIsFollowing] = useState(false)

    const text = isFollowing ? 'Siguiendo' : 'Seguir'
    const buttonClassName = isFollowing 
    ? 'tw-followCard-button is-following' 
    : 'tw-followCard-button'

    const handleClick = () => {
        setIsFollowing(!isFollowing)
    }
    
    return (
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img 
                src = {`https://unavatar.io/${userName}`}
                alt ="Avatar de Luis Navarro" 
                className='tw-followCard-avatar' />

                <div className="tw-followCard-info">
                    <strong>{children}</strong>
                    <span className="tw-followCard-infoUserName">@{userName}</span>
=======
export function TwitterFollowCard (userName, name, isFollowing) {
    

    const ImageSrc = `https://unavatar.io/${userName}`

    return (
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img src = {ImageSrc}
                    alt ="Avatar de Luis Navarro"
                    className='tw-followCard-avatar' />
                <div className='tw-followCard-info'>
                    <strong>{name}</strong>
                    <span className='tw-followCard-infoUserName'>@{userName}</span>
>>>>>>> bbfcff35c4cc2118091b86f6093acf421e546420
                </div>
            </header>

            <aside>
<<<<<<< HEAD
                <button className= {buttonClassName} onClick={handleClick}>
                    {text}
=======
                <button className='tw-followCard-button'>
                    Seguir
>>>>>>> bbfcff35c4cc2118091b86f6093acf421e546420
                </button>
            </aside>
        </article>
    )
}