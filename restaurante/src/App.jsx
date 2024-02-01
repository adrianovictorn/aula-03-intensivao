import Hashtaurante from "./assets/hashtaurante.webp";
import './App.css';
import { Navegacao } from "./Navegacao";
import { ItemCardapio } from "./itemCardapio";
export function App(){
  
  
  return <>
        <img src={Hashtaurante} alt="" className="capa"/>
        <Navegacao />
        <ItemCardapio/>
  </> 

}