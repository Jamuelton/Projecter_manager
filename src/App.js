import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './Components/Pages/Home';
import Contact from './Components/Pages/Contact';
import NewProject from './Components/Pages/NewProject';
import Company from './Components/Pages/Company'
import Project from './Components/Pages/Project';

import Container from './Components/Layout/Container';
import Footer from './Components/Layout/Footer';
import NavBar from './Components/Layout/NavBar';


function App() {
  return (
    <Router>
      
      <NavBar/>

      <Container customClass="min-height">
        <Routes>

          <Route exact path='/' element={<Home/>}></Route>
          <Route exact path='/contact' element={<Contact/>}></Route>
          <Route exact path='/project' element={<Project/>}></Route>
          <Route exact path='/company' element={<Company/>}></Route>
          <Route exact path='/newProject' element={<NewProject/>}></Route>

        </Routes>
      </Container>
     
      <Footer/>

    </Router>
  );
}

export default App;
