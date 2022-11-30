import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import ContactPage from './pages/ContactPage';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './pages/Login';

function App() {

  // const [id, setId] = useState(0);

  return (
    <div className="App">

      {/* {
        id === null &&
        <Login />
      } */}

      <Router>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/Salary/:id" element={<Home />} />
          <Route exact path="/ContactPage" element={<ContactPage />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
