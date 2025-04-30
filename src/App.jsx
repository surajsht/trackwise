import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./page/Home";
import Income from "./page/Income";
import Expense from "./page/Expense";
import Error404 from "./page/Error404";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/income" element={<Income />} />
        <Route path="/expense" element={<Expense />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
