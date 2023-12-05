export default function Card({musica}){
    return(
        <div class="video-card">
            <iframe 
                width="353"
                height="240"
                src= {'https://www.youtube.com/embed/' + musica.link.slice(17) }
                frameborder="0"></iframe>
            <h5 class="card-title">{musica.titulo}</h5>
            <h6 class="video-card-p">{musica.letra}</h6>
   
        </div>
           
    );
}