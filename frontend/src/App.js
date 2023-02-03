
import './App.css';
import { useState } from 'react';
import LandingPage from './Acessable/LandingPage';
import SignupPage from './Acessable/Signup';
import Public from './Acessable/Public';
// import DesktopLandingpage from './DesktopAssets/DesktopLandingpage';

function App() {
  const [content, setcontent] = useState(<Public/>)
  const [Login, setLogin] = useState(true)

  return (
    
    <div className="App">
      
            {content}

    </div>
  );
}

export default App;
