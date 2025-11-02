import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Portofolio from "./components/Portofolio";
import Experience from "./components/WorkExperience";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="font-sans antialiased">
      <Header />
      <Home />
      <About />
      <Experience />
      <Portofolio />
      <Footer />
    </div>
  );
}

export default App;
