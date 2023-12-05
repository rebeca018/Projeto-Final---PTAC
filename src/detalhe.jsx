import { Link } from "react-router-dom";
import Header from './Componentes/Header'
import Footer from './Componentes/Footer'
import Card from './Componentes/Card'
export default function Detalhe() {
  const lista = JSON.parse(localStorage.getItem("Video")) || [];

  return (
    <div class="home">
        <Header/>

        {lista.map((musica)=>
         <Card musica={musica}/>
        )}

      <h3 class="texto-home">Detalhe</h3>
      <Footer/>
    </div>
  );
}