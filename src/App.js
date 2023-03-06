import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="App-container">
        <div className={"loginPanel"}>
            <h1 className={"loginName"}>Login</h1>
            <form className={"loginForm"}>
                <input type={"text"} placeholder={"Login"} className={"loginInput"}/>
                <input type={"text"} placeholder={"Password"} className={"loginInput"}/>

                <input type={"submit"} value={"Login"} className={"loginButton"}/>
            </form>
        </div>
      </div>
    </div>
  );
}

export default App;
