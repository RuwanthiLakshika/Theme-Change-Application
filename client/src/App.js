import logo from './little-monkey-riding-motorcycle-white-background.png';
import './App.css';



function App() {
  const handleclick = () => {
  
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <br/>
        <p>Welcome to the Theme Change Application</p>
        <button onclick={handleclick}>Click</button>
      </header>
    </div>
  );
}

export default App;
