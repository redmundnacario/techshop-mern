// import logo from './logo.svg';

import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Route } from "react-router-dom";

import HomePage from "./pages/Products/Home.page.jsx";
import ProductPage from "./pages/Products/Product.page.jsx";
import CartPage from "./pages/Cart/Cart.page.jsx";
import Header from "./components/template/Header/Header.component";
import Footer from "./components/template/Footer/Footer.component";

function App() {
    return (
        <Router>
            <Header />
            <main className="App py-3 container">
                <div className="contentHolder">
                    <Route path="/" component={HomePage} exact />
                    <Route path="/products/:id" component={ProductPage} />
                    <Route path="/cart" component={CartPage} />
                </div>
            </main>
            <Footer />
        </Router>
    );
}

export default App;
