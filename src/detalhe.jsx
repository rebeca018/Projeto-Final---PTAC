import { useParams } from "react-router-dom"
import { Link } from "react-router-dom";
import Header from './Componentes/Header'
import Footer from './Componentes/Footer'
import Card from './Componentes/Card'

export default function Detalhe() {
  const { id } = useParams();
  const lista = JSON.parse(localStorage.getItem("Video"));
  console.log(lista);

  const musica = lista.filter((objeto) => {
    if(objeto.id == id){
       return objeto;
    }
    return null;
  })

  console.log(muscia[0]);

  return (
    <div class="home">
        <Header/>

        <Card musica={musica[0]} />
      <h3 class="texto-home">Detalhe</h3>
      <Footer/>
    </div>
  );
}

//import { useParams } from "react-router-dom"
