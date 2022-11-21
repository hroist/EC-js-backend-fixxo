import "./App.min.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ShoppingCartProvider } from './contexts/ShoppingCartContext';
import { ProductProvider } from './contexts/ProductContext';
import StartPage from './pages/StartPage';
import ProductsPage from './pages/ProductsPage';
import ProductDetailsPage from './pages/ProductDetailsPage';
import CategoriesPage from './pages/CategoriesPage';
import ContactPage from './pages/ContactPage';
import ComparePage from './pages/ComparePage';
import WishlistPage from './pages/WishlistPage';
import ShoppingCartPage from './pages/ShoppingCartPage';
import SearchPage from './pages/SearchPage';
import NotFoundPage from './pages/NotFoundPage';
import Footer from './sections/Footer';



function App() {
  return (
    <BrowserRouter>
      <ShoppingCartProvider>
        <ProductProvider>
          <Routes>
            <Route path="/" element={<StartPage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/products/:id" element={<ProductDetailsPage />} />
            <Route path="/categories" element={<CategoriesPage />} />
            <Route path="/contacts" element={<ContactPage />} />
            <Route path="/compare" element={<ComparePage />} />
            <Route path="/wishlist" element={<WishlistPage />} />
            <Route path="/shopping-cart" element={<ShoppingCartPage />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </ProductProvider>
      </ShoppingCartProvider>
      <Footer />  
    </BrowserRouter>
  );
}

export default App;
