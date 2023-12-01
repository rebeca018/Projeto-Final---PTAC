export default function Card({musica}){
    return(
        <div class="card">
            <iframe 
                width="853"
                height="480"
                src='https://www.youtube.com/embed/' 
                frameborder="0"></iframe>
            <h5 class="card-title">{musica.titulo}</h5>
            <h6 class="card-subtitle mb-2 text-body-secondary">{musica.letra}</h6>
   
        </div>
           
    );
}