import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
// component and page imports
import Header from "./components/Header";
import AlterLibrary from "./pages/alterLibrary/AlterLibrary";
import AddSnippet from "./pages/alterLibrary/components/AddSnippet";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/add" />} />
        <Route path="/" element={<AlterLibrary />}>
          <Route path="add" element={<AddSnippet />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
