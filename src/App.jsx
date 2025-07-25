import './App.css';
import { HelmetProvider } from 'react-helmet-async';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home/home.jsx';
import About from './pages/about/about.jsx';
import Protest from './pages/protest/protest.jsx';
import Stories from './pages/stories/stories.jsx';
import Reachout from './pages/reachout/reachout.jsx';

function App() {
  return (
    <HelmetProvider>
      <div className="app">
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/about' element={<About />}/>
            <Route path='/protest' element={<Protest />}/>
            <Route path='/stories' element={<Stories />}/>
            <Route path='/reachout' element={<Reachout />}/>
        </Routes>
      </div>
    </HelmetProvider>
  )
}

export default App;
