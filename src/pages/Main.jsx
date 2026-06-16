import Sidebar from "../components/main/Sidebar";
import Dashboard from "../components/main/Dashboard";
import Subject from "./Subject";
import Create from "./Create";
import { Routes, Route } from "react-router-dom";

function Main() {
  return (
    <main className="flex h-screen">
      <Sidebar/>

      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/subject" element={<Subject />} />
        <Route path="/create" element={<Create />} />
      </Routes>
    </main>
  );
}

export default Main;
