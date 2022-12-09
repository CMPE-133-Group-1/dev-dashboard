//import { async } from '@firebase/util';
import {useState, useEffect} from 'react';
import {db} from '../firebase-config'
import { collection, doc, getDocs, addDoc, deleteDoc } from 'firebase/firestore'


function SnippetsApp() {
  // stores the body of a snippet
  const [newBody, setNewBody] = useState("")
  // stores the title of a snippet
  const [newTitle, setNewTitle] = useState("")
  // stores the snippets in an array to be mapped out 
  const [snippets, setNotes] = useState([])
  // refers to the collection in teh database known as snippets, where we will store our info
  const notesCollectionRef = collection(db, "snippets")
  // stores the selected snippets information [Title, Body] 
  const [focusNote, setFocusNote]= useState([])

  // Create an entry, passing in the reference tot the collection and also the parameters 
  const createSnippet = async () => {
    await addDoc(notesCollectionRef, {Title: newTitle, Body: newBody})
  } 

  // when the page renders this will be called
  useEffect(()=>{
    // we need an async, api q returns a promise. we store the data we aim to update
    const getSnippets = async () => {
      const data = await getDocs(notesCollectionRef)
      // still documenting here...
      setNotes(data.docs.map((doc) => ({...doc.data(), id: doc.id}) ));
    }; 
    // here we call the function to refresh the results 
    getSnippets()
    // eslint-disable-next-line
  },[snippets])
  // above [means that if a change is detected in snippets it will re-render!!]

  // update a given snippet
  const updateSnippet = async (id, title, body) => {
    // const noteDoc = doc(db, "snippets", id)
    // const newTitle = {title: title }
    // const newBody = {body: body }
    // await updateDoc(noteDoc,newTitle)
    // await updateDoc(noteDoc,newBody)
    console.log(id +" : "+ title + " : " + body)
  }

  // Deleting a snippet, we need to know which snippet, pass in the id, store the value we aim to delete, then delete it
  const deleteSnippet = async (id) => {
    const noteDoc = doc(db, "snippets", id)
    await deleteDoc(noteDoc)
  }

  return (
    <div className="App rounded-lg w-1/1 h-2/4 flex flex-cols-2 gap-1 overflow-auto p-3" style={{background: "#A7B29E", border: '1px solid #74634F'}}>

        <div className='bg-green-500 overflow-scroll'> 
          <div className=' flex flex-col w-1/1 gap-1 rounded-lg p-2 mb-2 bg-red-300'> 
            <input className='bg-grey-200 text-zinc-800 p-1 rounded-lg' placeholder='Title...' type='text' minLength={3} onChange={(event) => {setNewTitle(event.target.value)}}/> 
            <textarea className='bg-grey-200 text-zinc-800 p-1 rounded-lg' placeholder='Body...' type='text' minLength={3} onChange={(event)  => {setNewBody(event.target.value)}}/> 
            <button className='bg-green-300 rounded-lg w-1/2 mr-auto ml-auto' name='create snippet' onClick={createSnippet}> submit </button>
          </div>

          <div className='bg-purple-300 w-1/1 overflow-scroll'> 
            {snippets.map((snippet) => {
              return (
              <div 
              className=' mb-1 p-2 rounded-lg bg-slate-500 '  
              onClick={() => ( setFocusNote([snippet.Title, snippet.Body]) )}> 
                <h1 className='text-left font-bold border-solid '> {snippet.Title} </h1> 
                <p className='text-left font-light border-2 border-sky-500 rounded-lg p-1 mb-2'> {snippet.Body.slice(0, 20) + "..."} </p> 
              </div>
              )
            })}
          </div>
        </div>
        
        
        <div className='Previewer w-2/3 overflow-scroll p-0'> 
          <div className=' min-h-full rounded-xl p-4 text-left'  style={{background: "#C1C8BA"}}> 
            <h1 className='font-black bg-green-700 pl-2 rounded-xl mb-2'>{focusNote[0]}</h1>
            <p className=' bg-green-400 pl-2'> {focusNote[1]}</p>
          </div>
        </div>


    </div>
  );
}


export default SnippetsApp

/*
// this is the right side of the snippets module, had list of snippets 
 <div className='Previewer bg-purple-300 w-2/3 overflow-scroll'> 
          {snippets.map((snippet) => {
            return (
            <div className=' mb-1 p-2 rounded-lg bg-slate-500'> 
              <h1 className='text-left font-bold border-solid '> {snippet.Title} </h1> 
              <p className='text-left font-light border-2 border-sky-500 rounded-lg p-1 mb-2'> {snippet.Body} </p> 
              <div className='flex  flex-row justify-center gap-2 rounded-lg'> 
              <button className='bg-blue-300 p-1 rounded-lg' title='edit' onClick={() => {updateSnippet(snippet.id, snippet.Title, snippet.Body)}}> Edit </button>
              <button className='bg-red-300 p-1 rounded-lg' title='delete' onClick={() => {deleteSnippet(snippet.id)}}> Delete </button>
              </div>
              
            </div>
            )
          })}
        </div>
*/
