import './about.css'
import Navbar from '../components/Navbar'

export default function About() {
  return (
      <>
      <div className="about">
      <Navbar />
        <h1>Sobre o projeto</h1>
       <p>PokeNext é um App construído em React para consultar Pokémons.
       </p>
       <img src="/assets/charizard.png" />
     </div>
     </>
  )
}