import logo from './logo.svg';
import './App.css';

/**
 * 関数コンポーネント
 * 引数としてプロパティ 情報(props)を受け取り、
 * 戻り値としてReact要素を返す
 */
function App(props) {
  return (
    <div className="App">
      <header className="App-header">
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
    </div>
  );
}

export default App;
