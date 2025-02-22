import './App.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import {
  HashRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';

import Onboarding from "./pages/Onboarding";
import Login from "./pages/Login";
import Feed from "./pages/Feed";
import Storyview from './pages/Storyview';
import Desafios from './pages/Desafios';
import Criar from './pages/Criar';
import Menu from './pages/Menu';
import Profile from './pages/Profile';

function App() {
  return (
    <div id='main-screen'>
      <div className='App'>
          <Router>
            <Routes>
                <Route exact path='/' element={<Onboarding />} />
                <Route exact path='/login' element={<Login />} />
                <Route exact path='/feed' element={<Feed />} />
                <Route exact path='/stories' element={<Storyview />} />
                <Route exact path='/desafios' element={<Desafios />} />
                <Route exact path='/criar-desafio' element={<Criar />} />
                <Route exact path='/menu' element={<Menu />} />
                <Route exact path='/perfil' element={<Profile />} />
            </Routes>
          </Router>
      </div>
    </div>
  );
}

export default App;
