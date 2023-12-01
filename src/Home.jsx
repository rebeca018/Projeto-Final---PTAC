import { Link } from "react-router-dom";
import Header from './Componentes/Header'
import Footer from './Componentes/Footer'
export default function Home() {
  return (
    <div class="home">
        <Header/>

      <h3 class="texto-home">Home</h3>
      <Footer/>
    </div>
  );
}
