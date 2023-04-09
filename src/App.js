import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Route, Routes, HashRouter} from "react-router-dom";
import {Calculator} from "./pages/Calculator";
import {About} from "./pages/About";

const App = () => {

    return (
        <HashRouter>
            <Routes>
                <Route path="/about" element={<About />} />
                <Route path="*" element={<Calculator />} />
            </Routes>
        </HashRouter>
    )
}

export default App