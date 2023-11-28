import { useParams } from "react-router-dom"
import Card from "./Componentes/Card";

export default function Detalhe(){
   const { id } = useParams();
   const video = JSON.parse(localStorage.getItem("Video"));
   console.log(lista);

    const musica = lista.filter((objeto) => {
         if(objeto.id == id){
            return objeto;
         }
         return null;
    })

    console.log(musica[0]);

    return(
        <Card livro={musica[0]} />
    )
}