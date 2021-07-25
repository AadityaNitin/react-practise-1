import './App.css';
import Navbar from './navbar';
import Home from './home';

function App() {
  const title = 'Welcome to the New Blog';
  const likes = 50;
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Home />
      </div>
    </div>
  );
}

export default App;
