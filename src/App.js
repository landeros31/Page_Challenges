import './App.css';
import Context from './Context/Context';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Main from './Components/main/Main';

function App() {
  return (
    
    <Context>
    <Header/>
    <Main/>
    <Footer/>
    </Context>
  );
}

export default App;
