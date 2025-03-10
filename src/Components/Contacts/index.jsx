import { InstagramOutlined, WhatsAppOutlined } from "@ant-design/icons";
import "./style.css";
import PropTypes from "prop-types";
import phoneIcon from "../../assets/phoneIcon.png";
import { useState } from "react";

const Contacts = ({ contactsRef }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleEmailClick = () => {
    const isMobile = /Mobi|Android/i.test(navigator.userAgent);
    const emailAddress = "contato@incape.org";
    const subject = "Contato via Site Incape";
    const body = `
    Nome: ${name}
    Telefone: ${phone}
    Email: ${email}
    Mensagem: ${message}
  `;

    let url;

    if (isMobile) {
      url = `mailto:${emailAddress}?subject=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(body)}`;
    } else {
      url = `https://mail.google.com/mail/?view=cm&fs=1&to=${emailAddress}&su=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(body)}`;
    }

    window.open(url, "_blank");
  };

  const handleWhatsAppClick = () => {
    const phoneNumber = "558599036278"; // Seu número de WhatsApp com código do país e DDD
    const message = encodeURIComponent("Olá, gostaria de mais informações!");
    const url = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(url, "_blank");
  };

  const handleInstagramClick = () => {
    const instagramUrl = "https://www.instagram.com/_incape"; // Substitua pelo seu usuário do Instagram
    window.open(instagramUrl, "_blank");
  };

  return (
    <div className="contactContainer">
      <div className="titleContainer">
        <h1 className="contactTitle">Contatos</h1>
        <img src={phoneIcon} alt="" className="contactIcon" />{" "}
      </div>
      <div className="formContainer">
        <p>Entre em contato com o nosso E-mail abaixo:</p>
        <input
          className="contactInput"
          type="text"
          placeholder="Digite seu E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="contactInput"
          type="text"
          placeholder="Digite seu Nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="contactInput"
          type="text"
          placeholder="Digite sua mensagem"
          onChange={(e) => setMessage(e.target.value)}
        />
        <button
          emailaddress="giovanniadev@gmail.com"
          subject="Contato via Site Incape"
          className="contactCTA"
          onClick={handleEmailClick}
        >
          Clique Aqui
        </button>
      </div>
      <div className="contactButtonsContainer">
        <p>Encontre-nos também pelo nosso:</p>
        <button className="contactButton" onClick={handleWhatsAppClick}>
          <WhatsAppOutlined className="iconContactButton" />
        </button>

        <button className="contactButton" onClick={handleInstagramClick}>
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
