import { BrowserRouter, Route, Routes } from "react-router-dom";

import Layout from "@/components/layout";
import HomePage from "@/pages/home";
import SearchPage from "@/pages/search";
import PreacherPage from "@/pages/preacher";
import EditPreacherPage from "@/pages/edit-preacher";

const Navigation = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/mpitory-vaovao" element={<EditPreacherPage />} />
          <Route path="/hitady" element={<SearchPage />} />
          <Route path="/mpitory/:id" element={<PreacherPage />} />
          <Route path="/mpitory/:id/hanavao" element={<EditPreacherPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default Navigation;
