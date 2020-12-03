import Button from  './components/Button.js';
import FormInput from './components/FormInput.js';

function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          List of Employees
        </p>

      <div><Button onClick={() => FormInput}> Add New Employee </Button></div>
      </header>
    </div>
  );
}

export default Home;
