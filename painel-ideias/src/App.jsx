import { useState } from "react";

export default function App(){
  const[ideias,setIdeias] = useState([])
  const[novaIdeia,setNovaIdeia] = useState("")

  function adicionarIdeia(event){
    event.preventDefault();
     const nova = {
    id: Date.now(),
    texto: novaIdeia,
    feita: false
  };

  setIdeias([...ideias, nova]);
  }

  return(
    <>
    <h1>Painel de Ideias</h1>

  <form onSubmit={adicionarIdeia}>
     <input
   value={novaIdeia}
   onChange={event =>setNovaIdeia(event.target.value)}
   />

   <button>Adicionar</button>

  </form>
 
 {ideias.map(ideia => (
 <p key={ideia.id}>
  

 <input
  type="checkbox"
  checked={ideia.feita}
  onChange={() =>
    setIdeias(ideias.map(item =>
      item.id === ideia.id
        ? { ...item, feita: !item.feita }
        : item
    ))
  }
/>
 {ideia.feita ? <s>{ideia.texto}</s> : ideia.texto}

 <button onClick={() =>
  setIdeias(ideias.filter(item => item.id !== ideia.id))
}>
  ✕
</button>
  </p>
  ))}
    </>
  );
}

