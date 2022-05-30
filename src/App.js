/**
 * App.js 
 */

import logo from './logo.svg';
import './App.css';

// there are two types of components:
//  -class
//  -function
function App() {
  // return is mandatory
  return (
    // return have only ONE object
    <div className="App">
      <header className="App-header">
        {/* todas as variaveis são envolvidas por chavetas */}
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <div>
        <p>
          Here,  we are going to do something useful...
        </p>
      </div>
      <footer>
        &copy; Vasco
      </footer>
    </div>
  );
}

export default App;
