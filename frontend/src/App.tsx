import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <ToastContainer position="bottom-center" limit={1} />
      <header>
        <Header />
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
