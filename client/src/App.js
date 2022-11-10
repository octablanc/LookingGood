import './App.css';
import { Route } from "react-router-dom";
import Header from "./components/Header";
import NavBar from './components/NavBar';
import Home from './components/Home';
import FormRecipe from './components/FormRecipe';

function App() {
  return (
    <div className="App">
      <Header/>
      <Route path='/'>
        <NavBar/>
      </Route>

      <Route exact path='/home'>
        <Home/>
      </Route>

      <Route exact path='/create'> 
        <FormRecipe/>
      </Route>
    </div>
  );
}

export default App;
