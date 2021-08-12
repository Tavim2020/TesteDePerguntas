import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/pages/Home';
import Footer from './components/Footer/Footer';



function App() {
  return (
    <BrowserRouter>
      <div className={'body'}>
        <Header />
        <Switch>
          <Route path={'/'} component={Home} />
        </Switch>
        <Footer /> 
      </div>  
    </BrowserRouter>
  );
}

export default App;
