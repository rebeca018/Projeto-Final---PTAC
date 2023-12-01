import { Link } from "react-router-dom";
import Header from './Componentes/Header'
import Footer from './Componentes/Footer'
export default function Destaque() {
  return (
    <div class="home">
        <Header/>

        {lista.slice(-4).map((musica)=>
         <Card musica={musica}/>
      )}
     

      <h3 class="texto-home">Destaque</h3>
      <Footer/>
    </div>
  );
}