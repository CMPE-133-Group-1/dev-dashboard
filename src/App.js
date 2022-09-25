import Banner  from './components/Banner.jsx'
import Timer  from './components/Timer.jsx'
import './App.css';

function App() {
  return (
    <div className="App flex justify-center  h-screen w-screen bg-gradient-to-br from-sky-500 to-blue-500">
      <div className="w-4/5 h-full pt-16 ">

        <Banner/>


        <div className="grid grid-cols-3 gap-2 h-4/5">
          <div className='bg-blue-200'> col-1 </div>
          <div className='bg-blue-300'> col-2 </div>
          <div className=''>
            <Timer/>
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
