//import { async } from '@firebase/util';
import {useState, useEffect} from 'react';
import {db} from '../firebase-config'
import { collection, doc, getDocs, addDoc, deleteDoc } from 'firebase/firestore'


function NotesApp() {
  // body and tite of the note objects
  const [newBody, setNewBody] = useState("")
  const [newTitle, setNewTitle] = useState("")
  //
  const [notes, setNotes] = useState([])
  const notesCollectionRef = collection(db, "notes")

  // Create an entry, passing in the reference to the collection and also the parameters of the note objects 
  const createNote = async () => {
    if(newTitle!="" && newBody!=""){
      await addDoc(notesCollectionRef, {Title: newTitle, Body: newBody})
    }
  } 

  useEffect(()=>{
    // we need an async, api q returns a promise. this promise will provide the objects stored in the DB
    const getNotes = async () => {
      const data = await getDocs(notesCollectionRef)
      // will set our notes to equal the objects in teh db we are going to display.
      setNotes(data.docs.map((doc) => ({...doc.data(), id: doc.id}) ));
    }; 
    // here we call the function to refresh the results 
    getNotes()
    // eslint-disable-next-line
    // if a change is detected in notes the page will re-render
  },[notes])
  

  // Deleting a note, pass in the id, update the db on value we aim to delete, then delete it and wait for the confirmation
  const deleteNote = async (id) => {
    const noteDoc = doc(db, "notes", id)
    await deleteDoc(noteDoc)
  }

  return (
    <div className="App bg-slate-600 rounded-lg w-1/1 h-64  overflow-auto p-3">
      
        <div className=' flex flex-col  gap-1 rounded-lg p-2 mb-2'> 
          <input className='bg-grey-200 text-zinc-800 p-1 rounded-lg' placeholder='Title...' type='text' minLength={3} onChange={(event) => {setNewTitle(event.target.value)}}/> 
          <textarea className='bg-grey-200 text-zinc-800 p-1 rounded-lg' placeholder='Body...' type='text' minLength={3} onChange={(event)  => {setNewBody(event.target.value)}}/> 
          <button className='bg-green-300 rounded-lg w-1/2 mr-auto ml-auto' name='create note' onClick={createNote}> submit </button>
        </div>
        
      {notes.map((note) => {
        return (
        <div className='bg-slate-500 mb-1 p-2 rounded-lg'> 

          <h1 className='text-left font-bold border-solid '> {note.Title} </h1> 
          <p className='text-left font-light border-2 border-sky-500 rounded-lg p-1 mb-2'> {note.Body} </p> 

          <div className='flex  flex-row justify-center gap-2 rounded-lg'> 
            <button className='bg-red-300 p-1 rounded-lg' title='delete' onClick={() => {deleteNote(note.id)}}> Delete </button>
          </div>   
        </div>
        )
      })}
      
    </div>
  );
}


export default NotesApp