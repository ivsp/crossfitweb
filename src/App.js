import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import "./custom.scss";
import Landing from "./pages/landing/landing";
import Login from "./pages/login/login";
import UsersPage from "./pages/users-pages/users/users-pages";
import Validate from "./pages/validate/validate";
//import Footer from './components/footer';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/validate" element={<Validate />}></Route>
        <Route path="/users" element={<UsersPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
