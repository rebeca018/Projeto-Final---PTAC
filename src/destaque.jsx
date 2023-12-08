import { Link } from "react-router-dom";
import Header from './Componentes/Header'
import Footer from './Componentes/Footer'
import Card from './Componentes/Card'
export default function Destaque() {
  const lista = JSON.parse(localStorage.getItem("Video")) || [];

  return (
    <div>
        <Header/>
        
        <h3 class="texto-home">Músicas em destaque</h3>
        {lista.slice(-4).map((musica)=>
         <Card musica={musica}/>
        )}
     
      <Footer/>
    </div>
  );
}