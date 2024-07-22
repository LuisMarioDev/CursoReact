import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App () {
<<<<<<< HEAD
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
=======

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
>>>>>>> bbfcff35c4cc2118091b86f6093acf421e546420

        </section>
    )
}