import { Container } from "react-bootstrap";
import {
  Outlet,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  useLocation,
} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Header, Footer, ProtectedRoute } from "../../client/src/components";
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
} from "../../client/src/pages";
import AdminHome from "./AdminDashboard/pages/Home";
import AdminNavbar from "./AdminDashboard/components/Navbar";

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

function App() {
  const location = useLocation();

  return (
    <div className="d-flex flex-column min-vh-100">
      <ToastContainer position="bottom-center" limit={1} />
      <header>
        {location.pathname === "/admin" ? <AdminNavbar /> : <Header />}
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
