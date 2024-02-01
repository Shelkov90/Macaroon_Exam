import './App.css';
import Footer from './components/footer/Footer';
import Header from './components/header/Header'
import Main from './components/main/Main';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Guarantee from './components/header/Guarantee';
import Delivery from './components/header/Delivery';
import Wholesale from './components/header/Wholesale';
import Contacts from './components/header/Contacts';



function App() {
  return (
    <div class="container-fluid bg-gray-100 flex flex-col justify-between min-h-screen">
<Router>
        <Header />
        <Routes>
          <Route path="/Guarantee" element={<Guarantee />} />
          <Route path="/Delivery" element={<Delivery />} />
          <Route path="/Wholesale" element={<Wholesale />} />
          <Route path="/Contacts" element={<Contacts />} />
        </Routes>
        <Main />
        <Footer />
</Router>
    </div>
  );
}

export default App;
