import '../static/sass/Container.css'
import {MyVideo} from './ViewVideo'
import UpdatePolarVideo from '../static/videos/UpdatePolarFunction.mp4'
import IntegralScene from '../static/videos/IntegralScene.mp4'
import BeamScene from '../static/videos/BeamScene.mp4'
import FiguresScene from '../static/videos/FiguresScene.mp4'
import CycleIntentScene from '../static/videos/MyOtherIntentToCycle.mp4'
import HowManyHitGet from '../static/videos/HowManyHitGet.mp4'
import MyProof from '../static/videos/MyProof.mp4'
export const Container=()=>{
    return (
        <div className="container-tres-columnas">
            <div className='left-container'>
                <MyVideo fuente={UpdatePolarVideo}></MyVideo>
                <MyVideo fuente={IntegralScene}></MyVideo>
                <MyVideo fuente={BeamScene}></MyVideo>
                <MyVideo fuente={FiguresScene}></MyVideo>
                <MyVideo fuente={CycleIntentScene}></MyVideo>
                <MyVideo fuente={HowManyHitGet}></MyVideo>
                <MyVideo fuente={MyProof}></MyVideo>
            </div>
            <div className='center-container'>
            <h2 className='display-5'>Mi formación académica</h2>
            <p>Soy un apasionado por las ciencias, especialmente por las matemáticas, la física y la química. Durante mi formación académica, me esforcé por comprender los conceptos básicos y aplicarlos en situaciones cotidianas. Este conocimiento me ha permitido tener una visión amplia y lógica de los problemas que se presentan en la vida.</p>
            <h2 className='display-5'>Mi experiencia en programación</h2>
            <p>Además de mi formación en ciencias, también he desarrollado habilidades en programación. Me especializo en Python y JavaScript, dos lenguajes muy versátiles que me permiten crear soluciones eficientes y escalables. Mi objetivo es seguir mejorando y ampliando mis conocimientos en este campo para poder aportar soluciones innovadoras y eficaces en el futuro.</p>
            </div>
            <div>Tercero</div>
        </div>
    )
}