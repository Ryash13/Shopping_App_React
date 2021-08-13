import './App.css';
import BrandSlider from './Components/BrandsSlider/BrandSlider';
import CarouselImageSlider from './Components/CarouselImageSlider/CarouselImageSlider';
import NavBar from './Components/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePageTheme from './Components/HomePageTheme/HomePageTheme';
import Footer from './Components/Footer/Footer';
import ScrollButton from './Components/ScrollButton/ScrollButton';

function App() {
  return (
    <div>
      <ScrollButton />
      <NavBar />
      <CarouselImageSlider />
      <BrandSlider />
      <HomePageTheme />
      <Footer />
    </div>
  );
}

export default App;
