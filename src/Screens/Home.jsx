import React from "react";
import Content from "./Components/Content";

const Home = () => {
  
    const user = {
    name: "Laxman Pawar",
    email: "contact@laxmanpawar.site",
    bio: "Experienced React developer with a strong background in building scalable web applications.",
    skills: ["JavaScript", "React", "Node.js", "CSS"],
    avatarUrl: "https://via.placeholder.com/150",
  };

  return (
    <div>
      <Content />
    </div>
  );
};
export default Home;
