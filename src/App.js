import './App.css';
import React, { useState } from 'react';
import Header from './components/Header';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

function App() {

  const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const current = new Date();
  const date = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`;
  const day = weekday[current.getDay()];

  const [name, setName] = useState("");
  const [todo, setTodo] = useState([])
  const [searchTodo, setSearchTodo] = useState('');
  // const [filtered,setFiltered]=useState([])

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(e);
    let items = [...todo, name]
    setTodo(items)
    // setFiltered(items)

    setName("")
  }
  const removeAll = () => {
    setName("")
    setTodo([])
    // setFiltered([])

  }
  const removeId = (id) => {
    const newArray = todo.filter((e, ind) => {
      return ind !== id
    })
    setTodo(newArray)
  }


//   const searchingItem = (e)=>{
//     // e.preventDefault()
//     setSearchTodo(e.target.value)
//     if(e.target.value){
//       const result = todo.filter(element => element.includes(searchTodo))
//       setFiltered(result)      
//     }else{
//       setFiltered(todo)
//     }
    
// }


  const notify = () => toast("Todo Add Successfully!");
  const notifyClear = () => toast("Clear All Todos!");
  const notifySingle = () => toast("Remove Todo")

  return (
    <div className="container-fluid">
      <Header />
       {/* <input type="text" 
      className='searchIt'
      placeholder='search It'
      value={searchTodo}
      onChange={(e) => {searchingItem(e)}} 
      />  */}
      <header className="center1" id="to-do-form">
        <h6 className="centerHere">{day} :{date}</h6>

        <form onSubmit={submitHandler}>
          <input type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}>
          </input>
          <button className="btnOk" disabled={!name} onClick={notify}>Add</button>
          <ToastContainer />

        </form>

      </header>
      <ul className='fixStle'>

        {todo?.map((item, key) => {
          return (
            <div className='faicons'>
              <h5 >
                <li key={key}>
                  {item}
                  <i className="fa fa-trash fixing" onClick={() => { notifySingle(); removeId(key) }}>

                  </i>
                </li>
              </h5>

            </div>

          )
        })}
      </ul>



      <div>
        {todo.length === 0 ? "" : <button className="btnClose" onClick={() => { removeAll(); notifyClear() }}> Empty Card</button>
        }
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">Item Count:</th>
            </tr>
          </thead>
          <tbody>
            <tr className="table-active">
              <th scope="row">{todo.length}</th>
            </tr>

          </tbody>
        </table>
      </div>


    </div>
  );
}

export default App;
