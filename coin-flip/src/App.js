
import './App.css';
import Game from'./Game'
import sides from "./sides"

function App() {
  return (
    <div className="App">
      <h1>Coin FLip</h1>
      <Game sides={sides}/>
    </div>
  );
}

export default App;
