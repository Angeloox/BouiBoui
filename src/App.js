import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Page1 from "./Pages/Page1";
import Page2 from "./Pages/Page2";
import Page3 from "./Pages/Page3";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Page1 />} />
          <Route path="/:category" element={<Page2 />} />
          <Route path="/:category/:list" element={<Page3 />} />
        </Routes>
        <Footer />
      </BrowserRouter>

      {/*  */}
    </div>
  );
}

export default App;
