import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Pages/HomePage/Home';
import Services from './Pages/Services/Services';
import Products from './Pages/Products/Products';
import SignUp from './Pages/SignUp/SignUp';
import Footer from './Pages/Footer/Footer';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/Services'component={Services} />
        <Route path='/Products'component={Products} />
        <Route path='/SignUp'component={SignUp} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
