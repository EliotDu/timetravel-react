import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';

// 以下為各頁面元件
import Home from './pages/Home';
import ProductList from './pages/product/ProductList';
import Itinerary from './pages/product/itinerary/Itinerary';
import Site from './pages/product/itinerary/Site';
import SiteDetail from './pages/product/itinerary/Site-detail';
import Food from './pages/product/food/Food';
import FoodDetail from './pages/product/food/FoodDetail';
import Stays from './pages/product/stays/Stays';
import Ticket from './pages/product/ticket/Ticket';
import LogIn from './pages/member/LogIn';
import Profile from './pages/member/Profile';
import SignIn from './pages/member/SignIn';
import ForgetPassword from './pages/member/ForgetPassword';
import ResetPassword from './pages/member/ResetPassword';
import TicketQRcode from './pages/member/TicketQRcode';
import Comment from './pages/member/Comment';
import Collect from './pages/member/Collect';
import Cart from './pages/cart/Cart';
import ItineraryDetail from './pages/product/itinerary/Itinerary-detail';

function App() {
  return (
    <BrowserRouter>
      {/* 路由表 */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="productList" element={<ProductList />} />
        <Route path="itinerary" element={<Itinerary />} />
        <Route path="itinerary/:sid" element={<ItineraryDetail />} />
        <Route path="site" element={<Site />} />
        <Route path="site/:sid" element={<SiteDetail />} />
        <Route path="food" element={<Food />} />
        <Route path="food/detail" element={<FoodDetail />} />
        <Route path="stays" element={<Stays />} />
        <Route path="ticket" element={<Ticket />} />
        <Route path="logIn" element={<LogIn />} />
        <Route path="forget_password" element={<ForgetPassword />} />
        <Route path="profile" element={<Profile />} />
        <Route path="reset_password" element={<ResetPassword />} />
        <Route path="ticket_qrcode" element={<TicketQRcode />} />
        <Route path="comment" element={<Comment />} />
        <Route path="collect" element={<Collect />} />
        <Route path="signIn" element={<SignIn />} />
        <Route path="cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
