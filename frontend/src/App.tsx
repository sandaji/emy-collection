import { Container } from "react-bootstrap";
import {
  Outlet,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  useLocation,
} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Header, Footer, ProtectedRoute } from "./components";
import {
  HomePage,
  ProductPage,
  CartPage,
  SigninPage,
  SignupPage,
  ShippingAddressPage,
  PaymentMethodPage,
  OrderPage,
  PlaceOrderPage,
  OrderHistoryPage,
} from "./pages";
import AdminHome from "./AdminDashboard/pages/Home";
import Navbar from "./AdminDashboard/components/Navbar";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} element={<HomePage />} />
      <Route path="product/:slug" element={<ProductPage />} />
      <Route path="cart" element={<CartPage />} />
      <Route path="signin" element={<SigninPage />} />
      <Route path="signup" element={<SignupPage />} />
      <Route path="" element={<ProtectedRoute />}>
        <Route path="shipping" element={<ShippingAddressPage />} />
        <Route path="payment" element={<PaymentMethodPage />} />
        <Route path="placeorder" element={<PlaceOrderPage />} />
        <Route path="/order/:id" element={<OrderPage />} />
        <Route path="/orderhistory" element={<OrderHistoryPage />} />
      </Route>
      <Route path="/admin" element={<AdminHome />} />

      {/* ... etc. */}
    </Route>
  )
);
const location = useLocation();

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <ToastContainer position="bottom-center" limit={1} />
      <header>
          
  
  if (location.pathname === "/admin") {
     <Navbar />
  } else {
     <Header />
  }
        
      </header>
      <main className="flex-fill">
        <Container className="mt-3">
          <Outlet />
        </Container>
      </main>
      <footer className="bg-dark text-secondary mt-auto">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
