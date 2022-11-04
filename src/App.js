import Banner  from './components/Banner.jsx'
import Timer  from './components/Timer.jsx'

import { PlayIcon } from '@radix-ui/react-icons'
import SnippetsApp from './components/SnippetsApp';
import NotesApp from './components/NotesApp';
import ToDoApp from './components/ToDoApp';

import './App.css';
import WeatherApp from './components/WeatherApp.jsx';

function App() {
  return (
    <div className="App flex justify-center  h-screen w-screen bg-gradient-to-br from-sky-500 to-blue-500">
      <div className="w-4/5 h-full pt-16 ">
        <Banner/>
        <div className="grid grid-cols-3 gap-2 h-4/5">
          <div className='bg-blue-200 grid grid-row gap-1'>
            
          </div>
          <div className='bg-blue-300'> 
           <WeatherApp/>
          </div>
          <div className=''>
            <Timer/>
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;


// installed an icon package refer: https://icons.radix-ui.com
/*
<NotesApp/>
            <ToDoApp/>
            <SnippetsApp/>
*/