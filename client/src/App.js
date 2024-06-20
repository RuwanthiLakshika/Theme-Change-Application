import logo from './little-monkey-riding-motorcycle-white-background.png';
import './App.css';
import { ThemeContext, themes } from './components/theme';
import Header from './components/Header';
import { useState } from 'react';



function App() {

  const [selectedTheme, setSelectedTheme] = useState(themes.light);

  const handleclick = () => {
    setSelectedTheme(themes.dark);
  }

  return (
    <ThemeContext.Provider value={selectedTheme}>
      <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <br/>

        <Header />

        <button onClick={handleclick}>Click</button>
      </header>
      </div>
    </ThemeContext.Provider>
    
  );
}

export default App;
