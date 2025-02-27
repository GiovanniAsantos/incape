import "./style.css";
import PropTypes from "prop-types";

const Contacts = ({ contactsRef }) => {
  return (
    <>
      <div className="contactContainer">
        <h1 className="contactTitle">Contatos</h1>
        <div className="formContainer">
          <p>Entre em contato com o nosso E-mail abaixo:</p>
          <input className="contactInput" type="text" placeholder="Digite seu E-mail" />
          <input className="contactInput" type="text" placeholder="Digite seu Nome" />
          <input className="contactInput" type="text" placeholder="Digite sua mensagem" />
          <button className="contactCTA">Clique Aqui</button>
        </div>
        <div>
          <p>Encontre-nos também pelo nosso:</p>
          <button>WhatsApp</button>
          <button>Instagram</button>
          <button>Facebook</button>
        </div>
      </div>
    </>
  );
};
Contacts.propTypes = {
  contactsRef: PropTypes.object.isRequired,
};
export default Contacts;
