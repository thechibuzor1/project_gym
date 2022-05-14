import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./pages/Home/Home";
import Join from "./pages/JoinUs/JoinUs";
import ProductScreen from "./screens/ProductScreen";
import FeatureHome from "./components/FeatureHome";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navbarextend from "./components/Navbarextend";
import Media from "./pages/Media/Media";
import ShopApp from "./ShopApp";
import HomeScreen from "./screens/HomeScreen";
import CartScreen from "./screens/CartScreen";
import SigninScreen from "./screens/SigninScreen";
import SignupScreen from "./screens/SignupScreen";
import ShippingAddressScreen from "./screens/ShippingAddressScreen";
import PaymentMethodScreen from "./screens/PaymentMethodScreen";
import PlaceOrderScreen from "./screens/PlaceOrderScreen";
import OrderScreen from "./screens/OrderScreen";
import ProfileScreen from "./screens/ProfileScreen";
import ProtectedRoute from "./components/ProtectedRoute";
import DashboardScreen from "./screens/DashboardScreen";
import AdminRoute from "./components/AdminRoute";
import ProductListScreen from "./screens/ProductListScreen";
import ProductEditScreen from "./screens/ProductEditScreen";
import OrderListScreen from "./screens/OrderListScreen";
import UserListScreen from "./screens/UserListScreen";
import UserEditScreen from "./screens/UserEditScreen";
import PageNotFound from "./screens/PageNotFound";
import Success from "./screens/successScreen";
import Video from "./components/video";


function App() {
  return (
    <Router>
      <Navbarextend />
      <ToastContainer position="bottom-center" limit={1} />
      <Routes>
        <Route path="/paystack" element={<paystackScreen />} />
        <Route path="/Signin" element={<SigninScreen />} />
        <Route path="/Signup" element={<SignupScreen />} />
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <ProfileScreen />
            </ProtectedRoute>
          }
        />
        <Route path="/Shipping" element={<ShippingAddressScreen />} />
        <Route path="/Payment" element={<PaymentMethodScreen />} />
        <Route path="/Placeorder" element={<PlaceOrderScreen />} />
        <Route
          path="/order/:id"
          element={
            <ProtectedRoute>
              <OrderScreen />
            </ProtectedRoute>
          }
        />
        <Route path="/Success" element={<Success/>} />
        <Route path="/video" element={<Video />} />
        <Route path="/cart" element={<CartScreen />} />
        <Route path="/HomeScreen" element={<HomeScreen />} />
        <Route path="/ShopApp" element={<ShopApp />} />
        <Route path="/product/:slug" element={<ProductScreen />} />

        {/* Admin Routes */}
        <Route
          path="/admin/dashboard"
          element={
            <AdminRoute>
              <DashboardScreen />
            </AdminRoute>
          }
        />
        <Route
          path="/admin/products"
          element={
            <AdminRoute>
              <ProductListScreen />
            </AdminRoute>
          }
        />
        <Route
          path="/admin/product/:id"
          element={
            <AdminRoute>
              <ProductEditScreen />
            </AdminRoute>
          }
        />
        <Route
          path="/admin/orders"
          element={
            <AdminRoute>
              <OrderListScreen />
            </AdminRoute>
          }
        />
        <Route
          path="/admin/users"
          element={
            <AdminRoute>
              <UserListScreen />
            </AdminRoute>
          }
        />
        <Route
          path="/admin/user/:id"
          element={
            <AdminRoute>
              <UserEditScreen />
            </AdminRoute>
          }
        />

        <Route path="/" element={<Home />} />
        <Route path="*" element={<PageNotFound/>} />
        <Route path="/Explore" element={<Media />} />
        <Route path="/FeatureHome" element={<FeatureHome />} />
        <Route path="/Join" element={<Join />} />
      </Routes>
    </Router>
  );
}

export default App;
