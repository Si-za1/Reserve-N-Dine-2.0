import React from 'react';
import './App.css';
import Home from './components/pages/HomePage/Home';
import Services from './components/pages/Services/Services';
import Products from './components/pages/Products/Products';
import Menu from './components/pages/Menu/Menu';
import Register from './components/pages/SignUp/SignUp';
import Login from './components/pages/Login/Login';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Cart from './components/pages/Cart/Cart';
import Chatbot from './components/pages/Chatbot/Chatbot';
import Footer from './components/pages/Footer/Footer';


function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/services' component={Services} />
        <Route path='/products' component={Products} />
        <Route path='/menu' component={Menu} />
        <Route path='/cart' component={Cart} />
        <Route path='/register' component={Register} />
        <Route path='/log-in' component={Login} />
        <Route path='/Chatbot' component={Chatbot} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;