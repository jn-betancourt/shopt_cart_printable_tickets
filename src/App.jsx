import "./styles/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarComponent from "./components/Navbar";
import { Container } from "react-bootstrap";
import {  BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Cancel from "./pages/Cancel";
import Store from "./pages/Store";
import Success from "./pages/Success";
import CartProvider from "./storage/CartContext";
import TicketCard from "./components/printable_ticket/TicketCard";

function App() {
  return (
    <>
      <CartProvider>
        <Container>
          <Router>
          <NavbarComponent></NavbarComponent>
            <Routes>
              <Route index element={<Store />} />
              <Route path="ticket" element={<TicketCard />} />
              <Route path="success" element={<Success />} />
              <Route path="cancel" element={<Cancel />} />
            </Routes>
          </Router>
        </Container>
      </CartProvider>
    </>
  );
}

export default App;
