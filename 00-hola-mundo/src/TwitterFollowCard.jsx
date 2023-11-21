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
                </div>
            </header>

            <aside>
                <button className='tw-followCard-button'>
                    Seguir
                </button>
            </aside>
        </article>
    )
}