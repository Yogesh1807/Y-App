import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Welcome to Y-app Personal Web App</p>
        <a
          className="App-link"
          href="https://www.youtube.com/c/YogeshSatale"
          target="_blank"
          rel="noopener noreferrer"
        >
          Youtube Channel
        </a>
      </header>
    </div>
  );
}

export default App;
