import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import MainPage from "./pages/MainPage";
import Service from "./components/Service/Service";
import Module from "./components/module/Module";
import ModuleDetail from "./components/module/moduledetail/ModuleDetail";
// import ModuleBottom from "./pages/ModuleBottom";
import Value from "./pages/Value";
import Partners from "./pages/Partners";
import Press from "./pages/Press";
import Matrix from "./pages/Matrix";
import Map from "./pages/Map";

import "./styles/styles.scss";

function App() {
  return (
    <div className="App">
      <Header />
      <MainPage />
      <Service />
      <Module />
      {/* <ModuleBottom /> */}
      <ModuleDetail />
      <Value />
      <Partners />
      <Press />
      <Matrix />
      <Map />
      <Footer />
    </div>
  );
}

export default App;
