import Banner  from './components/Banner.jsx'
import Timer  from './components/Timer.jsx'

import { PlayIcon } from '@radix-ui/react-icons'

import './App.css';

function App() {
  return (
    <div className="App flex justify-center  h-screen w-screen">
      <div className="w-4/5 h-full pt-16 ">

        <Banner/>
        <div className="grid grid-cols-3 gap-2 h-4/5">
          <div className='bg-green-100'>
            <PlayIcon/>
          </div>
          <div className='bg-green-100'> col-2 </div>
          <div className=''>
            <Timer/>
            <Timer/>
            <Timer/>
            <Timer/>

          </div>
        </div>

      </div>
    </div>
  );
}

export default App;


// installed an icon package refer: https://icons.radix-ui.com
