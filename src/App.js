import logo from './logo.svg';
import './App.css';
import ImageSlider from './components/ImageSlider';
import { SliderData } from './components/SliderData';

function App() {
  return (
    <div className="App">
      <ImageSlider slides={SliderData}></ImageSlider>
      <div style={{margin:'100px'}} className="">
        <img src={logo} className="App-logo" alt="logo" />
      </div>
    </div>
  );
}

export default App;
