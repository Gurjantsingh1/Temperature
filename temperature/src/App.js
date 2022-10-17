import logo from './logo.svg';
import './App.css';
import Temperature from './Temperature';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
           <h1>Temperature control system</h1>
       
         <Temperature />
      </header>
    </div>
  );
}

export default App;
