import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Calculator} from "./pages/Calculator";
import {About} from "./pages/About";

const App = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/about" element={<About />} />
                <Route path="*" element={<Calculator />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App