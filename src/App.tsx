import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Cart } from "./components/Cart";
import { HomePage } from "./pages/HomePage";
import { CatalogPage } from "./pages/CatalogPage";
import { ProductPage } from "./pages/ProductPage";
import { AboutPage } from "./pages/AboutPage";
import { ContactsPage } from "./pages/ContactsPage";
import { DeliveryPage } from "./pages/DeliveryPage";
import { PromotionsPage } from "./pages/PromotionsPage";
import { WarrantyPage } from "./pages/WarrantyPage";
import { FavoritesPage } from "./pages/FavoritesPage";
import { PrivacyPage } from "./pages/PrivacyPage";
import { LoginPage } from "./pages/LoginPage";
import { RegisterPage } from "./pages/RegisterPage";
import { CheckoutPage } from "./pages/CheckoutPage";
import { ProfilePage } from "./pages/ProfilePage";
import { Product } from "./data/products";
import { CartItem, SortOption, User } from "./types";

function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Все категории");
  const [sortBy, setSortBy] = useState<SortOption>("default");
  const [inStockOnly, setInStockOnly] = useState(false);
  const [user, setUser] = useState<User | null>(null);

  const addToCart = (product: Product) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const updateQuantity = (id: number, quantity: number) => {
    // БАГ: позволяет устанавливать количество 0 и меньше
    setCartItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, quantity } : item))
    );
  };

  const removeItem = (id: number) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const clearCart = () => {
    // БАГ: иногда не очищает полностью (оставляет первый элемент)
    if (cartItems.length > 2) {
      setCartItems([cartItems[0]]);
    } else {
      setCartItems([]);
    }
  };

  const resetFilters = () => {
    setSelectedCategory("Все категории");
    setSortBy("default");
    // БАГ: не сбрасывает inStockOnly
    setSearchQuery("");
  };

  const handleLogin = (loggedUser: User) => {
    setUser(loggedUser);
  };

  const handleLogout = () => {
    setUser(null);
  };

  const handleUpdateUser = (updatedUser: User) => {
    setUser(updatedUser);
  };

  const cartItemsCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col bg-gray-50">
        <Header
          cartItemsCount={cartItemsCount}
          onCartClick={() => setIsCartOpen(true)}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          user={user}
        />

        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage onAddToCart={addToCart} />} />
            <Route
              path="/catalog"
              element={
                <CatalogPage
                  onAddToCart={addToCart}
                  searchQuery={searchQuery}
                  selectedCategory={selectedCategory}
                  onCategoryChange={setSelectedCategory}
                  sortBy={sortBy}
                  onSortChange={setSortBy}
                  inStockOnly={inStockOnly}
                  onInStockChange={setInStockOnly}
                  onResetFilters={resetFilters}
                />
              }
            />
            <Route path="/product/:id" element={<ProductPage onAddToCart={addToCart} />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contacts" element={<ContactsPage />} />
            <Route path="/delivery" element={<DeliveryPage />} />
            <Route path="/promotions" element={<PromotionsPage onAddToCart={addToCart} />} />
            <Route path="/warranty" element={<WarrantyPage />} />
            <Route path="/favorites" element={<FavoritesPage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
            <Route path="/register" element={<RegisterPage onRegister={handleLogin} />} />
            <Route 
              path="/checkout" 
              element={
                <CheckoutPage 
                  cartItems={cartItems} 
                  user={user} 
                  onClearCart={clearCart} 
                />
              } 
            />
            <Route 
              path="/profile" 
              element={
                <ProfilePage 
                  user={user} 
                  onLogout={handleLogout}
                  onUpdateUser={handleUpdateUser}
                />
              } 
            />
          </Routes>
        </main>

        <Footer />

        <Cart
          isOpen={isCartOpen}
          onClose={() => setIsCartOpen(false)}
          items={cartItems}
          onUpdateQuantity={updateQuantity}
          onRemoveItem={removeItem}
        />
      </div>
    </BrowserRouter>
  );
}

export default App;
