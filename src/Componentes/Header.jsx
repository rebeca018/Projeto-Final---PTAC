import { Link } from "react-router-dom";
export default function Header() {
  return (
    <div class="home">
      <nav class="navbar navbar-expand-lg bg-body-tertiary, color">
        <div class="container-fluid">
          <a class="navbar-brand" href="#"> Mes chansons préférées </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link active, color_b" aria-current="page" href="#" > <Link to="/">Home</Link> </a>
              </li>

              <li class="nav-item">
                <a class="nav-link active, color_b" aria-current="page" href="#" >  Em destaque </a>
              </li>

              <Link to="/cadastro">
                <li class="nav-item"> <a class="nav-link active, color_b" aria-current="page" href="#"> <Link to="/cadastro">Adiocionar nova música</Link> </a> </li>
              </Link>
            </ul>
          </div>
        </div>
      </nav>

    </div>
  );
}
