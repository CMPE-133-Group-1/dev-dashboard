//import { async } from '@firebase/util';
import {useState, useEffect} from 'react';
import {db} from '../firebase-config'
import { collection, doc, getDocs, addDoc, deleteDoc } from 'firebase/firestore'
import { CheckIcon } from '@radix-ui/react-icons';


function ToDoApp() {
  const [newTask, setNewTask] = useState("")
  const [todos, setTodos] = useState([])
  // refers to the collections in the db called todos
  const todosCollectionRef = collection(db, "todos")

  // Create todo and store on db
  const createTodos = async () => {
    await addDoc(todosCollectionRef, {Task: newTask})
  } 

  // when the page rendes this will be called
  useEffect(()=>{
    // we need an async, api q returns a promise
    const getTodos = async () => {
      const data = await getDocs(todosCollectionRef)
      setTodos(data.docs.map((doc) => ({...doc.data(), id: doc.id}) ));
    }; 
    // here we call the function to refresh the results 
    getTodos()
    // eslint-disable-next-line
  },[todos])
  // above [means that if a change is detected in tasks it will re-render!!]

  // update todos from the db
  // const updateTodos = async (id, task) => {
  //   // const taskDoc = doc(db, "tasks", id)
  //   // const newTask = {task: task }
  //   // const newBody = {body: body }
  //   // await updateDoc(taskDoc,newTask)
  //   // await updateDoc(taskDoc,newBody)
  //   console.log(id +" : "+ task)
  // }

  // delete to dos from the db
  const deleteTodos = async (id) => {
    const noteDoc = doc(db, "todos", id)
    await deleteDoc(noteDoc)
  }

  return (
    <div className="App rounded-lg w-1/1 h-64 p-3 overflow-auto" style={{background: "#F8E9D2"}}>
      <div className=' rounded-lg flex flex-row justify-between mb-2'> 
        <textarea className='p-1 text-zinc-800 rounded-lg' placeholder='To-do' type='text' minLength={3} onChange={(event) => {setNewTask(event.target.value)}}/> 
        <button className='p-1 rounded-lg' name='create todo' onClick={createTodos} style={{background: "#F7D7AD", border: '1px solid #74634F'}}> Submit </button> 
      </div>
       
      {todos.map((task) => {
        return (
        <div className='flex flex-row gap-1 justify-between mb-1'> 
          <h1 className='p-1 w-3/4 rounded-lg text-left' style={{background: "#F3D8B0"}}> {task.Task} </h1> 
          <button className='p-1 rounded-lg' task='delete' onClick={() => {deleteTodos(task.id)}} style={{background: "#C7807B"}}> 
            <CheckIcon/>
          </button>
        </div>
        )
      })}
      
    </div>
  );
}


export default ToDoApp

//<button task='edit' onClick={() => {updateTodos(task.id, task.Task, task.Body)}}/>
