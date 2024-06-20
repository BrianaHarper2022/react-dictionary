import Dictionary from "./Dictionary";
import './App.css';

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header text-center">Dictionary</header>
        <main>
          <Dictionary defaultKeyword="love"/>
        </main>
        <footer className="app-footer text-center">This project was built by <a href="https://github.com/BrianaHarper2022" target="_blank"
            rel="noopener noreferrer">Briana Harper</a> and is <a href="https://github.com/BrianaHarper2022?tab=repositories" target="_blank" rel="noopener noreferrer">open-sourced on Github</a> and <a href="https://dictionary-react-addon.netlify.app/" target="_blank" rel="noopener noreferrer">hosted on Netlify</a></footer>
      </div>
    </div>
  );
}

