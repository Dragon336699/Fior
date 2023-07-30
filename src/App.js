import './App.css';
import StartArea from './components/StartArea/startArea';
import About from './components/About/about'
import Reason from './components/reason/reason';
import Gallery from './components/Gallery/gallery';
import Customer from './components/Customer/customer';
function App() {
  return (
    <div className="App">
      <StartArea />
      <About />
      <Reason />
      <Gallery />
      <Customer />
    </div>
  );
}

export default App;
