import React,{useState} from "react";

/**
 * Un composant de type function
 * Et on va utiliser les Hooks [] et les useState depuis V17
 */

export default function MonComp04() {
    const [count,setCount] = useState(0)
    return (
        <div>
            <h1>Hooks : {count}</h1>
            <button type="button" onClick={(e)=>setCount(count+1)}>Incrémenter Count</button>
            <button type="button" onClick={(e)=>setCount(count-1)}>Décrémenter Count</button>
        </div>
    )
}