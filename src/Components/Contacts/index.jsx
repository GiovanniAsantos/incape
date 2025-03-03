import { InstagramOutlined, WhatsAppOutlined } from "@ant-design/icons";
import "./style.css";
import PropTypes from "prop-types";
import phoneIcon from "../../assets/phoneIcon.png"

const Contacts = ({ contactsRef }) => {
  return (
    <div className="contactContainer">
      <div className="titleContainer">
        <h1 className="contactTitle">Contatos</h1>
        <img src={phoneIcon} alt="" className="contactIcon"/>{" "}
      </div>
      <div className="formContainer">
        <p>Entre em contato com o nosso E-mail abaixo:</p>
        <input
          className="contactInput"
          type="text"
          placeholder="Digite seu E-mail"
        />
        <input
          className="contactInput"
          type="text"
          placeholder="Digite seu Nome"
        />
        <input
          className="contactInput"
          type="text"
          placeholder="Digite sua mensagem"
        />
        <button className="contactCTA">Clique Aqui</button>
      </div>
      <div className="contactButtonsContainer">
        <p>Encontre-nos também pelo nosso:</p>
        <button className="contactButton">
          <WhatsAppOutlined className="iconContactButton" />
        </button>
        <button className="contactButton">
          <InstagramOutlined className="iconContactButton" />
        </button>
      </div>
    </div>
  );
};

Contacts.propTypes = {
  contactsRef: PropTypes.object.isRequired,
};

export default Contacts;
