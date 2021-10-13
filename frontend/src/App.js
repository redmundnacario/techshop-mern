// import logo from './logo.svg';

import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Route } from "react-router-dom";

import HomePage from "./pages/Products/Home.page.jsx";
import ProductPage from "./pages/Products/Product.page.jsx";
import Header from "./components/template/Header/Header.component";
import Footer from "./components/template/Footer/Footer.component";

function App() {
    return (
        <Router>
            <Header />
            <main className="App py-3">
                <Container className="h-100">
                    <Route path="/" component={HomePage} exact />
                    <Route path="/products/:id" component={ProductPage} />
                </Container>
            </main>
            <Footer />
        </Router>
    );
}

export default App;
