import React from 'react';

import { Link } from 'react-router-dom'

function Navbar(){
    return(
        <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
            <a class="navbar-brand" href="#">Produtos</a>
            <button class="navbar-toggler" 
                    type="button"
                    data-toggle="collapse" 
                    data-target="#navbarColor01" 
                    aria-controls="navbarColor01" 
                    aria-expanded="false" 
                    aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarColor01">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                        <Link class="nav-link" to="/">Home 
                            <span class="sr-only">(current)</span>
                        </Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" to="/cadastro-produtos">Cadastro</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" to="/consulta-produtos">Consulta</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;