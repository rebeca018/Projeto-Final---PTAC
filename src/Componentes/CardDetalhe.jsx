import { Link } from "react-router-dom";

export default function Card({musica}){
    return(
        <div class="video-card-detalhe">
            <div class="card-a">
                <iframe 
                    width="353"
                    height="240"
                    src= {'https://www.youtube.com/embed/' + musica.link.slice(17) }
                    frameborder="0"></iframe>
            </div>

            <div class="card-b">
                <Link to={`/detalhe/${musica.id}`}>
                    <h5 class="card-title underline">{musica.titulo}</h5>
                </Link>
                <br />
                <h6 class="video-card-p-detlahe">{musica.artista}</h6>
                <h6 class="video-card-p-detalhe">{musica.vizualizacao}</h6>
                <h6 class="video-card-p-detalhe">{musica.letra}</h6>
            </div>
   
        </div>
           
    );
}