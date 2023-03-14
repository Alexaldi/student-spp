import styles from "./style";
import { Billing, Business, CardDeal, Clients, Footer, Navbar, Stats, Testimonials, Hero } from "./components";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home/Home"
import { History } from "./pages/History/History";
const App = () => (
  <>
    <BrowserRouter  >
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/pembayaran"
          element={<History />}
        />
      </Routes>
    </BrowserRouter >
  </>
);

export default App;
