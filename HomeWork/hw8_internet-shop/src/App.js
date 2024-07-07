import "./css/style.scss"; // npm i sass --save-dev
import { Helmet } from "react-helmet"; // npm install react-helmet npm install gatsby-plugin-react-helmet
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import CatalogPage from "./pages/CatalogPage";
import CartPage from "./pages/CartPage";
import RegistrationPage from "./pages/RegistrationPage";
import { CartProvider } from "./contexts/CartContext";


function App() {
  return (
    <>
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700;900&display=swap"
          rel="stylesheet"
        />
      </Helmet>      
      <CartProvider>
        <Router>
          <Routes>
            <Route path="/internet-shop_react/" element={<MainPage />} exact />
            <Route path="/internet-shop_react/catalog" element={<CatalogPage />} />
            <Route path="/internet-shop_react/cart" element={<CartPage />} />
            <Route path="/internet-shop_react/registration" element={<RegistrationPage />} />
          </Routes>
        </Router>
      </CartProvider>

    </>
  );
}

export default App;
