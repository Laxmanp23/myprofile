import React from "react";
const Home = () => {
  
    const user = {
    name: "Laxman Pawar",
    email: "contact@laxmanpawar.site",
    bio: "Experienced React developer with a strong background in building scalable web applications.",
    skills: ["JavaScript", "React", "Node.js", "CSS"],
    avatarUrl: "https://via.placeholder.com/150",
  };

  return (
   
      <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden mt-10">
        <div className="flex items-center justify-center p-6">
          <img
            className="w-24 h-24 rounded-full"
            src={user.avatarUrl}
            alt="Avatar"
          />
        </div>
        <div className="px-6 py-4">
          <h1 className="text-xl font-semibold text-gray-800">{user.name}</h1>
          <p className="text-gray-600">{user.email}</p>
          <p className="mt-2 text-gray-600">{user.bio}</p>
        </div>
      </div>
      
  );
};
export default Home;
