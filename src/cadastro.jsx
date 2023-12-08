import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from './Componentes/Header'
import "./style.css";
import Footer from "./Componentes/Footer";

export default function Cadastro(){

    

    const videoLocalStorage = JSON.parse(localStorage.getItem("Video")) || [];
   const [link, setLink] = useState("")
   const [titulo, setTitulo] = useState("");
   const [artista, setArtista] = useState("");
   const [letra, setLetra] = useState("");
   const [vizualizacao, setVizualizacao] = useState("");
   const [video, setVideo] = useState(videoLocalStorage);
   const [id, setId] = useState(videoLocalStorage[videoLocalStorage.length - 1]?.id +1 || 1);


   useEffect(() => { localStorage.setItem("Video", JSON.stringify(video)) }, [video]);

   const navigate = useNavigate();

   const salvar = async(e) => {
        e.preventDefault();
        await setVideo([...video, {
            link: link,
            titulo: titulo,
            artista: artista,
            letra: letra,
            vizualizacao: vizualizacao,
            id: id
        }]);
        setId(id + 1);
        navigate("/");
        setLink("");
        setTitulo("");
        setArtista("");
        setLetra("");
        setVizualizacao("");
   };

    
    return(

        
        
        <div class="video">
            <Header/>
            <br />

            <form onSubmit={salvar} class="forms">

            <div class="card cadastro">
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
                        <input value={vizualizacao} type="text" onChange={(e)=>{ setVizualizacao(e.target.value)}} class="form-control" id="formGroupExampleInput5" placeholder="Vizualizações"/>
                    </div>
                    
                    <button class="btn btn-secondary">Cadastrar</button>
                </div>
            </div>

              
            </form>

            <Footer/>
        </div>
       
     );
}