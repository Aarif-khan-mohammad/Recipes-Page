import {BrowserRouter , Route ,Switch} from 'react-router-dom'
import Home from './components/Home';
import Recipes from './components/Recipes';
import NotFound from './components/NotFound';
import './App.css';
import Veg from './components/Veg';
import NonVeg from './components/NonVeg';
import Starters from './components/Starters';
import Desserts from './components/Desserts';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/recipes/non-veg" component={NonVeg}/>
        <Route exact path="/recipes/veg" component={Veg}/>
        <Route exact path="/recipes/starters" component={Starters}/>
        <Route exact path="/recipes/desserts" component={Desserts}/>
        <Route exact path="/recipes" component={Recipes} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
