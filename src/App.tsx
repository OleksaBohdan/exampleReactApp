import { Route, Routes } from 'react-router-dom';
import { AboutPage } from './pages/AboutPage';
import { ProductPage } from './pages/ProductsPage';
import { Navigation } from './components/Navigation';

function App() {
  return (
    <>
      <Navigation />

      <Routes>
        <Route path="/" element={<ProductPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </>
  );
}

export default App;
