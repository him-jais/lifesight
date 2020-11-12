import './App.css';
import { BrowserRouter, Route, Link ,Switch} from 'react-router-dom'
import Selectchannel from './component/selectChannel'
function App() {
  return (
    <BrowserRouter>
    <div>
     
      <Switch>
      <Route path="/" component={Selectchannel} exact={true} />
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
