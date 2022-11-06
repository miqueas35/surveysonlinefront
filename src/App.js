import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Admin from './pages/Admin/Admin';
import Error404 from './pages/Error404/Error404';
import HomePage from './pages/Home/HomePage';
import Login from './pages/Login/Login';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='login' element={<Login/>} />
        <Route path='admin' element={<Admin/>} />
        <Route path='*' element={<Error404/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
