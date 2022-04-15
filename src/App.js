import logo from './logo.svg';
import './App.css';
import HomeLI from './pages/HomeLI';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  if(localStorage.getItem('fiscalcode') != null){
    window.location.href = '/homelo'
  } 
  return (
    <HomeLI/>
  );
}

export default App;
