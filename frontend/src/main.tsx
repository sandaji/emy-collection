import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './App'
import './index.css'
import HomePage from './pages/HomePage'
import ProductPage from './pages/ProductPage'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { StoreProvider } from './Store'
import CartPage from './pages/CartPage'
import SigninPage from './pages/SigninPage'
import SignupPage from './pages/SignupPage'
import ShippingAddressPage from './pages/ShippingAddressPage'
import PaymentMethodPage from './pages/PaymentMethodPage'
import ProtectedRoute from './components/ProtectedRoute'
import PlaceOrderPage from './pages/PlaceOrderPage'
import OrderPage from './pages/OrderPage'
import { PayPalScriptProvider } from '@paypal/react-paypal-js'
import OrderHistoryPage from './pages/OrderHistoryPage'
import AdminDashboard from './pages/AdminDashboard'
// import Team from './Dashboard/scenes/Team'
// import Contacts from './Dashboard/scenes/Contacts'
// import Invoices from './Dashboard/scenes/Invoices'
// import Form from './Dashboard/scenes/Form'
// import Bar from './Dashboard/scenes/Bar'
// import Pie from './Dashboard/scenes/Pie'
// import Line from './Dashboard/scenes/Line'
// import FAQ from './Dashboard/scenes/Faq'
// import Calendar from './Dashboard/scenes/calendar'
// import Geography from './Dashboard/scenes/Geography'

const router = createBrowserRouter(
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
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/dashboard" element={<AdminDashboard />} />
        {/* <Route path="/team" element={<Team />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/invoices" element={<Invoices />} />
        <Route path="/form" element={<Form />} />
        <Route path="/bar" element={<Bar />} />
        <Route path="/pie" element={<Pie />} />
        <Route path="/line" element={<Line />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/calendar" element={<Calendar />} />

        <Route path="/geography" element={<Geography />} /> */}
      </Route>

      {/* ... etc. */}
    </Route>
  )
);

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <StoreProvider>
      <PayPalScriptProvider options={{ 'client-id': 'sb' }} deferLoading={true}>
        <HelmetProvider>
          <QueryClientProvider client={queryClient}>
            <RouterProvider router={router} />
            <ReactQueryDevtools initialIsOpen={false} />
          </QueryClientProvider>
        </HelmetProvider>
      </PayPalScriptProvider>
    </StoreProvider>
  </React.StrictMode>
)
