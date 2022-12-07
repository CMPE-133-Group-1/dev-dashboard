import WeatherApp from './components/WeatherApp.jsx';
import SnippetsApp from './components/SnippetsApp';
import Calendar from './components/Calendar.jsx';
import Banner  from './components/Banner.jsx';
import NotesApp from './components/NotesApp';
import Timer  from './components/Timer.jsx';
import Links from './components/Links.jsx';
import ToDoApp from './components/ToDoApp';


import './App.css';

function App() {
  return (
    <div className="App flex justify-center  h-screen w-screen from-[#9DAB86]">
      <div className="w-4/5 h-full pt-16 ">
        <Banner/>
        <div className="grid grid-cols-3 gap-2 h-4/5">
          <div className='from-[#9DAB86] grid grid-row gap-1'>
            <Links/>
            <NotesApp/>

          </div>
          
          <div className='flex flex-col justify-between'> 
           <ToDoApp/>
           <Calendar/>
           <Timer/>
            
    
           
          </div>

          <div className=''>
            <WeatherApp/>
            <SnippetsApp/>
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;


// installed an icon package refer: https://icons.radix-ui.com
/*
<div className="App flex justify-center  h-screen w-screen bg-gradient-to-br from-sky-500 to-blue-500">
      <div className="w-4/5 h-full pt-16 ">
        <Banner/>
        <div className="grid grid-cols-3 gap-2 h-4/5">
          <div className='bg-blue-200 grid grid-row gap-1'>
            <Links/>
            <NotesApp/>
          </div>
          <div className='bg-blue-300'> 
           <WeatherApp/>
           <ToDoApp/>
          </div>
          <div className=''>
            <Timer/>
            <SnippetsApp/>
          </div>
        </div>
      </div>
    </div>
*/
