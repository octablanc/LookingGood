import './App.css';
import { Route } from "react-router-dom";
import NavBar from './components/NavBar';
import Home from './components/Home';
import FormRecipe from './components/FormRecipe';

function App() {
  return (
    <div className="App">
      <header></header>
      <Route path='/' render={()=> NavBar()}/>

      <Route exact path='/home' render={()=> Home()}/>

      <Route exact path='/create' render={()=> FormRecipe()}/>
    </div>
  );
}

export default App;
