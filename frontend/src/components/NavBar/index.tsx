import "./style.css";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle} from "@fortawesome/free-solid-svg-icons";

function NavBar() {
  return (
    <div className="container-header">
      <nav className="navbar">
        <i className="iconMenu">
          <FontAwesomeIcon icon={faBars} />
        </i>
        <div className="title-software">
            <h1>Controle Contas</h1>
        </div>
        <div>
            <i className="userCircle">
                <FontAwesomeIcon icon={faUserCircle} />
            </i>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
