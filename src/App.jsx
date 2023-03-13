import styles from "./style";
import { Billing, Business, CardDeal, Clients, Footer, Navbar, Stats, Testimonials, Hero } from "./components";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home/Home"
import { History } from "./pages/History/History";
const App = () => (

  <div className="bg-primary w-full overflow-hidden">
    //can you make me history payment for react app and use tailwind css use the bg-primmary from tailwand component?
    {/* <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>

    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Stats />
        <Business />
        <Billing />
        <CardDeal />
        <Testimonials />
        <Clients />
        <CTA />
        <Footer />
      </div>
    </div> */}
    <BrowserRouter>
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
    </BrowserRouter>
  </div>
);

export default App;
