import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/react-movie-app/" element={<Home />} />
        <Route path="/react-movie-app/movie/:id" element={<Detail />} />
      </Routes>
    </Router>
  );
}

export default App;
