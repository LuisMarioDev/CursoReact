import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App () {
    return (
        <section className='App'>
            
        <TwitterFollowCard 
        isFollowing userName='LuisNavarro'>
            Luis Navarro
            </TwitterFollowCard>

        <TwitterFollowCard 
         userName='elonmusk'  >
            Elon Musk
            </TwitterFollowCard>

        </section>
    )
}