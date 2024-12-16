import logo from './logo.svg';
import './App.css';
import './styles.css';
import flower1 from "./flower1.png";
import tree from "./tree.png";

function App() {
  return (
        <div className="background">
            <div className = "plants" >
                <img src={tree} className="plantTwo" />
                <img src={flower1} className="plantOne" />
            </div>
        </div>
  );
}

export default App;
