import React from "react";
import "../Host/Host.scss";


function Host({ host }) {

  return (
    <div>
      <h2>{host.name}</h2>
      <img src={host.picture} alt={host.name} />
    </div>
  );
}

export default Host;
