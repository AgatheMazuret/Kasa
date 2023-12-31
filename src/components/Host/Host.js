import React from "react";
import "../Host/Host.scss";

function Host({ host }) {
  return (
    <div className="hostNamePicture">
      <div className="hostName">
        <p>{host.name}</p>
      </div>
      <div className="hostPicture">
        <img src={host.picture} alt={host.name} />
      </div>
    </div>
  );
}

export default Host;
