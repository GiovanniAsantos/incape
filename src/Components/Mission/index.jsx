import "./style.css";
import missionImg from "../../assets/missionImg.jpg";
import iconBullsEye from "../../assets/iconBullsEye.png";

const Mission = () => {
  return (
    <div className="missionWrapper">
      <div className="homeMissionContainer">
        <div className="titleContainer">
          <h1 className="missionTitle">Missão</h1>
          <img className="missionIcon" src={iconBullsEye} alt="Ícone Missão" />
        </div>
        <p className="missionParagraph">
          Bem-vindo ao Instituto Nacional de Capacitação, Avaliação e Pesquisa
          (INCAPE), uma instituição que vai além da realização de Cursos de
          Formação e Capacitações. Fundado em 2009, o INCAPE tem suas raízes
          profundamente plantadas na missão de promover o desenvolvimento humano
          e social. Uma instituição catalisadora de oportunidades, construtora
          de conhecimentos e defensora do desenvolvimento inclusivo.
        </p>
        <button className="missionCTA">Saiba Mais</button>
      </div>
      <div className="imageContainer">
        <img src={missionImg} alt="Missão" className="missionImage" />
      </div>
    </div>
  );
};

export default Mission;
