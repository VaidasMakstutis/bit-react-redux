import './App.css';
import Boys from './Components/Boys';
import Girls from './Components/Girls';

function App() {
  return (
    <div className="App">
        <h1>Boys & Girls</h1>
        <div className='cols'>
          <Boys></Boys>
          <Girls></Girls>
        </div>
    </div>
  );
}

export default App;
