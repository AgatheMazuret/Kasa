import React from "react";
import "../Error/Error.scss";
import { Link } from "react-router-dom";

function Error() {
  return (
    <>
      <section>
        <h1>404</h1>
        <h2>Oups! La page que vous demandez n'existe pas.</h2>
        <Link to="/" className="accueil">
          Retourner sur la page d’accueil
        </Link>
      </section>
    </>
  );
}

export default Error;
