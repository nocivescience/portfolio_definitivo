import "../static/sass/Container.css";
import { MyVideo } from "./ViewVideo";
import "../static/js/cubeNinja";
import UpdatePolarVideo from "../static/videos/UpdatePolarFunction.mp4";
import IntegralScene from "../static/videos/IntegralScene.mp4";
import BeamScene from "../static/videos/BeamScene.mp4";
import FiguresScene from "../static/videos/FiguresScene.mp4";
import CycleIntentScene from "../static/videos/MyOtherIntentToCycle.mp4";
import HowManyHitGet from "../static/videos/HowManyHitGet.mp4";
import MathImage from "../static/imagenes/abaco.jpg";
import PhysicImage from "../static/imagenes/newton.jpg";
import ChemistryImage from "../static/imagenes/cristal.jpg";
import MyProof from "../static/videos/MyProof.mp4";
import CurvaAmarilla from "../static/imagenes/videoCurvaAmarilla.png";
import ElectronViajante from "../static/imagenes/electronViajante.png";
import Impulso from "../static/imagenes/impulso.png";
import Estrella from "../static/imagenes/estrella.png";
import Crowd from "../static/imagenes/crowd.png";
export const Container = () => {
  return (
    <div className="container-tres-columnas">
      <div className="left-container">
        <MyVideo fuente={UpdatePolarVideo} poster={CurvaAmarilla}></MyVideo>
        <MyVideo fuente={IntegralScene}></MyVideo>
        <MyVideo fuente={BeamScene} poster={ElectronViajante}></MyVideo>
        <MyVideo fuente={FiguresScene}></MyVideo>
        <MyVideo fuente={CycleIntentScene} poster={Estrella}></MyVideo>
        <MyVideo fuente={HowManyHitGet} poster={Impulso}></MyVideo>
        <MyVideo fuente={MyProof} poster={Crowd}></MyVideo>
      </div>
      <div className="center-container">
        <h2 className="display-5">Mi formación académica</h2>
        <p>
          Soy un apasionado por las ciencias, especialmente por las matemáticas,
          la física y la química. Durante mi formación académica, me esforcé por
          comprender los conceptos básicos y aplicarlos en situaciones
          cotidianas. Este conocimiento me ha permitido tener una visión amplia
          y lógica de los problemas que se presentan en la vida.
        </p>
        <h2 className="display-5">Mi experiencia en programación</h2>
        <p>
          Además de mi formación en ciencias, también he desarrollado
          habilidades en programación. Me especializo en Python y JavaScript,
          dos lenguajes muy versátiles que me permiten crear soluciones
          eficientes y escalables. Mi objetivo es seguir mejorando y ampliando
          mis conocimientos en este campo para poder aportar soluciones
          innovadoras y eficaces en el futuro.
        </p>
        <img src={MathImage} id="imagen1"></img>
        <h2 className="display-5">My english Skill</h2>
        <p>Dear Friends,</p>

        <p>
          I am writing to express my interest in the developement role at my own
          way. With 6 years in the Tecnichal Field industry and a passion for
          staying up-to-date with the latest technologies and advancements, I am
          confident that I have the skills and experience required for this
          position.
        </p>

        <p>
          My strong analytical and problem-solving skills, combined with my
          ability to work well under pressure, have allowed me to successfully
          complete complex projects within tight deadlines.
        </p>

        <p>
          I am particularly interested in joining Tecnnological Industry
          because. I believe that my experience and technical skills, combined
          with my drive to continuously learn and grow, would make me a valuable
          asset to your team.
        </p>
        <p>
          Thank you for considering my application. I look forward to the
          opportunity to further discuss my qualifications and how I can
          contribute to the success of your organization.
        </p>
        <img src={ChemistryImage} id="imagen2"></img>
        <h2 className="display-5">Mis habilidades con Blender</h2>
        <p>
          Me encanta trabajar con Blender para propósitos educativos. Blender es
          un software de modelado 3D y animación de código abierto y ha sido mi
          herramienta principal para crear contenido educativo visual y
          atractivo.
        </p>
        <p>
          Desde que descubrí Blender, he estado emocionado/a de explorar sus
          posibilidades y de cómo puedo utilizarlo para enseñar a otros de
          manera efectiva. He creado varios tutoriales en 3D, animaciones y
          modelos para ilustrar conceptos complejos de manera clara y accesible
          para mis estudiantes.
        </p>
        <p>
          Me siento muy apasionado/a por la tecnología y cómo puede ser
          utilizada en el aula para mejorar la educación. Creo firmemente en el
          poder de la visualización para hacer que el aprendizaje sea más
          interesante y retenible para los estudiantes.
        </p>
        <p>
          Estoy emocionado/a de poder continuar utilizando Blender para mis
          proyectos educativos y estoy ansioso/a de explorar nuevas maneras de
          utilizar la tecnología en el aula.
        </p>
        <img src={PhysicImage} id="imagen3"></img>
      </div>
      <div className="right-container">
        <div id="cubeRightContainer"></div>
        <div id="dodecahedroRightContainer"></div>
        <div id="piramidRightContainer"></div>
        <div id="torusRightContainer"></div>
        <div id="parametricSurfaceRightContainer"></div>
      </div>
    </div>
  );
};
