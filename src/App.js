import './App.css';
import Footer from './components/footer/Footer';
import Header from './components/header/Header'
import Main from './components/main/Main';


function App() {
  return (
    <div class="container-fluid bg-gray-100 flex flex-col justify-between min-h-screen">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
