import { useState } from "react";

export default function App(){
  const[ideias,setIdeias] = useState([])
  const[novaIdeia,setNovaIdeia] = useState("")
  return(
    <>
    <h1>Painel de Ideias</h1>

    <input
   value={novaIdeia}
   onChange={event =>setNovaIdeia(event.target.value)}
   />
    </>

  );
}

