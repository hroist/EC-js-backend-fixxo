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
import LoginPage from "./pages/LoginPage";
import MyAccountPage from "./pages/MyAccountPage";
import AdminPage from "./pages/AdminPage";
import UserProvider from "./contexts/UserContext";



const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ShoppingCartProvider>
        <ProductProvider>
          <UserProvider>
            <Routes>
              <Route path="/" element={<StartPage />} />
              <Route path="/products" element={<ProductsPage />} />
              <Route path="/products/:id" element={<ProductDetailsPage />} />
              <Route path="/categories" element={<CategoriesPage />} />
              <Route path="/contacts" element={<ContactPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/account" element={<MyAccountPage />} />
              <Route path="/compare" element={<ComparePage />} />
              <Route path="/wishlist" element={<WishlistPage />} />
              <Route path="/shopping-cart" element={<ShoppingCartPage />} />
              <Route path="/search" element={<SearchPage />} />
              <Route path="/admin" element={<AdminPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </UserProvider>
        </ProductProvider>
      </ShoppingCartProvider>
      <Footer />  
    </BrowserRouter>
  );
}

export default App;
