import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Home from "../Screens/Home";
import About from "../Screens/About";
import Contact from "../Screens/Contact";
import NotFound from "../Screens/NotFound"
import Layout from "../Screens/Common/Layout";
const AppRouter = () => {
  return (
    <Router>
        <Layout>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={ <Navigate to="/not-found"/>} />
          <Route path="/not-found" element = {<NotFound/>} />
      </Routes>
        </Layout>
    </Router>
  );
};
export default AppRouter;