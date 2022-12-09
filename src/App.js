import WeatherApp from './components/WeatherApp.jsx';
import SnippetsApp from './components/SnippetsApp';
import ColorWheel from './components/ColorWheel';
import Banner  from './components/Banner.jsx';
import NotesApp from './components/NotesApp';
import Timer  from './components/Timer.jsx';
import Links from './components/Links.jsx';
import ToDoApp from './components/ToDoApp';


import './App.css';

function App() {
  return (
    <div className="App flex justify-center  h-screen w-screen bg-gradient-to-br from-lime-600 to-green-400">
      <div className="w-4/5 h-full pt-16 ">
        <Banner/>
        <div className="grid grid-cols-3 gap-2 h-4/5">
          <div className='grid grid-row gap-1'>
            <Links/>
          </div>
          <div className=''> 
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

