import './App.css';
import { Route } from "react-router-dom";
import Header from "./components/Header";
import NavBar from './components/NavBar';
import Home from './components/Home';
import RecipeDetail from './components/RecipeDetail';
import FormRecipe from './components/FormRecipe';
import Spinner from './components/Spinner';

function App() {
  return (
    <div className="App">
      <Route path='/'>
        <Header/>
        <NavBar/>
      </Route>

      <Route exact path='/home'>
        <Home/>
      </Route>

      <Route exact path='/recipe/:Id'>
        <RecipeDetail/>
      </Route>

      <Route exact path='/create'> 
        <FormRecipe/>
      </Route>
    </div>
  );
}

export default App;
