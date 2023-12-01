export default function Card({musica}){
    return(
        <div class="card">
            
            <h5 class="card-title">{musica.titulo}</h5>
            <h6 class="card-subtitle mb-2 text-body-secondary">{musica.letra}</h6>
   
        </div>
           
    );
}