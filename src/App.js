import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import "./custom.scss";
import EventsDetails from "./pages/events-details/events-details";
import Landing from "./pages/landing/landing";
import Login from "./pages/login/login";
import NotFound from "./pages/not-found/not-found";
import Opinions from "./pages/opinions/opinions";
import PrivacyPolicy from "./pages/privacy-policy/privacy-policy";
import TermsAndConditions from "./pages/terms-conditions/terms-conditions";
import BoxPage from "./pages/users-pages/box/box-pages";
import UsersPage from "./pages/users-pages/private-users/priv-users";
import EventsPages from "./pages/users-pages/users/events-pages";
import Validate from "./pages/validate/validate";
import PrivateRoute from "./routes/private/private-route";
import PrivateUserRoute from "./routes/private/private-users-route";
//import Footer from './components/footer';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/validate" element={<Validate />}></Route>
        <Route path="/events" element={<EventsPages />}></Route>
        <Route path="/events/:evname" element={<EventsDetails />}></Route>
        <Route
          path="/boxes"
          element={
            <PrivateRoute>
              <BoxPage />
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="/users"
          element={
            <PrivateUserRoute>
              <UsersPage />
            </PrivateUserRoute>
          }
        ></Route>
        <Route path="/opinions" element={<Opinions />}></Route>
        <Route path="/privatepolicy" element={<PrivacyPolicy />}></Route>
        <Route
          path="/termsandconditions"
          element={<TermsAndConditions />}
        ></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
