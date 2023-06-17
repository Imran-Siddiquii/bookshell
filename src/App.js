import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./Home";
import { SearchItem } from "./SearchItem";
import Header from "./Header";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/search-query/:id" element={<SearchItem />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
