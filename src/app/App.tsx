import React from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import EndOfBodyStart from "../imports/EndOfBodyStart/EndOfBodyStart";
import EditPage from "../pages/EditPage";
import WorkPage from "../pages/WorkPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<EndOfBodyStart />} />
        <Route path="/work" element={<WorkPage />} />
        <Route path="/edit" element={<EditPage />} />
      </Routes>
    </BrowserRouter>
  );
}
