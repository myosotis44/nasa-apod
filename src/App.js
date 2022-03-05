import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import POD from './components/POD';
import SearchImage from './components/SearchImage';
import Moon from './components/Moon';
import UserList from './components/UserList';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/nasa-photo' element={<POD/>}/>
        <Route path='/search' element={<SearchImage/>}/>
        <Route path='*' element={<Home/>}/>
        <Route path='/moon' element={<Moon/>}/>
        <Route path='/favs' element={<UserList/>}/>
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
