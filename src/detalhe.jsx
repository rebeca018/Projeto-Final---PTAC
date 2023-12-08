import { useParams } from "react-router-dom"
import Header from './Componentes/Header'
import Footer from './Componentes/Footer'
import CardDetalhe from './Componentes/CardDetalhe'

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

  console.log(musica[0]);

  return (
    <div>
        <Header/>

      <div class="centro">
          <CardDetalhe musica={musica[0]} />
        <h3 class="texto-home">Detalhe</h3>
      </div>
      <Footer/>
    </div>
  );
}

//import { useParams } from "react-router-dom"
