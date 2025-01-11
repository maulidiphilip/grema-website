import About from "@/components/schoolView/AboutUs/About";
import FeeStructure from "@/components/schoolView/AboutUs/FeeStructure ";
import Headteacher from "@/components/schoolView/AboutUs/Headteacher";
// import Mission from "@/components/schoolView/AboutUs/Mission";
import Team from "@/components/schoolView/AboutUs/Team";
import Home from "@/pages/Home";
import { Route, Routes } from "react-router-dom";

const Router = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        {/* About Routes */}
        <Route path="/aboutus/profile" element={<About />} />
        <Route path="/aboutus/headteacher" element={<Headteacher />} />
        <Route path="/aboutus/team" element={<Team />} />
        <Route path="/aboutus/fees" element={<FeeStructure />} />
      </Routes>
    </div>
  );
};

export default Router;
