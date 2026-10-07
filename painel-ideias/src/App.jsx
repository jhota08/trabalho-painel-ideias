import { useState } from "react";
import "./App.css";

export default function App(){

  //Estados principais do painel
  const[ideias,setIdeias] = useState([])
  const[novaIdeia,setNovaIdeia] = useState("")
  const[erro,setErro] = useState("")

  //Adiciona uma nova ideia no painel
  function adicionarIdeia(event){
  event.preventDefault();

  //Verifica se o usuário digitou alguma coisa 
  if(novaIdeia.trim() === ""){
  setErro("Digite sua ideia antes de adicionar.");
  return;
}
    const nova = {
    id: Date.now(),
    texto: novaIdeia.trim(),
    feita: false
  };

  //Cria uma nova lista sem alterar a anterior
  setIdeias(ideias=> [...ideias, nova]);
  setNovaIdeia("");
  setErro("");
  }

  return(
    <main>
    <h1>Painel de Ideias</h1>

  <form onSubmit={adicionarIdeia}>
     <input
     type="text"
   value={novaIdeia}
  onChange={event => {

  
  setNovaIdeia(event.target.value);
  setErro("");
}}
   placeholder="Digite uma ideia"
   />

   <button type="submit">Adicionar</button>
  </form>

  {erro && <p>{erro}</p>}
  <p>
     {/* Mostra a quantidade de ideias e de concluídas */}
  {ideias.length === 1
    ? "1 ideia no painel"
    : `${ideias.length} ideias no painel`}
  {" · "}
  {ideias.filter(ideia => ideia.feita).length} concluídas
</p>


 {ideias.map(ideia => (
 <div key={ideia.id}>
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
 {/* Risca o texto quando a ideia é concluída */}
 {ideia.feita ? <s>{ideia.texto}</s> : ideia.texto}

{/* Remove a ideia selecionada da lista */}
 <button 
 type="button"
 onClick={() =>
  setIdeias(ideias.filter(item => item.id !== ideia.id))
}
>
  ✕
</button>
</div>
  ))}
        </main>
  );
}

