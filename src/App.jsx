import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";

import Home from "./pages/Home";
import JournalPage from "./pages/JournalPage";
import Career from "./pages/Careers";
import About from "./pages/About";

function App() {
  return (
    // Defines(not render) application routes
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/journal" element={<JournalPage />} />
          <Route path="/careers" element={<Career />} />
          <Route path="/about" element={<About />} />
        </Route>
      </Routes>
  );
}

export default App;
