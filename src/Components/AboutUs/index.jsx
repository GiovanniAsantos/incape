import "./style.css";
import form from "../../assets/form.png";
import hat from "../../assets/hat.png";
import pc from "../../assets/pc.png";
import team from "../../assets/team.png";
const AboutUs = () => {
  return (
    <div className="containerAbout">
      <div className="titleContainer">
        <h1 className="titleAbout">Quem somos</h1>
        <img className="aboutIcon" src={team} alt="Ícone Missão" />
      </div>
      <p className="textAbout">
        Bem-vindo ao Instituto Nacional de Capacitação, Avaliação e Pesquisa
        (INCAPE), uma instituição que vai além da realização de Cursos de
        Formação e Capacitações. Fundado em 2009, o INCAPE tem suas raízes
        profundamente plantadas na missão de promover o desenvolvimento humano e
        social. Uma instituição catalisadora de oportunidades, construtora de
        conhecimentos e defensora do desenvolvimento inclusivo.
      </p>
      <div className="cardsContainer">
        <div className="cardAboutUs">
          <img className="imgCard" src={hat} alt="" />
          <p>Excelência Técnica</p>
        </div>
        <div className="cardAboutUs">
          <img className="imgCard" src={form} alt="" />
          <p>Serviços Especializados em Capacitações e Formações</p>
        </div>
        <div className="cardAboutUs">
          <img className="imgCard" src={pc} alt="" />
          <p>Compras e Licitações</p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
