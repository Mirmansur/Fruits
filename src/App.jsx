import Header from "./components/header/Header";
import Main from "../src/components/All/Main";
import { Route, Routes } from "react-router";
import Card from "./components/card/Card";
import Like from "./components/like/Like";

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/like" element={<Like />} />
        <Route path="/card" element={<Card />} />
      </Routes>
    </div>
  );
};
export default App;
