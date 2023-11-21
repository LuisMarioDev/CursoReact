import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App () {

    return (
        <section className='App'>
        <TwitterFollowCard 
        isFollowing={true} 
        userName='LuisNavarro' 
        name='Luis Mario Navarro' 
        />

        <TwitterFollowCard 
        isFollowing={false} 
        userName='elonmusk' 
        name='Pancho Barraza' 
        />

        </section>
    )
}