import { useState } from 'react'


function App() {
  // título, categoria, data, descrição
  const [id, setId] = useState("")
  const [title, setTitle] = useState("");
  const [categoria, setCategoria] = useState("")
  const [data, setData] = useState("")
  const [descricao, setDescricao] = useState("")
  const [taskList, setTaskList] = useState([]);

  function addItem(event) {
    event.preventDefault();

    if (title === "" || categoria === "" || data == "" || descricao == "") {
      alert("Preencha todas as informações");
      return;
    }

    setTaskList([
      ...taskList,
      {
        id: Date.now(),
        titulo: titulo,
        categoria: categoria,
        data: data,
        descricao: descricao
      },
    ]);
    setId("")
    setTitle("");
    setDescricao("");
    setData("");
    
  }

  function apagarItem(id) {
    
  }

  return (
    <div>
      <h1>Cadastrar Tarefa</h1>
      <form onSubmit={addItem}>
        <input value={title} onChange={(event) => setTitle(event.target.value)} placeholder="Título"/>

        
      <select value={categoria} onChange={(event) => setCategoria(event.target.value)} placeholder="Categoria">
        <option value="trabalho">Trabalho</option>
        <option value="lazer">Lazer</option>
        <option value="prioridade">Prioridade</option>
        <option value="outros">Outros</option>
        
      </select>
      
      <input value={data} onChange={(event) => setData(event.target.value)} placeholder="Data"/>
      <input value={descricao} onChange={(event) => setDescricao(event.target.value)} placeholder="Descrição"/>
      <input type="submit" value="Cadastrar" />
      </form>

      {taskList.length > 0 ?(
        <ul>
          {taskList.map((item)=>{
            const {id, title, categoria, data, descricao} = item
            return(
              <li key={id}>
                <h3>{title}</h3>
                <p>{categoria}</p>
                <p>{descricao}</p>
                <p>{data}</p>
                <button onClick={()=> apagarItem(item.id)}>Apagar</button>
              </li>
            )
          })}
        </ul>) : (
          <p>Nenhuma tarefa cadastrada!</p>
        )}
    </div>
  )
}

export default App
