import './App.css';
import AddNew from './components/AddNew';
import AllEmployees from './components/AllEmployees';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/addNew">Add New Employee</Link></li>
            <li><Link to="/employees">Employees</Link></li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/addNew">
            <AddNew />
          </Route>
          <Route path="/employees">
            <AllEmployees />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {

  return (
    <div>
     <h2>Home</h2>
        <p>
        This is the landing component where you can then select fromthe top navigation to add a new employee or see the list of all employees
        </p>



    </div>
  );
}
