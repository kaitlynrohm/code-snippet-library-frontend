import "./App.css";
import { Routes, Route } from "react-router-dom";
// component and page imports
import Header from "./components/Header";
import AlterLibrary from "./pages/alterLibrary/AlterLibrary";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<AlterLibrary />} />
      </Routes>
    </>
  );
}

export default App;
