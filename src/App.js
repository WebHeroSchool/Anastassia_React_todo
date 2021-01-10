import logo from './logo.svg';
import './App.css';

const count = 17;
const name = true;
const sum = 9;
const flag = true;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
          <p style={{
              color: 'green'
          }}>
              Hello, World! Nice to meet you!
          </p>
          <p>
              {count}
          </p>
          <p>
              {5}
          </p>
          <p>
              {sum + 25}
          </p>
          <p>
              {flag && 'Flag is true'}
          </p>
          <p>
              {name ? 'Name is true' : 'Name is false'}
          </p>
          <p>
              {undefined}
              {null}
              {false}
              {true}
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
    </div>
  );
}

export default App;
