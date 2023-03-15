import { useState } from 'react';
import "./styles.css";



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
        title: title,
        categoria: categoria,
        data: data,
        descricao: descricao
      },
    ]);
    setId("")
    setTitle("");
    setCategoria("");
    setDescricao("");
    setData("");
    
  }

  function editItem(event){
    event.preventDefault()

    const copyTaskList = [...taskList]
    const index = copyTaskList.findIndex((title)=>title.id === id)

    copyTaskList[index].id = id
    copyTaskList[index].title = title
    copyTaskList[index].categoria = categoria
    copyTaskList[index].data = data
    copyTaskList[index].descricao = descricao

    setTaskList(copyTaskList)

    setId("")
    setTitle("");
    setCategoria("");
    setDescricao("");
    setData("");
  }

  function apagarItem(id) {
    if (confirm("Clique em OK para confirmar a exclusão")) {
      const result = taskList.filter((item)=> item.id !== id)
      setTaskList(result)
    }
  }

  function preencherEstados(item){
    setTitle(item.title)
    setCategoria(item.categoria)
    setData(item.data)
    setDescricao(item.descricao)
    setId(item.id)
  }

  return (
    <div className="container">
      <div className="form">
        <h1>Cadastrar Tarefa</h1>
        <br />
        <br />
      <form  onSubmit={id ? editItem : addItem}>
        <input value={title} onChange={(event) => setTitle(event.target.value)} placeholder="Título"/>

        <br />
        <br />
        
      <select value={categoria} onChange={(event) => setCategoria(event.target.value)} placeholder="Categoria">
        <option value="" disabled>Selecione um valor:</option>
        <option value="trabalho">Trabalho</option>
        <option value="lazer">Lazer</option>
        <option value="prioridade">Prioridade</option>
        <option value="outros">Outros</option>
      </select>

      <br />
      <br />

      <input value={data} onChange={(event) => setData(event.target.value)} placeholder="Data"/>
        <br />
        <br />
      <input value={descricao} onChange={(event) => setDescricao(event.target.value)} placeholder="Descrição"/>
      <br />
      <br />
      <br />
      <br />
      <input className='salvar' type="submit" value={id ? "Salvar": "Cadastrar"} />
      </form>
      </div>
      
      <div className="tarefas">
        <h2>Minhas Tarefas</h2>
        <p>Total: {taskList.length} tarefas</p>
        <br />
      {taskList.length > 0 ?(
        <ul>
          {taskList.map((item)=>{
            const {id, title, categoria, data, descricao} = item
            return(
              <li key={id}>
                <h3>{title}</h3>
                <p>{categoria}</p>
                <br />
                <p>{descricao}</p>
                <p>{data}</p>
                <button className='apagar' onClick={()=> apagarItem(item.id)}>Apagar</button>
                <button className='editar' onClick={()=> preencherEstados(item)} >Editar</button>
              </li>
            )
          })}
        </ul>) : (
          <p>Nenhuma tarefa cadastrada!</p>
        )}

      </div>
    </div>
  )
}

export default App
