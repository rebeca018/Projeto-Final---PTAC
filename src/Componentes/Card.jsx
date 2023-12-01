export default function Card({musica}){
    return(
        <div class="card" style="width: 18rem;">
            <h1>Card</h1>
             <div class="card-body">
                <h5 class="card-title">{musica.titulo}</h5>
                <p class="card-text">{musica.letra}</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    );
}