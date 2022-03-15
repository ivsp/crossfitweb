import "./App.scss";
import "./custom.scss";
import Header from "./components/header/header";
//import Footer from './components/footer';

function App() {
  return (
    <div className="app">
      <Header></Header>
      <main>
        <div className="container--primary">
          <p>Esto es un contenedor primario</p>
        </div>
        <div className="container--secondary">
          <p>Esto es un contenedor Secundary</p>
        </div>
      </main>
      {/* <Footer></Footer> */}
    </div>
  );
}

export default App;
