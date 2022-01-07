import logo from './logo.svg';
import './App.css';
import Header from './components/Header.js';
import Main from './components/Main.js';
import Footer from './components/Footer.js';

function App() {
    return (
        <div className="d-flex flex-column h-100">
            <Header />
            <Main />
            <Footer />
        </div>
  );
}

export default App;
