import { useParams } from "react-router-dom"
import Header from "./Componentes/Header";
import Card from "./Componentes/Card";
import Footer from "./Componentes/Footer";

export default function Detalhe(){
   const { id } = useParams();
   const video = JSON.parse(localStorage.getItem("Video"));
   console.log(video);

    const musica = video.filter((objeto) => {
         if(objeto.id == id){
            return objeto;
         }
         return null;
    })

    console.log(musica[0]);

    return(
      <div>
        <Header/>
        <Card musica={musica[0]} />
        <Footer/>
      </div>
    );
}
