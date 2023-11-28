import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";

export default function Cadastro(){

    const videoLocalStorage = JSON.parse(localStorage.getItem("Video")) || [];
   const [link, setLink] = useState("")
   const [titulo, setTitulo] = useState("");
   const [artista, setArtista] = useState("");
   const [letra, setLetra] = useState("");
   const [vizualizacao, setVizualizacao] = useState(0);
   const [video, setVideo] = useState(videoLocalStorage);
   const [id, setId] = useState(videoLocalStorage[videoLocalStorage.length - 1]?.id +1 || 1);
   //pegando o tamanho da lista menos 1 para pegar o id e somando 1 para arrumar o id

   useEffect(() => { localStorage.setItem("Video", JSON.stringify(video)) }, [video]);


   const salvar = (e) => {
        e.preventDefault();
        setVideo([...video, {
            link: link,
            titulo: titulo,
            artista: artista,
            letra: letra,
            vizualizacao: vizualizacao,
            id: id
        }]);
        setId(id + 1);
        setLink("");
        setTitulo("");
        setArtista("");
        setLetra("");
        setvizualizacao(0);
   };

    
    return(
        
        <div class="video">
            
            <h1 class="texto-home">Cadastre nova música</h1>
            <p class="texto-home">Voltar para <Link to="/">home</Link></p>
            

            <form onSubmit={salvar}>

                <p class="texto-home">Link</p>
                <input value={Link} type="text"
                onChange={(e)=>{ setLink(e.target.value)}} />
                
                <p class="texto-home">Título</p>
                <input value={titulo} type="text"
                onChange={(e)=>{ setTitulo(e.target.value)}} />

                <p class="texto-home">Artista</p>
                <input value={artista} type="text"
                onChange={(e)=>{ setArtista(e.target.value)}} />

                <p class="texto-home">Letra</p>
                <input value={letra} type="text"
                onChange={(e)=>{ setLetra(e.target.value)}} />

                <p class="texto-home">Vizualizacao</p>
                <input value={vizualizacao} type="number"
                onChange={(e)=>{ setVizualizacao(e.target.value)}} />
                <br/>
                <button class="btn btn-secondary botao">ADD</button>

              
            </form>

            {video.map((ativ)=>
            <ul key={ativ.id}>
                <div class="video-card">
                <p class="video-card-p">{ativ.link}</p>
               <Link to={`/detalhe/${ativ.id}`}>
                    <p class="video-card-p">{ativ.titulo}</p>
               </Link>
                <p class="video-card-p">{ativ.artista}</p>
                <p class="video-card-p">{ativ.letra}</p>
                <p class="video-card-p">{ativ.vizualizacao}</p>
                </div>
            </ul>)}
           
        </div>
       
     );
}