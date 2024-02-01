import Hashtaurante from "./assets/hashtaurante.webp";
import './App.css';
import { Navegacao } from "./Navegacao";
import { ItemCardapio } from "./itemCardapio";
import { pratosPrincipais,sobremesas,bebidas } from "./cardapio";
export function App(){
  
  
  return <>
        <img src={Hashtaurante} alt="" className="capa"/>
        <Navegacao />
        <div className="menu">
         {}
        </div>
  </> 

}