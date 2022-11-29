import { useState } from "react";
import Escena from "./components/escena/Escena";
import Inicial from "./components/inicial/Inicial";
import data from "./data/textos"
import './App.css';

const App = () => {
  const [pantalla, setPantalla] = useState(true);

  return (
  <>
  {pantalla ? <Inicial setPantalla={setPantalla}/> : <Escena textos={data} />}
  </>
  )
};

export default App;
