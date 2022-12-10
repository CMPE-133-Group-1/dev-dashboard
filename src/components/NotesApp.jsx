//import { async } from '@firebase/util';
import {useState, useEffect} from 'react';
import {db} from '../firebase-config'
import { collection, doc, getDocs, addDoc, deleteDoc } from 'firebase/firestore'


function NotesApp() {
  const [newBody, setNewBody] = useState("")
  const [newTitle, setNewTitle] = useState("")
  const [notes, setNotes] = useState([])
  const notesCollectionRef = collection(db, "notes")

  // Create an entry, passing in the reference tot the collection and also the parameters 
  const createNote = async () => {
    await addDoc(notesCollectionRef, {Title: newTitle, Body: newBody})

  } 

  // when the page rendes this will be called
  useEffect(()=>{
    // we need an async, api q returns a promise. we store the data we aim to update
    const getNotes = async () => {
      const data = await getDocs(notesCollectionRef)
      // still documenting here...
      setNotes(data.docs.map((doc) => ({...doc.data(), id: doc.id}) ));
    }; 
    // here we call the function to refresh the results 
    getNotes()
    // eslint-disable-next-line
  },[notes])
  // above [means that if a change is detected in notes it will re-render!!]

  

  // 
  const updateNote = async (id, title, body) => {
    // const noteDoc = doc(db, "notes", id)
    // const newTitle = {title: title }
    // const newBody = {body: body }
    // await updateDoc(noteDoc,newTitle)
    // await updateDoc(noteDoc,newBody)
    console.log(id +" : "+ title + " : " + body)
  }

  // Deleting a note, we need to know which note, pass in the id, store the value we aim to delete, then delete it
  const deleteNote = async (id) => {
    const noteDoc = doc(db, "notes", id)
    await deleteDoc(noteDoc)
  }

  return (
    <div className="App rounded-lg w-1/1 h-64  overflow-auto p-3" style={{background: "#EBDEAF", border: '1px solid #74634F'}}>
      
        <div className=' flex flex-col  gap-1 rounded-lg p-2 mb-2'> 
          <input className='bg-grey-200 text-zinc-800 p-1 rounded-lg' placeholder='Title...' type='text' minLength={3} onChange={(event) => {setNewTitle(event.target.value)}}/> 
          <textarea className='bg-grey-200 text-zinc-800 p-1 rounded-lg' placeholder='Body...' type='text' minLength={3} onChange={(event)  => {setNewBody(event.target.value)}}/> 
          <button className=' rounded-lg w-1/2 mr-auto ml-auto' name='create note' onClick={createNote} style={{background: "#A7BF93", border: '1px solid #74634F'}}> submit </button>
        </div>
        
      
    
      
      {notes.map((note) => {
        return (
        <div className=' mb-1 p-2 rounded-lg'style={{background: "#E4D292"}}> 
          <h1 className='text-left font-bold border-solid '> {note.Title} </h1> 
          <p className='text-left font-light border-2 border-sky-500 rounded-lg p-1 mb-2'> {note.Body} </p> 

          <div className='flex  flex-row justify-center gap-2 rounded-lg'> 
          <button className='p-1 rounded-lg' title='edit' onClick={() => {updateNote(note.id, note.Title, note.Body)}}  style={{background: "#9EB8C7"}}> Edit </button>
          <button className='p-1 rounded-lg' title='delete' onClick={() => {deleteNote(note.id)}} style={{background: "#C7807B"}}> Delete </button>
          </div>
          
        </div>
        )
      })}
      
    </div>
  );
}


export default NotesApp
