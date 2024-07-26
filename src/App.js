/**
 * import MonComp04 from "./MonComp04";
import MonForm01 from "./MonForm01";
import MonForm02 from "./MonForm02";
import MonForm03 from "./MonForm03";
import Tick from "./Tick";
*/

import MonBody from "./TP01/MonBody";
import MonFooter from "./TP01/MonFooter";
import MonHeader from "./TP01/MonHeader";

function App() {
  return (
    <div>
      <MonHeader />
      <MonBody/>
      <MonFooter nom="Germain" prenom="Christophe" session="2024-M05" />
    </div>
  )
}


export default App;





/**
function App() {
  let onCallBack = (e)=>{console.log("App")}
  return (
    <div>
      <Comp01 message='Formulaire  de saisie V1'/>
      
      <MonComp04 />
    </div>
  );
}
function Comp01(props) {
  return(<h1>{props.message}</h1>)
}

/**
 * <Comp01 message='DIGI 01'/>
      <Comp01 message='DIGI 02'/>
      <Comp01 message='' />
      <Tick 
      message=
      "Horloge DIGI 2024-M05"
      cb={onCallBack}/>
      <MonForm01 />
      <MonForm02 />
      <MonForm03/>
 */