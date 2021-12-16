import styles from './App.module.css';
import About from './components/about/About';
import Main from './components/Main';
import Shop from './components/shop/Shop';
import Shop2 from './components/shop2/Shop2';
import SingleProduct from './components/singleProduct/SingleProduct';
import {Routes, Route, BrowserRouter } from "react-router-dom";


const App = () => {
  return (
    <BrowserRouter>
      <div className={styles.container}>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/about" element={<About />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/shop2" element={<Shop2 />} />
          <Route path="/single" element={<SingleProduct />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
