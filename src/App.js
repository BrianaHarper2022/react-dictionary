import Dictionary from "./Dictionary";
import './App.css';

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header text-center">Dictionary</header>
        <main>
          <Dictionary />
        </main>
        <footer className="app-footer text-center"><small>This project was built by Briana Harper</small></footer>
      </div>
    </div>
  );
}

