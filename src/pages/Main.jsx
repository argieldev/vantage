import Sidebar from "../components/main/Sidebar";
import Dashboard from "../components/main/Dashboard";
import Subject from "../components/main/Subject";
import { Routes, Route } from "react-router-dom";

function Main() {
  return (
    <main className="flex h-screen">
      <Sidebar />

      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/subject" element={<Subject />} />
      </Routes>
    </main>
  );
}

export default Main;
