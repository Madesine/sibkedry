import React, { useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setProducts } from "./features/products/products";

import "./App.css";

import Navbar from "./components/Navbar";
import ProductsPage from "./components/ProductsPage";
import About from "./components/About";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";
import Product from "./components/ProductDetailPage";

function App({ products }) {
  const dispatch = useDispatch();

  useEffect(() => {
    products.forEach((product, index) => (product.id = `product__${index}`));
    dispatch(setProducts(products));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Router>
      <header>
        <Navbar />
      </header>
      <main>
        <Route exact path="/" component={ProductsPage} />
        <Route exact path="/products" component={ProductsPage} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contacts" component={Contacts} />
        <Route exact path="/products/:id" component={Product} />
      </main>
      <footer
        style={{
          backgroundImage: `url(/assets/images/footer_bg.png)`,
        }}
      >
        <Footer />
      </footer>

      <nav className="socials">
        <ul>
          <li className="socials__container vk">
            <a
              aria-label="мы в вконтакте"
              href="https://vk.com/siberian_cedars_belarus"
            >
              <img
                src="/vk_icon-icons.com_66681.ico"
                alt="VK"
                width="36"
                height="36"
              />
            </a>
          </li>
          <li className="socials__container instagram">
            <a
              aria-label="мы в инстаграм"
              href="https://instagram.com/siberian_cedars?utm_medium=copy_link"
            >
              <img
                src="/Instagram_icon-icons.com_66804.ico"
                alt="Intafram"
                width="34"
                height="34"
              />
            </a>
          </li>
        </ul>
      </nav>
    </Router>
  );
}

export default App;
