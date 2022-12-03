import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import Login from './pages/Login';
import { useState } from 'react';
import axios from 'axios';

function App() {

  const [uid, setId] = useState(0);

  const loginMethod = async (user) => {
    const result = await axios.post("http://localhost:8080/Project1-1.0-SNAPSHOT/api/employee/login", user).catch(error => { alert("Login Failed...Retry") });

    if (result.status === 200) {

      setId(result.data.employee_id);
    }
  }

  return (
    <div className="App">

      {
        uid === 0 &&
        <Login method={loginMethod} logout={setId} />
      }

      {
        uid !== 0 &&
        <Home id={uid} logout={setId} />
      }

    </div>
  );
}

export default App;