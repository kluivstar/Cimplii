import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";

import Home from "./pages/Home";
import JournalPage from "./pages/JournalPage";
import Career from "./pages/Career";
import About from "./pages/About";

function App() {
  return (
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/journal" element={<JournalPage />} />
          <Route path="/career" element={<Career />} />
          <Route path="/about" element={<About />} />
        </Route>
      </Routes>
  );
}

export default App;
