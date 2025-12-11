// import logo from './logo.svg';
import './App.css';
import { DiAtom } from "react-icons/di";
// import Hello from './01/Hello';
// import MyClock from './02/MyClock';
import { RiHomeHeartFill } from "react-icons/ri";
import MyDiv1 from './03/MyDiv';


function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <MyClock />
    //   </header>
    // </div>
      <div className='flex flex-col w-full h-screen mx-auto'>
        <header className='flex justify-between items-center text-xl font-bold h-20 p-10 bg-slate-200'>
          <p>리액트 기초</p>
          <p> <RiHomeHeartFill /> </p>
        </header>

        <main className='grow w-full flex justify-center items-center overflow-y-auto'>
          <MyDiv1 />
        </main>

        <footer className='flex justify-center items-center h-20 bg-black text-slate-100'>
          Copyright stopman
        </footer>
      </div>
  );
}

export default App;
