import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from './Componentes/Header'
import "./style.css";

export default function Cadastro(){

    

    const videoLocalStorage = JSON.parse(localStorage.getItem("Video")) || [];
   const [link, setLink] = useState("")
   const [titulo, setTitulo] = useState("");
   const [artista, setArtista] = useState("");
   const [letra, setLetra] = useState("");
   const [vizualizacao, setVizualizacao] = useState("");
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
        setvizualizacao("");
   };

    
    return(

        
        
        <div class="video">
            <Header/>
            <br />

            <form onSubmit={salvar} class="forms">

            <div class="card" style={{width: "18rem;"}}>
                <div class="card-body">
                    <h5 class="card-title">Cadastre nova música</h5>
                    <div class="mb-3">
                        <input value={link} type="text" onChange={(e)=>{ setLink(e.target.value)}} class="form-control" id="formGroupExampleInput" placeholder="Link"/>
                    </div>
                    <div class="mb-3">
                        <input value={titulo} type="text" onChange={(e)=>{ setTitulo(e.target.value)}} class="form-control" id="formGroupExampleInput2" placeholder="Título"/>
                    </div>
                    <div class="mb-3">
                        <input value={artista} type="text" onChange={(e)=>{ setArtista(e.target.value)}} class="form-control" id="formGroupExampleInput3" placeholder="Artista"/>
                    </div>
                    <div class="mb-3">
                        <input value={letra} type="text" onChange={(e)=>{ setLetra(e.target.value)}} class="form-control" id="formGroupExampleInput4" placeholder="Letra"/>
                    </div>
                    <div class="mb-3">
                        <input value={vizualizacao} type="text" onChange={(e)=>{ setVizualizacao(e.target.value)}} class="form-control" id="formGroupExampleInput5" placeholder="VIzualizações"/>
                    </div>
                    
                    <a href="#" class="btn btn-secondary">Cadastrar</a>
                </div>
            </div>

              
            </form>

            {video.map((ativ)=>
            <ul key={ativ.id}>
                <div class="card" style={{width: "18rem;"}}>
                <p class="video-card-p">{ativ.link}</p>
                    <div class="card-body">
                <Link to={`/detalhe/${ativ.id}`}>
                        <p class="video-card-p">{ativ.titulo}</p>
                </Link>
                    <p class="video-card-p">{ativ.artista}</p>
                    <p class="video-card-p">{ativ.letra}</p>
                    <p class="video-card-p">{ativ.vizualizacao}</p>
                    </div>
                </div>
            </ul>)}
        </div> 
     );
}