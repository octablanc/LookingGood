import './App.css';
import { Route } from "react-router-dom";
import Landing from './components/Landing';
import Header from "./components/Header";
import NavBar from './components/NavBar';
import SearchBar from './components/SearchBar';
import Home from './components/Home';
import RecipeDetail from './components/RecipeDetail';
import FormRecipe from './components/FormRecipe';
import Options from './components/Options';

function App() {
  return (
    <div className="App">
      <Route exact path='/'>
        <Landing/>
      </Route>

      <Route exact path='/home'>
        <Header/>
        <NavBar/>
        <Home/>
      </Route>

      <Route exact path='/test'>
        <Options/>
      </Route>

      <Route exact path='/recipe/:Id'>
        <Header/>
        <NavBar/>
        <SearchBar/>
        <RecipeDetail/>
      </Route>

      <Route exact path='/create'> 
        <Header/>
        <NavBar/>
        <FormRecipe/>
      </Route>
    </div>
  );
}

export default App;