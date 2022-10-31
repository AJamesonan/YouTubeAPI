
import './App.css';
import Category from './views/catagorySelect';
import axios from 'axios';
import {
  Routes,
  Route,
  Link,
  useNavigate
} from "react-router-dom";
import YoutubeEmbed from './component/YoutubeEmbed';
function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Category/>
      </header>
    </div>
  );
}

export default App;
