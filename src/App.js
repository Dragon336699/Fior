import './App.css';
import StartArea from './components/StartArea/startArea';
import About from './components/About/about'
import Reason from './components/reason/reason';
import Gallery from './components/Gallery/gallery';
import Customer from './components/Customer/customer';
import Arrange from './components/Arrange/arrange';
import Contact from './components/Contact/contact';
import Info from './components/Info/info';
import Footer from './components/Footer/footer';
function App() {
  return (
    <div className="App">
      <StartArea />
      <About />
      <Reason />
      <Gallery />
      <Customer />
      <Arrange />
      <Contact />
      <Info />
      <Footer />
    </div>
  );
}

export default App;
