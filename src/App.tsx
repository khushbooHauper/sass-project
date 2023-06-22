import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { Loader } from './components';
import ProductDetails from './pages/ProductDetailsPage';
import CategoryPage from './pages/CategoryPage';
import Men from './pages/Men';
import Women from './pages/Women';
import Kids from './pages/Kids';
import HomeFurnish from './pages/HomeFurnish';
import Beauty from './pages/Beauty';

const Home = lazy(() => import(/* webpackChunkName: "Home" */ './pages/Home'));
const Cart = lazy(() => import(/* webpackChunkName: "Cart" */ './pages/Cart'));
const About = lazy(() => import(/* webpackChunkName: "About" */ './pages/About'));
const Catalog = lazy(() => import(/* webpackChunkName: "Catalog" */ './pages/Catalog'));
const Favorites = lazy(() => import(/* webpackChunkName: "Favorites" */ './pages/Favorites'));
const ProductCard = lazy(() => import(/* webpackChunkName: "ProductCard" */ './pages/ProductCard'));
const Contacts = lazy(() => import(/* webpackChunkName: "Contacts" */ './pages/Contacts'));
const Refund = lazy(() => import(/* webpackChunkName: "Refund" */ './pages/Refund'));
const Delivery = lazy(() => import(/* webpackChunkName: "Delivery" */ './pages/Delivery'));

const App: React.FC = () => {
  return (
    <div className="wrapper">
      <div className="content">
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/product/:id" element={<ProductCard />} />
            <Route path="/refund" element={<Refund />} />
            <Route path="/delivery" element={<Delivery />} />
            <Route path='/productdetails/:id' element={<ProductDetails/>}/>
           <Route path='/:category/:title' element={<CategoryPage/>}/>
           <Route path='/men' element={<Men/>}/>
           <Route path='/women' element={<Women/>}/>
           <Route path='/kids' element={<Kids/>}/>
           <Route path='/home&furnishing' element={<HomeFurnish/>}/>
           <Route path='/beauty' element={<Beauty/>}/>
          </Routes>
        </Suspense>
      </div>
      
    </div>
  );
};

export default App;
