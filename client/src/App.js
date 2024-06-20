import logo from './little-monkey-riding-motorcycle-white-background.png';
import './App.css';
import { ThemeContext, themes } from './components/theme';
import Header from './components/Header';
import { useState } from 'react';
import ApplicationWrapper from './components/ApplicationWrapper';



function App() {

  const [selectedTheme, setSelectedTheme] = useState(themes.light);

  const handleclick = () => {
    setSelectedTheme(selectedTheme === themes.dark ? themes.light : themes.dark);
  }

  return (
    <ThemeContext.Provider value={selectedTheme}>
      <div className="App">
      <ApplicationWrapper>
        <img src={logo} className="App-logo" alt="logo" />
        <br/>

        <Header />

        <button onClick={handleclick}>Click</button>
        </ApplicationWrapper>
      </div>
    </ThemeContext.Provider>
    
  );
}

export default App;
