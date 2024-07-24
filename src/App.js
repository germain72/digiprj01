import Tick from "./Tick";
/**
 * Comp01 est un composant React (JSX)
 * @returns un render
 */
function Comp01(props) {
  return(<h1>{props.message}</h1>)
}


/**
 * 
 * @returns 
 */
function App() {
  let onCallBack = (e)=>{console.log("App")}
  return (
    <div>
      <Comp01 message='DIGI 01'/>
      <Comp01 message='DIGI 02'/>
      <Comp01 message='' />
      <Tick 
      message=
      "Horloge DIGI 2024-M05"
      cb={onCallBack}/>
    </div>
  );
}

export default App;
