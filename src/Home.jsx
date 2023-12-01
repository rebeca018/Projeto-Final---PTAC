import { Link } from "react-router-dom";
import Header from './Componentes/Header'
import Card from './Componentes/Card'
import Footer from './Componentes/Footer'
export default function Home() {
  const lista = JSON.parse(localStorage.getItem("Video")) || [];
  
  return (
    <div class="home">
        <Header/>

      <h3 class="texto-home">Home</h3>
      {lista.map((musica)=>
         <Card musica={musica}/>
      )}
     
      <Footer/>
    </div>
  );
}
