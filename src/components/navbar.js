import React from 'react';
import { Link } from 'react-router-dom';


const Navbar =(props) => {
    return(
        <nav class="navbar navbar-expand-lg navbar-dark" style={{"backgroundColor":" #5a8cbd"}}>
  <Link class="navbar-brand" href="/" style={{"fontSize":"4vh","marginLeft":"3%"}}>AR image</Link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav ml-auto" style={{"marginRight":"5%"}}>
      {props.head == "file"?<Link class="nav-item nav-link active" style={{"fontSize":"23px"}} to="/">UPLOAD</Link>:<Link class="nav-item nav-link" style={{"fontSize":"23px"}} to="/">UPLOAD</Link>}
      {props.head == "store"?<Link class="nav-item nav-link active" style={{"fontSize":"23px"}} to="/store">STORE</Link>:<Link class="nav-item nav-link" style={{"fontSize":"23px"}} to="/store">STORE</Link>}
      {props.head == "my"?<Link class="nav-item nav-link active" style={{"fontSize":"23px"}} to="/my">MY CREATIONS</Link>:<Link class="nav-item nav-link" style={{"fontSize":"23px"}} to="/my">MY CREATIONS</Link>}
    </div>
  </div>
</nav>
    )
}


export default Navbar;
