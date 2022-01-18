import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './style.css';

function DropDown() {
  return (
    <div>
      <FontAwesomeIcon icon={faBars} />
      <div className="dropdown">
        <ul>
          <li>Home</li>
          <li>Contas</li>
          <li>Graficos Salvos</li>
          <li>Suporte</li>
        </ul>
      </div>
    </div>
      
  );
}

export default DropDown;
