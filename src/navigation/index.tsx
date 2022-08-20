import { BrowserRouter, Route, Routes } from "react-router-dom";

import Layout from "@/components/layout";
import HomePage from "@/pages/home";
import SearchPage from "@/pages/search";
import PreacherPage from "@/pages/preacher";

const Navigation = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/hitady" element={<SearchPage />} />
          <Route path="/mpitory/:id" element={<PreacherPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default Navigation;
