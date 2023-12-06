import { Link } from "react-router-dom";

export default function Card({musica}){
    return(
        <div class="video-card-detalhe">
            <iframe 
                width="353"
                height="240"
                src= {'https://www.youtube.com/embed/' + musica.link.slice(17) }
                frameborder="0"></iframe>
            <Link to={`/detalhe/${musica.id}`}>
                <h5 class="card-title">{musica.titulo}</h5>
            </Link>
            <br />
            <h6 class="video-card-p">{musica.artista}</h6>
            <h6 class="video-card-p">{musica.vizualização}</h6>
            <h6 class="video-card-p">{musica.letra}</h6>
   
        </div>
           
    );
}