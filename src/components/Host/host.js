import "../Host/Host.scss";
import Hosts from "../../data/logements.json"

const Host = () => {
    return (
<div>
      {data.map((item, index) => (
        <div key={index}>
          <h2>{item.titre}</h2>
          <p>{item.contenu}</p>
        </div>
      ))}
    </div>

        
    );

};
