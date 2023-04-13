import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

import Pricing from "./pages/Pricing";
import Services from "./pages/Services";
import Gallery from "./pages/Gallery";
import ScrollToTop from "./components/scroll-behaviour/ScrollToTop";
function App() {
    return (
        <>
            <ScrollToTop />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/pricing" element={<Pricing />} />
                <Route path="/services" element={<Services />} />
            </Routes>
        </>
    );
}

export default App;
