import './App.css';
import { Route } from "react-router-dom";
import FormRecipe from './components/FormRecipe';

function App() {
  return (
    <div className="App">
      <Route exact path="/create" render={()=> FormRecipe()}/>
    </div>
  );
}

export default App;
