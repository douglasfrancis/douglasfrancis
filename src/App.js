import './App.css';
import { Outlet } from 'react-router-dom';

import Menu from './Menu';
import Footer from './Footer'

function App() {
  return (
        <div className="App">
      <Menu />
      

      <Outlet />

      <Footer />
    </div>
  );
}

export default App;
