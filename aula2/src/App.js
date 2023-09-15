import DigaMeuNome from './components/digaMeuNome';
import Frases from './components/frases';
import OlaMundo from './components/olaMundo';
import './App.css';

function App() {
  return (
    <div className="container">
    <h1> Olá mundo</h1>
    <OlaMundo/>
    <Frases/>
    <DigaMeuNome nome="Mike" idade="16" sonho="casar"/>
    </div>
  );
}

export default App;
