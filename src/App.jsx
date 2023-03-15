import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home/Home"
import { History } from "./pages/History/History";
import Login from "./pages/Login/Login";
import { Profile } from "./pages/Profile/Profile";
const App = () => (
  <>
    <BrowserRouter  >
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/login"
          element={<Login />}
        />
        <Route
          path="/pembayaran"
          element={<History />}
        />
        <Route
          path="/profile"
          element={<Profile />}
        />
      </Routes>
    </BrowserRouter >
  </>
);

export default App;
