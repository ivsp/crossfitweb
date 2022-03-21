import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { ThemingContext } from "../../shared/theming/theming.context";
import { useContext } from "react";

function LanguageButton({ onchangeLanguage, language }) {
  const [theming] = useContext(ThemingContext);

  return (
    <DropdownButton
      variant={`${theming.primary.color}`} //aqui pondré la paleta de colores del theming
      as={ButtonGroup}
      title={language === "" ? `ES` : `${language}`}
      id="bg-vertical-dropdown-3"
    >
      <Dropdown.Item onClick={onchangeLanguage} variant="" eventKey="1" id="EN">
        EN
      </Dropdown.Item>
      <Dropdown.Item
        bg="primary-500"
        onClick={onchangeLanguage}
        variant=""
        eventKey="2"
        id="ES"
      >
        ES
      </Dropdown.Item>
    </DropdownButton>
  );
}

export default LanguageButton;
