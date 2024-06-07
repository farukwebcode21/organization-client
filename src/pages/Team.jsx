// src/components/Team.js
import React from "react";

const teamMembers = [
  { name: "Jack", role: "Founder & CEO", imgSrc: "path_to_image" },
  { name: "John", role: "Cofounder & CTO", imgSrc: "path_to_image" },
  // Add other team members similarly
];

const Team = () => {
  return (
    <section className="py-20 h-screen">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Our Team</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="text-center">
              <img
                src={member.imgSrc}
                alt={member.name}
                className="rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-bold">{member.name}</h3>
              <p>{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
