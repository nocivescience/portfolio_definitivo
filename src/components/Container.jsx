import "../static/sass/Container.css";
import { MyVideo } from "./ViewVideo";
import '../static/js/cubeNinja'
// import '../static/js/lineRightContainer'
import UpdatePolarVideo from "../static/videos/UpdatePolarFunction.mp4";
import IntegralScene from "../static/videos/IntegralScene.mp4";
import BeamScene from "../static/videos/BeamScene.mp4";
import FiguresScene from "../static/videos/FiguresScene.mp4";
import CycleIntentScene from "../static/videos/MyOtherIntentToCycle.mp4";
import HowManyHitGet from "../static/videos/HowManyHitGet.mp4";
import MathImage from '../static/imagenes/abaco.jpg'
import PhysicImage from '../static/imagenes/newton.jpg'
import ChemistryImage from '../static/imagenes/cristal.jpg'
import MyProof from "../static/videos/MyProof.mp4";
export const Container = () => {
  return (
    <div className="container-tres-columnas">
      <div className="left-container">
        <MyVideo fuente={UpdatePolarVideo}></MyVideo>
        <MyVideo fuente={IntegralScene}></MyVideo>
        <MyVideo fuente={BeamScene}></MyVideo>
        <MyVideo fuente={FiguresScene}></MyVideo>
        <MyVideo fuente={CycleIntentScene}></MyVideo>
        <MyVideo fuente={HowManyHitGet}></MyVideo>
        <MyVideo fuente={MyProof}></MyVideo>
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
        <img src={MathImage} id='imagen1'></img>
        <p>
            Consectetur labore mollit anim non aliqua occaecat quis qui nisi amet fugiat cillum pariatur ad. Ut qui ut quis magna ut consequat in anim labore eu pariatur deserunt. Dolor ea qui cillum cupidatat eu. Labore minim anim reprehenderit cupidatat nulla culpa aute reprehenderit proident duis duis eu.
        </p>
        <p>Mollit deserunt officia pariatur consequat ad qui reprehenderit incididunt aliquip deserunt anim enim exercitation. Consectetur eiusmod cillum id ullamco sit irure sint et. Et excepteur tempor ad labore eu veniam sunt tempor cupidatat tempor ad enim minim officia. Ex cupidatat minim adipisicing anim et elit ullamco proident amet commodo ex nostrud eiusmod laborum.</p>
        <p>Ipsum fugiat dolor dolore magna exercitation nisi aliqua sit. Labore adipisicing esse cillum nostrud ad. Commodo magna consectetur fugiat minim proident cupidatat et minim eiusmod laborum. Tempor dolor quis fugiat mollit culpa deserunt occaecat est. Ut eu nostrud laborum velit in do elit in enim nulla non sint.</p>
        <p>Labore ipsum nisi minim aute occaecat tempor tempor labore ad enim voluptate aliqua veniam. Nulla ex qui aliquip cupidatat ea duis cupidatat deserunt ea aliqua sit incididunt anim officia. Proident est dolore deserunt laborum ad dolor voluptate mollit fugiat ullamco consequat.</p>
        <img src={ChemistryImage} id='imagen2'></img>
        <p>Est reprehenderit qui ea non minim tempor dolore reprehenderit. Et reprehenderit ullamco dolore velit sit. Enim amet tempor cupidatat commodo magna cillum tempor sunt dolore. Anim ad aliquip nostrud laborum culpa excepteur esse nostrud consequat. Ullamco aliquip amet minim cillum tempor elit deserunt nisi incididunt eu id cupidatat aliquip pariatur. Mollit nostrud sunt irure Lorem mollit aliquip enim eiusmod do aliquip exercitation nisi et. Ea reprehenderit est ex commodo occaecat fugiat in veniam aliqua.</p>
        <p>Incididunt ad dolor irure veniam nulla consectetur sint fugiat mollit tempor occaecat esse adipisicing. Lorem et aute pariatur eu commodo velit aute ea nulla est enim fugiat ipsum commodo. Ex nisi dolore aliquip esse do veniam veniam reprehenderit pariatur aliqua nulla est laborum. In aliquip aute reprehenderit Lorem id incididunt. Duis non ullamco culpa pariatur.</p>
        <p>Irure ullamco occaecat deserunt culpa consequat dolor exercitation adipisicing aliqua. Nulla veniam fugiat quis incididunt Lorem aliqua eiusmod Lorem ad proident cupidatat exercitation id. Ut pariatur et nulla nulla. Et dolor proident duis aute labore occaecat reprehenderit ea elit sunt. In laborum anim irure aliqua enim amet.</p>
        <p>Ex dolor fugiat commodo duis officia elit reprehenderit commodo ullamco magna qui. Anim adipisicing esse deserunt aliquip fugiat pariatur. Nostrud culpa minim do fugiat ea anim enim.</p>
        <p>Duis Lorem adipisicing ad excepteur laborum enim minim proident culpa eiusmod. Irure id laborum eiusmod aliqua cillum Lorem. Id culpa aute id sunt ullamco. Qui consequat eu duis ut id minim officia ea deserunt deserunt et nostrud duis mollit.</p>
        <img src={PhysicImage} id='imagen3'></img>
      <p>Id pariatur cillum consequat adipisicing minim cupidatat id veniam. Veniam officia consequat ea est commodo. Proident reprehenderit laborum ea duis ipsum elit Lorem in ex dolore magna.</p>
      </div>
      <div className="right-container"></div>
    </div>
  );
};
