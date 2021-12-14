import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import MainPage from "./pages/MainPage";
import Service from "./components/Service/Service";
import Module from "./components/module/Module";
import ModuleDetail from "./components/module/moduledetail/ModuleDetail";
import Press from "./pages/Press";
import Matrix from "./pages/Matrix";
import Map from "./pages/Map";

import "./styles/styles.scss";
import Page from "./pages/Page";

function App() {
  return (
    <div className="App">
      <Header />
      <MainPage />
      <Service />
      <Module />
      <ModuleDetail />
      <Page />
      <Press />
      <Matrix />
      <Map />
      <Footer />
    </div>
  );
}

export default App;
