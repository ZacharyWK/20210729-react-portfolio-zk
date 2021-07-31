import './css/App.css';

import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Header from './components/Header';

import Home from './components/pages/Home'; 
import ProjectPost from './components/pages/ProjectPost'; 
import Post from './components/pages/Post'; 
import Contact from './components/pages/Contact'; 
import About from './components/pages/About'; 

import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
        <Header/>
            <Switch>
                <Route component={ Home } exact path='/' />
                <Route component={ About } path='/about'/>
                <Route component={ Contact } path='/contact'/>
                <Route component={ ProjectPost } path='/project/:slug'/>
                <Route component={ Post } path='/projects'/>
            </Switch>
        <Footer/>
        </BrowserRouter>

    </div>
  );
}

export default App;
