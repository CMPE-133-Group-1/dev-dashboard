
import Banner  from './components/Banner.jsx'
import './App.css';

function App() {
  return (
    <div className="App flex justify-center  h-screen w-screen bg-gradient-to-r from-sky-500 to-blue-500">
      <div className="w-4/5 h-full bg-green-400 pt-16 ">

        <Banner/>

        <div className="grid grid-cols-3 gap-2 h-4/5">
          <div className='bg-blue-200'> col-1 </div>
          <div className='bg-blue-300'> col-2 </div>
          <div className='bg-blue-400'> col-3 </div>
        </div>

      </div>
    </div>
  );
}

export default App;
